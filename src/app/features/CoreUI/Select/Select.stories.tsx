import React from 'react';
import { action } from '@storybook/addon-actions';

import Select from './Select';
import '../../App/Root/Root.scss';

export default {
  component: Select,
  title: 'Select',
};

const OPTIONS = ['option 1', 'option 2', 'option 3'];

export const normal = () => (
  <Select options={OPTIONS} onChange={action('changed')} />
);

export const open = () => (
  <Select options={OPTIONS} isOpen onChange={action('changed')} />
);

export const withOnClick = () => (
  <Select options={OPTIONS} isOpen onClick={action('click')} onChange={action('changed')} />
);

export const withOnClickAndValue = () => (
  <Select options={OPTIONS} isOpen onClick={action('click')} value='Something' onChange={action('changed')} />
);

export const multiWithOnClickAndValue = () => (
  <Select
    isOpen
    options={OPTIONS}
    type='multi'
    onClick={action('click')}
    value='Something'
    onChange={action('changed')}
  />
);

export const disabled = () => (
  <Select options={OPTIONS} disabled onClick={action('click')} value='Something' onChange={action('changed')} />
);
