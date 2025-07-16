import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function JoinQueueScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('');
  const router = useRouter();

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
        onPress={() => {
          // For now, just go to a placeholder queue status screen
          router.push('/queue-status');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 40 },
  input: { width: 250, height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, marginBottom: 20, paddingHorizontal: 10 }
});