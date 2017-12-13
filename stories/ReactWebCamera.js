import React from 'react';
import { storiesOf } from '@storybook/react';

import Camera from '../src';

storiesOf('React Web Camera', module)
  .add('First storie', () => (
    <Camera />
  ));