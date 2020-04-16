import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigations from './app/navigations/Navigations'
import {firebaseApp} from "./app/utils/Firebase"

export default function App() {
  return (
    <Navigations/>
  );
}
