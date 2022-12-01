/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  Modal,
  Button,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';

export const Form = ({modalVisible}) => {
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.content}>
        <ScrollView>
          <Text style={styles.boldTitle}>
            Nuevo {''}
            <Text style={styles.boldTitle}> Usuario</Text>
          </Text>
          <View style={styles.text_input}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              keyboardType=""
              placeholder="Nombre"
              placeholderTextColor={'#00000'}
            />
            <Text style={styles.label}>Correo</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholderTextColor={'#00000'}
            />
            <Text style={styles.label}>Celular</Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              placeholderTextColor={'#00000'}
            />
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              keyboardType=""
              placeholder="Nombre"
              placeholderTextColor={'#00000'}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#0069a3',
    felx: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
    marginEnd: 20,
    color: '#FFF'
  },
  boldTitle: {
    fontWeight: '700',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 10,
    color: '#FFF',
  },
  text_input: {
    marginTop: 40,
    marginHorizontal: 30,
    marginBottom: 100,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
})
