import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Logo or App Title */}
      <Text style={styles.title}>SmartQueue</Text>
      {/* Placeholder for QR image */}
      <View style={styles.qrPlaceholder}>
        {/* You can use an Image here if you have a logo */}
        <Text style={{ fontSize: 40, color: '#aaa' }}>📱</Text>
      </View>
      {/* Scan QR Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Scan QR to join queue"
          onPress={() => router.push('/join')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 40 },
  qrPlaceholder: { width: 150, height: 150, borderWidth: 2, borderColor: '#ccc', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 30 },
  buttonContainer: { marginTop: 20, width: 200 }
});
