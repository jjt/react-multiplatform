import deepmerge from 'deepmerge';
import React, {
  StyleSheet,
  View,
  Platform
} from 'react-native';

import Screen from './Screen';
import Formulae from './Formulae';
import Keyboard from './Keyboard';
import AppStyles from './AppStyles';

const styles = StyleSheet.create(deepmerge(AppStyles, {
  screen: {
    alignItems: Platform.OS === 'android' ? 'center' : 'flex-end',
  },
};

export default function () {
  return (
    <View style={styles.container}>
      <View style={styles.screen} >
        <Screen />
      </View>
      <View style={styles.formulae}>
        <Formulae />
      </View>
      <View style={styles.keyboard}>
        <Keyboard />
      </View>
    </View>
  );
}
