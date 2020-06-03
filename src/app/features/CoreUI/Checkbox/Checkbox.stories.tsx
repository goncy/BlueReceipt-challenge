import React from 'react';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';
import '../../App/Root/Root.scss';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

export const checked = () => (
  <Checkbox name='checkbox' checked onChange={action('changed')} />
);

export const unchecked = () => (
  <Checkbox name='checkbox' onChange={action('changed')} />
);

export const disabled = () => (
  <Checkbox name='checkbox' disabled onChange={action('changed')} />
);

export const label = () => (
  <Checkbox name='checkbox' checked label='Pass challenge' onChange={action('changed')} />
);
