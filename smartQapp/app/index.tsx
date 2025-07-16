import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function JoinQueueScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('');
  const router = useRouter();

  const handleJoin = async () => {
    try {
      console.log('Submitting:', { name, phone, serviceType });
      const res = await fetch('https://smartqueue-backend-17gx.onrender.com/queue/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, service_type: serviceType }),
      });
      console.log('Response status:', res.status);
      const text = await res.text();
      console.log('Response text:', text);
      if (!res.ok) throw new Error(`Failed to join queue: ${text}`);
      const data = JSON.parse(text);
      console.log('Parsed data:', data);
      if (!data.token) {
        Alert.alert('Error', 'No token returned from backend.');
        console.log('No token returned!');
        return;
      }
      console.log('Navigating to status page with token:', data.token);
      router.replace({ pathname: '/queue-status', params: { token: data.token } });
    } catch (err: any) {
      Alert.alert('Error', err.message || 'Could not join queue');
      console.log('Join error:', err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SmartQueue</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Service Type (Meals/Snacks)"
        value={serviceType}
        onChangeText={setServiceType}
      />
      <Button
        title="Join"
        onPress={handleJoin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 40 },
  input: { width: 250, height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, marginBottom: 20, paddingHorizontal: 10 }
});