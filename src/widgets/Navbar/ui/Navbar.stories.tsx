import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Navbar } from './Navbar';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

export default {
    title: 'widget/Navbar',
    // eslint-disable-next-line no-undef
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Navbar>;

const Template: StoryObj<typeof Navbar> = {
    render: (args) => <Navbar {...args} />,
};

export const Light: StoryObj<typeof Navbar> = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: StoryObj<typeof Navbar> = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
