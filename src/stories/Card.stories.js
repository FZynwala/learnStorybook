import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import Card from '@material-ui/core/Card';

export default {
    title: 'Card',
    decorators: [withKnobs]
};

const MAIN_CARD = 'MAIN_CARD';

export const card = () => {
    const props = {
        raised: boolean('Raised', false, MAIN_CARD),
        children: text('Content', 'Card content', MAIN_CARD)
    }

    return <Card {...props} onClick={action('clicked')} />;
}