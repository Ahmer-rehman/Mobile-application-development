import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CVFormScreen = ({ navigation, route }) => {
  const { userData } = route.params;
  const [personalDetails, setPersonalDetails] = useState('');
  const [professionalSummary, setProfessionalSummary] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  const [certificationsAndAwards, setCertificationsAndAwards] = useState('');
  const [publicationsAndPresentations, setPublicationsAndPresentations] = useState('');
  const [professionalMemberships, setProfessionalMemberships] = useState('');
  const [volunteerWork, setVolunteerWork] = useState('');

  useEffect(() => {
     setPersonalDetails(userData.personalDetails || '');
    setProfessionalSummary(userData.professionalSummary || '');
    setWorkExperience(userData.workExperience || '');
    setEducation(userData.education || '');
    setSkills(userData.skills || '');
    setCertificationsAndAwards(userData.certificationsAndAwards || '');
    setPublicationsAndPresentations(userData.publicationsAndPresentations || '');
    setProfessionalMemberships(userData.professionalMemberships || '');
    setVolunteerWork(userData.volunteerWork || '');
  }, [userData]);

  const handleSaveCV = async () => {
    try {
      const updatedUserData = {
        ...userData,
        personalDetails,
        professionalSummary,
        workExperience,
        education,
        skills,
        certificationsAndAwards,
        publicationsAndPresentations,
        professionalMemberships,
        volunteerWork,
      };

      await AsyncStorage.setItem(userData.username, JSON.stringify(updatedUserData));

      navigation.navigate('CVDisplay', { cvData: updatedUserData });
    } catch (error) {
      console.error('Error saving CV data:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>CV Form Screen</Text>
      <Text style={styles.headerText}>Welcome, {userData.username}!</Text>
      <TextInput
        style={styles.input}
        placeholder="Personal Details"
        value={personalDetails}
        onChangeText={setPersonalDetails}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Professional Summary"
        value={professionalSummary}
        onChangeText={setProfessionalSummary}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Work Experience"
        value={workExperience}
        onChangeText={setWorkExperience}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Education"
        value={education}
        onChangeText={setEducation}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Skills"
        value={skills}
        onChangeText={setSkills}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Certifications and Awards"
        value={certificationsAndAwards}
        onChangeText={setCertificationsAndAwards}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Publications and Presentations"
        value={publicationsAndPresentations}
        onChangeText={setPublicationsAndPresentations}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Professional Memberships and Affiliations"
        value={professionalMemberships}
        onChangeText={setProfessionalMemberships}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Volunteer Work"
        value={volunteerWork}
        onChangeText={setVolunteerWork}
        multiline
      />

      <Button title="Save CV" onPress={handleSaveCV} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24, // Increased padding for more spacing
    backgroundColor: '#f0f0f0', // Added a background color
  },
  title: {
    fontSize: 32, // Increased font size for a more prominent title
    fontWeight: 'bold',
    marginBottom: 24, // Increased spacing below the title
    color: '#333', // Changed text color
  },
  headerText: {
    fontSize: 24, // Increased font size for the header text
    marginBottom: 20, // Increased spacing below the header text
    color: '#555', // Changed text color
  },
  input: {
    height: 50, // Reduced input height for better form design
    borderColor: '#007AFF', // Changed border color to a more appealing color
    borderBottomWidth: 2, // Added a bottom border for a cleaner look
    width: 300,
    marginVertical: 20, // Increased spacing around the input
    paddingHorizontal: 12, // Increased horizontal padding
    borderRadius: 10, // Added border radius for rounded corners
    backgroundColor: 'white', // Changed background color to white
    color: '#333', // Changed text color
  },
});

export default CVFormScreen;
