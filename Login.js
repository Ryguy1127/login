import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';

const Login = () => {
  const handleSend = () => {
    Alert.alert('Hello Ryan');
  };

  return (
    <TouchableOpacity
      style={styles.sendButton}
      onPress={handleSend}
    >
      <Text style={{ color: 'white' }}>Send</Text>
    </TouchableOpacity>
  );
};

export default Login;
