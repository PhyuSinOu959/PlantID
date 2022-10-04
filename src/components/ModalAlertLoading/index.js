import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  Text,
  ActivityIndicator
} from 'react-native';

const ModalAlertLoading = ({ visible }) => (
  <Modal
    visible={visible}
  >
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Please Wait</Text>
        <View style={styles.loading}>
          <View style={styles.loader}>
            <ActivityIndicator size="large"  color='white' />
          </View>
          <View style={styles.loadingContent}>
            <Text style={styles.loadingText}>Loading</Text>
          </View> 
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 35,
    backgroundColor: 'rgba(0, 0, 0, .5)'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'white',
    marginBottom:10
  },
  loading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loader: {
    flex: 1,
  },
  loadingContent: {
    flex: 3,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  loadingText:{
     color:'white',
     marginLeft:5
  }
})

export default ModalAlertLoading;