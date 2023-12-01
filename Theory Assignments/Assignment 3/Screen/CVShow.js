import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CVDisplayScreen = ({ route }) => {
  const { cvData } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>CV Display Screen</Text>
      {/* Display user data in the app header */}
      <Text style={styles.headerText}>Welcome, {cvData.username}!</Text>

      {/* Display CV Information */}
      <View style={styles.cvSection}>
        <Text style={styles.sectionTitle}>Personal Details:</Text>
        <Text>{cvData.personalDetails}</Text>
      </View>

      <View style={styles.cvSection}>
        <Text style={styles.sectionTitle}>Professional Summary:</Text>
        <Text>{cvData.professionalSummary}</Text>
      </View>

      <View style={styles.cvSection}>
        <Text style={styles.sectionTitle}>Work Experience:</Text>
        <Text>{cvData.workExperience}</Text>
      </View>

      <View style={styles.cvSection}>
        <Text style={styles.sectionTitle}>Education:</Text>
        <Text>{cvData.education}</Text>
      </View>

      <View style={styles.cvSection}>
        <Text style={styles.sectionTitle}>Skills:</Text>
        <Text>{cvData.skills}</Text>
      </View>

      <View style={styles.cvSection}>
        <Text style={styles.sectionTitle}>Certifications and Awards:</Text>
        <Text>{cvData.certificationsAndAwards}</Text>
      </View>

      <View style={styles.cvSection}>
        <Text style={styles.sectionTitle}>Publications and Presentations:</Text>
        <Text>{cvData.publicationsAndPresentations}</Text>
      </View>

      <View style={styles.cvSection}>
        <Text style={styles.sectionTitle}>Professional Memberships and Affiliations:</Text>
        <Text>{cvData.professionalMemberships}</Text>
      </View>

      <View style={styles.cvSection}>
        <Text style={styles.sectionTitle}>Volunteer Work:</Text>
        <Text>{cvData.volunteerWork}</Text>
      </View>
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
    marginBottom: 16, // Increased spacing below the header text
    color: '#555', // Changed text color
  },
  cvSection: {
    marginVertical: 20, // Increased vertical margin for sections
  },
  sectionTitle: {
    fontSize: 20, // Increased font size for section titles
    fontWeight: 'bold',
    marginBottom: 12, // Increased spacing below section titles
    color: '#007AFF', // Changed text color
  },
});

  export default CVDisplayScreen;
  