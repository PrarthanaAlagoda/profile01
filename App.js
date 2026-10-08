import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Profile Content */}
      <View style={styles.content}>

        {/* Profile Image */}
        <Image
          source={require('./assets/profile.jpg')}
          style={styles.profileImage}
        />

        {/* Divider */}
        <View style={styles.divider} />

        {/* Name */}
        <View style={styles.infoSection}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Prarthana Alagoda</Text>
        </View>

        {/* Email */}
        <View style={styles.infoSection}>
          <Text style={styles.label}>Email</Text>

          <View style={styles.row}>
            <Ionicons
              name="mail"
              size={18}
              color="#000"
              style={styles.icon}
            />

            <Text style={styles.value}>
              alagoda.p@nsbm.ac.lk
            </Text>
          </View>
        </View>

        {/* Points */}
        <View style={styles.infoSection}>
          <Text style={styles.label}>Points</Text>

          <View style={styles.row}>
            <Ionicons
              name="star"
              size={18}
              color="#000"
              style={styles.icon}
            />

            <Text style={styles.value}>0</Text>
          </View>
        </View>

      </View>

      {/* Floating + Button */}
      <Pressable
        style={styles.addButton}
        onPress={() => Alert.alert('Add', 'Add button pressed!')}
      >
        <Ionicons
          name="add"
          size={28}
          color="#fff"
        />
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  /* Main Screen */
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  /* Black Header */
  header: {
    height: 60,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  /* Main Content */
  content: {
    padding: 20,
  },

  /* Profile Picture */
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 20,
  },

  /* Horizontal Line */
  divider: {
    height: 1,
    backgroundColor: '#000',
    marginBottom: 15,
  },

  /* Information Sections */
  infoSection: {
    marginBottom: 18,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  value: {
    fontSize: 15,
    color: '#222',
  },

  /* Icon + Text */
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginRight: 8,
  },

  /* Floating Button */
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

});