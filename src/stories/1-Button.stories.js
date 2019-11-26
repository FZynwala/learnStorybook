import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import Button from '@material-ui/core/Button';

export default {
  title: 'Button',
  decorators: [withKnobs]
};

const MAIN_CARD = 'MAIN_CARD';

const colors = {
  Default: 'default',
  Inherit: 'inherit',
  Primary: 'primary',
  Secondary: 'secondary'
};

const variant = {
  Text: 'text',
  Outlined: 'outlined',
  Contained: 'contained'
}

const size = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large'
}

export const button = () => {
  const props = {
    color: select('Colors', colors, 'default', MAIN_CARD),
    variant: select('Variant', variant, 'text', MAIN_CARD),
    size: select('Size', size, 'small', MAIN_CARD),
    disabled: boolean("Disabled", false, MAIN_CARD),
    fullWidth: boolean('Full width', false, MAIN_CARD)
  }

  return <Button {...props} onClick={action('clicked')}>{text('Text','Hello Button', MAIN_CARD)}</Button>;
} 

