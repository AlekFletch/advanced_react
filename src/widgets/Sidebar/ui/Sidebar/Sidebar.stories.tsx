import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from '../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../../app/providers/ThemeProvider';

export default {
    title: 'widget/Sidebar',
    // eslint-disable-next-line no-undef
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Sidebar>;

const Template: StoryObj<typeof Sidebar> = {
    render: (args) => <Sidebar {...args} />,
};

export const Light: StoryObj<typeof Sidebar> = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: StoryObj<typeof Sidebar> = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
