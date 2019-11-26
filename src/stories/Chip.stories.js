import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

export default {
    title: 'Chip',
    decorators: [withKnobs]
};

const MAIN_CARD = 'MAIN_CARD';

const colors = {
    Default: 'default',
    Primary: 'primary',
    Secondary: 'secondary'
};

const size = {
    Small: 'small',
    Medium: 'medium'
};

const variant = {
    Default: 'default',
    Outlined: 'outlined'
}

export const chip = () => {
    const props = {
        color: select('Colors', colors, 'default', MAIN_CARD),
        size: select('Size', size, 'small', MAIN_CARD),
        variant: select('Variant', variant, 'default', MAIN_CARD),
        clickable: boolean('Clickable', false, MAIN_CARD),
        disabled: boolean("Disabled", false, MAIN_CARD),
        label: text('Content', 'Labels content',MAIN_CARD)
    };

    return <Chip {...props} avatar={<Avatar>M</Avatar>} />
};
