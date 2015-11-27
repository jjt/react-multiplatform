import React from 'react';

import Screen from './Screen';
import Formulae from './Formulae';
import Keyboard from './Keyboard';
import AppStyles from './AppStyles';

export default function () {
  return (
    <div style={AppStyles.container}>
      <Screen style={AppStyles.screen}/>
      <Formulae style={AppStyles.formulae}/>
      <Keyboard style={AppStyles.keyboard}/>
    </div>
  );
}
