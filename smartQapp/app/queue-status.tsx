import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

interface StatusResponse {
  token: string;
  position: number;
  eta: number;
  status: string;
}

export default function QueueStatusScreen() {
  const router = useRouter();
  const { token } = useLocalSearchParams();
  console.log('Status page token:', token);
  const [status, setStatus] = useState<StatusResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      Alert.alert('Error', 'No token provided. Returning to home.');
      console.log('No token param!');
      setTimeout(() => router.replace('/'), 2000);
      return;
    }
    let isMounted = true;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const fetchStatus = () => {
      fetch(`https://smartqueue-backend-17gx.onrender.com/queue/status/${token}`)
        .then(res => {
          if (res.status === 404) throw new Error('Token not found');
          if (!res.ok) throw new Error('Failed to fetch status');
          return res.json();
        })
        .then((data: StatusResponse) => { if (isMounted) setStatus(data); })
        .catch(err => {
          if (isMounted) {
            setStatus(null);
            Alert.alert('Info', 'Your token is no longer in the queue. Returning to home.');
            console.log('Status fetch error:', err);
            timeoutId = setTimeout(() => router.replace('/'), 2000);
          }
        })
        .finally(() => { if (isMounted) setLoading(false); });
    };
    fetchStatus();
    const interval = setInterval(fetchStatus, 2000);
    return () => { isMounted = false; clearInterval(interval); if (timeoutId) clearTimeout(timeoutId); };
  }, [token]);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} />;

  if (!status) return <Text>Error loading status.</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SmartQueue</Text>
      <Text style={styles.token}>Your Token: {status?.token}</Text>
      <Text style={styles.info}>Current Position: {status?.position}</Text>
      <Text style={styles.info}>Estimated Wait: {status?.eta} mins</Text>
      <Text style={styles.info}>Status: {status?.status}</Text>
      <Button
        title="Leave Queue"
        onPress={() => {
          fetch(`https://smartqueue-backend-17gx.onrender.com/queue/leave/${status?.token}`, { method: 'DELETE' })
            .then(() => router.replace('/'));
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 40 },
  token: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  info: { fontSize: 18, marginBottom: 10 }
});