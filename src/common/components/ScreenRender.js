'use strict';

import React from 'react';

export default function (props, state) {
  return (
    <div style={props.style}>
      {state.displayScreen}
    </div>
  );
}
