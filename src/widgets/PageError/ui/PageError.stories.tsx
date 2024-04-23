import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PageError } from './PageError';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

export default {
    title: 'widget/PageError',
    // eslint-disable-next-line no-undef
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof PageError>;

const Template: StoryObj<typeof PageError> = {
    render: (args) => <PageError {...args} />,
};

export const Light: StoryObj<typeof PageError> = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: StoryObj<typeof PageError> = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
