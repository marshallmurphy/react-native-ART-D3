import React from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import BarGraph from './BarGraph';


export default function App() {
  const color = '#FFC77D';

  const data = [
    {"duration": 4, column: 0},
    {"duration": 7, column: 1},
    {"duration": 6, column: 2},
    {"duration": 7, column: 3},
    {"duration": 8, column: 4},
    {"duration": 5, column: 5},
    {"duration": 8, column: 6},
  ];

  return (
    <LinearGradient colors={['#282828', '#121212']} style={styles.linearGradient}>
      <StatusBar
        barStyle = "light-content"
        hidden = {false}
        backgroundColor = "#121212"
        translucent = {true}
        networkActivityIndicatorVisible = {true}
      />

      <View style={styles.topbar}>
        <View style={styles.topbar_inner}>
          <FontAwesomeIcon icon={faBars} style={styles.topbar_hamburger} />
          <View style={styles.topbar_avatar}></View>
        </View>
      </View>

      <View style={styles.spaceBetween}>
        <View style={styles.header}>
          <Text style={styles.header_title}>D3 + ART Bar Graph</Text>
          <Text style={styles.header_sub}>Made by you bc you're a bad ass.</Text>
        </View>

        <BarGraph
          color={color}
          data={data} />
      </View>

      <View style={styles.footer}></View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    height: Math.round(Dimensions.get('window').height),
    justifyContent: 'space-between',
  },
  topbar: {
    backgroundColor: 'rgba(18,18,18,0.75)',
    bottom: 2,
    height: 68
  },
  topbar_inner: {
    marginTop: 25,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#121212'
  },
  topbar_hamburger: {
    padding: 10,
    color: '#fff'
  },
  topbar_avatar: {
    borderRadius: 100,
    width: 25,
    height: 25,
    borderColor: '#fff',
    borderWidth: 1
  },
  footer: {
    height: 70,
    backgroundColor: '#232323',
  },
  header: {
    paddingTop: 20,
    paddingLeft: 25,
  },
  header_title: {
    color: '#fff',
    fontSize: 34,
    textTransform: 'capitalize',
  },
  header_sub: {
    color: '#fff',
    fontSize: 16,
    fontStyle: 'italic'
  },
  spaceBetween: {
    flex: 1,
    justifyContent: 'space-between'
  }
});
