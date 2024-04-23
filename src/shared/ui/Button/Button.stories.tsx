import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Button>;

const Template: StoryObj<typeof Button> = {
    render: (args) => <Button {...args} />,
};

export const Primary: StoryObj<typeof Button> = {
    ...Template,
    args: {
        children: 'Text',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Clear: StoryObj<typeof Button> = {
    ...Template,
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const Outline: StoryObj<typeof Button> = {
    ...Template,
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OutlineDark: StoryObj<typeof Button> = {
    ...Template,
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
