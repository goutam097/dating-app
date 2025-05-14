
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function OtpScreen() {
  const router = useRouter()
  const [timer, setTimer] = useState(60);
  const [otp, setOtp] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

//   const handleOtpChange = (text) => {
//     if (text.length <= 4) setOtp(text);
//   };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sent you an{'\n'}OTP!</Text>
      <View style={styles.phoneRow}>
        <Text style={styles.phoneText}>+91 9476448744</Text>
        <TouchableOpacity onPress={()=>router.push('/(auth)/PhoneScreen')}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.otpContainer}>
        {[0, 1, 2, 3].map((_, index) => (
          <View key={index} style={styles.otpBox}>
            <Text style={styles.otpChar}>{otp[index] || ''}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.timerText}>
        {timer < 10 ? `00:0${timer}` : `00:${timer}`}
      </Text>

      <TouchableOpacity onPress={()=>router.push('/(intro)/QuickIntroScreen')}
        style={[styles.continueButton, { backgroundColor: otp.length === 4 ? '#8d2561' : '#eee' }]}
        // disabled={otp.length !== 4}
      >
        <Text 
          style={{
            color: otp.length === 4 ? '#fff' : '#999',
            fontWeight: '600',
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    marginTop: 30,
    color: '#111',
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 40,
  },
  phoneText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  editText: {
    fontSize: 16,
    color: '#8d2561',
    marginLeft: 10,
    fontWeight: '500',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  otpBox: {
    borderBottomWidth: 2,
    borderColor: '#ccc',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpChar: {
    fontSize: 20,
    fontWeight: '600',
  },
  timerText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#111',
    marginBottom: 40,
  },
  continueButton: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
});
