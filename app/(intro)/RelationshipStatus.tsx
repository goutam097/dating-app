import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import ProgressBar from '../components/Shared/ProgressBar';

const statusOptions = [
  'Single',
  'Single with kid(s)',
  'Divorced',
  'Divorced with kid(s)',
  'Widowed',
  'Widowed with kid(s)',
  'Separated',
  'Separated with kid(s)',
];

export default function RelationshipStatus() {
                  const router = useRouter()
    
  const [selectedStatus, setSelectedStatus] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.progressBar} /> */}
      <ProgressBar />

      <Text style={styles.heading}>What’s your{'\n'}status?</Text>
      <Text style={styles.subheading}>
        By selecting an option below, you confirm that{'\n'}you’re not in a committed relationship.
      </Text>

      <View style={styles.optionsWrapper}>
        {statusOptions.map((status, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedStatus === status && styles.selectedButton,
            ]}
            onPress={() => setSelectedStatus(status)}
          >
            <Text
              style={[
                styles.optionText,
                selectedStatus === status && styles.selectedText,
              ]}
            >
              {status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.noteBox}>
        <AntDesign name="infocirlceo" size={16} color="#555" />
        <Text style={styles.noteText}>
          You can always edit this in your profile.
        </Text>
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={()=>router.push('/(intro)/ReligionSelection')}>
        <AntDesign name="arrowright" size={24} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop:90
  },
  progressBar: {
    height: 4,
    backgroundColor: '#111',
    width: '20%',
    borderRadius: 4,
    marginVertical: 16,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111',
    marginBottom: 6,
  },
  subheading: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    lineHeight: 20,
  },
  optionsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 32,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#f6f6f6',
  },
  selectedButton: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  optionText: {
    color: '#444',
    fontSize: 14,
  },
  selectedText: {
    color: '#fff',
    fontWeight: '600',
  },
  noteBox: {
    flexDirection: 'row',
    backgroundColor: '#f6f6f6',
    padding: 12,
    borderRadius: 10,
    gap: 8,
  },
  noteText: {
    flex: 1,
    fontSize: 13,
    color: '#444',
  },
  nextButton: {
    position: 'absolute',
    bottom: 32,
    right: 24,
    backgroundColor: '#8d2561',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
