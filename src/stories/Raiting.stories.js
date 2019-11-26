import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select, string } from "@storybook/addon-knobs";
import Rating from '@material-ui/lab/Rating';
import { Star, SvgIcon, FavoriteIcon } from '@material-ui/core';

export default {
    title: 'Rating',
    decorators: [withKnobs]
};

const MAIN_CARD = 'MAIN_CARD';

const size = {
    Small: 'small',
    Medium: 'medium',
    Large: 'large'
  }

export const star = () => {
    const props ={
        disabled: boolean('Disabled', false, MAIN_CARD),
        max: number('Max rating', 5, {}, MAIN_CARD),
        name: text('Name', 'Name', MAIN_CARD),
        readOnly: boolean('Read only', false, MAIN_CARD),
        precision: number('Precision', 1, {}, MAIN_CARD),
        value: number('Value', null,{}, MAIN_CARD),
        size: select('Size', size, 'small', MAIN_CARD)
    }

return <Rating {...props} onClick={action('clicked')} />
}

//icon={<FavoriteIcon fontSize="inherit" />}