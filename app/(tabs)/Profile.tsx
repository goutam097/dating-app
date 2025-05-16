import Colors from '@/data/Colors';
import { mockCurrentUser, mockUserPhotos } from '@/utils/mockData';
import { Feather, Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { Image, Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileSection from '../components/ProfileSection';
import ProfileSettingsModal from '../components/ProfileSettingsModal';
import Button from '../components/Shared/Button';
import Typography from '../components/Shared/Typography';

export default function ProfileScreen() {
  const [userProfile, setUserProfile] = useState(mockCurrentUser);
  const [settingsVisible, setSettingsVisible] = useState(false);

  const openWebBrowser = async () => {
    if (Platform.OS !== 'web') {
      await WebBrowser.openBrowserAsync('https://www.example.com/upgrade');
    } else {
      window.open('https://www.example.com/upgrade', '_blank');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Typography variant="title">Profile</Typography>
        <Pressable style={styles.settingsButton} onPress={() => setSettingsVisible(true)}>
          {/* <Settings size={24} color={Colors.text} /> */}
          <Ionicons name="settings-outline" size={24} color={Colors.text} />
        </Pressable>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: userProfile.photoUrl }} style={styles.profileImage} />
            <Pressable style={styles.editPhotoButton}>
              {/* <Camera size={20} color="white" /> */}
              <Feather name="camera" size={20} color="white" />
            </Pressable>
          </View>

          <View style={styles.profileInfo}>
            <View style={styles.nameRow}>
              <Typography variant="title" style={styles.profileName}>
                {userProfile.firstName}, {userProfile.age}
              </Typography>
              <Pressable style={styles.editProfileButton}>
                {/* <Edit2 size={16} color={Colors.primary} /> */}
                <Feather name="credit-card" size={24} color={Colors.primary} />
              </Pressable>
            </View>
            <Typography style={styles.profileLocation}>{userProfile.location}</Typography>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Typography variant="stat">{userProfile.stats.matches}</Typography>
              <Typography variant="statLabel">Matches</Typography>
            </View>
            <View style={styles.statItem}>
              <Typography variant="stat">{userProfile.stats.likes}</Typography>
              <Typography variant="statLabel">Likes</Typography>
            </View>
            <View style={styles.statItem}>
              <Typography variant="stat">{userProfile.stats.profileViews}</Typography>
              <Typography variant="statLabel">Profile Views</Typography>
            </View>
          </View>
        </View>

        <View style={styles.upgradeCard}>
          <Typography style={styles.upgradeTitle}>Upgrade to Premium</Typography>
          <Typography style={styles.upgradeText}>
            Get unlimited likes, see who likes you, and more!
          </Typography>
          <Button text="Upgrade Now" onPress={openWebBrowser} />
         
        </View>

        <ProfileSection title="About Me">
          <Typography style={styles.aboutText}>{userProfile.bio}</Typography>
        </ProfileSection>

        <ProfileSection title="My Photos">
          <View style={styles.photoGrid}>
            {mockUserPhotos.map((photo, index) => (
              <Pressable key={index} style={styles.photoItem}>
                <Image source={{ uri: photo.url }} style={styles.photo} />
              </Pressable>
            ))}
            <Pressable style={[styles.photoItem, styles.addPhotoItem]}>
              {/* <Camera size={32} color={Colors.lightGray} /> */}
              <Feather name="camera" size={32} color={Colors.lightGray} />

            </Pressable>
          </View>
        </ProfileSection>

        <ProfileSection title="My Interests">
          <View style={styles.interestsContainer}>
            {userProfile.interests.map((interest, index) => (
              <View key={index} style={styles.interestBadge}>
                <Typography style={styles.interestText}>{interest}</Typography>
              </View>
            ))}
          </View>
        </ProfileSection>

        <View style={styles.footer}>
          <Button 
            text="Logout" 
            variant="outline" 
            onPress={() => {}}
          />
        </View>
      </ScrollView>

      <ProfileSettingsModal 
        visible={settingsVisible}
        onClose={() => setSettingsVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    position: 'relative',
  },
  settingsButton: {
    position: 'absolute',
    right: 16,
    padding: 8,
  },
  scrollView: {
    flex: 1,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: Colors.primary,
  },
  editPhotoButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: Colors.primary,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 16,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginRight: 8,
  },
  editProfileButton: {
    padding: 4,
  },
  profileLocation: {
    color: Colors.darkGray,
    marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: 24,
    width: '100%',
    paddingHorizontal: 32,
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  upgradeCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    alignItems: 'center',
  },
  upgradeTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    marginBottom: 8,
  },
  upgradeText: {
    textAlign: 'center',
    marginBottom: 16,
    color: Colors.darkGray,
  },
  aboutText: {
    lineHeight: 22,
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
  },
  photoItem: {
    width: '33.33%',
    aspectRatio: 1,
    padding: 4,
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  addPhotoItem: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderStyle: 'dashed',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
  },
  interestBadge: {
    backgroundColor: Colors.lightPrimary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    margin: 4,
  },
  interestText: {
    color: Colors.primary,
    fontSize: 14,
  },
  footer: {
    padding: 16,
    marginBottom: 16,
  },
});