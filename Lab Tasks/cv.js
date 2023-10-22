import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Contact /><Summary />
      <Education />
      <TopSkills />
      <Certifications />
      
      <Experience />
    </ScrollView>
  );
};

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.name}>Ahmer Rehman</Text>
      <Text>Quality Assurance Engineer || Mobile Application developer</Text>
      <Text>Prompts Engineer || Member of Google Developers Core Team</Text>
      <Text>Punjab, Pakistan</Text>
    </View>
  );
};

const Contact = () => 
  return (
    <View style={styles.contactContainer}>
      <Text>House # 84-b, Street 5, Dar ul Islam Colony, Attock</Text>
      <Text>Mobile: 923350408438</Text>
      <Text>Email: arskkhattak@gmail.com</Text>
      <Text onPress={() => Linking.openURL('https://www.linkedin.com/in/ahmerrehman')}>LinkedIn: www.linkedin.com/in/ahmerrehman</Text>
      <Text onPress={() => Linking.openURL('https://github.com/Ahmer-rehman')}>GitHub: github.com/Ahmer-rehman</Text>
    </View>
  );
};

const TopSkills = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Top Skills</Text>
      <Text>Prompt Engineering</Text>
      <Text>Microsoft Excel</Text>
      <Text>Methodology</Text>
    </View>
  );
};

const Certifications = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Certifications</Text>
      <Text>Swift (Programming language)</Text>
      <Text>React +Redux</Text>
    </View>
  );
};

const Summary = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Summary</Text>
      <Text>Ahmer Rehman | Software Quality Engineer | Comsats Institute of Information and Technology, Attock City, Pakistan</Text>
      {/*... More summary details */}
    </View>
  );
};

const Experience = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Experience</Text>
      <Text>Indaraj Technologies Pvt. Ltd.</Text>
      <Text>Software Quality Assurance Engineer, Islamabad, Pakistan</Text>
      <Text>November 2022 - March 2023 (5 months)</Text>
    </View>
  );
};

const Education = () => {
  return (
    <View
      style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Education</Text>
      <Text>Comsats Institute of Information and Technology, Attock City, Pakistan</Text>
      <Text>BS Software Engineering</Text>
      <Text>2018 - 2022</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  headerContainer: {
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  contactContainer: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  sectionContainer: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  }
});

export default App;
