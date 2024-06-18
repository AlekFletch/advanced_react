import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, ButtonSize, ButtonTheme } from './Button';
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
        theme: ButtonTheme.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ClearInverted: StoryObj<typeof Button> = {
    ...Template,
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const Outline: StoryObj<typeof Button> = {
    ...Template,
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OutlineSizeL: StoryObj<typeof Button> = {
    ...Template,
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const OutlineSizeXL: StoryObj<typeof Button> = {
    ...Template,
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const OutlineDark: StoryObj<typeof Button> = {
    ...Template,
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundTheme: StoryObj<typeof Button> = {
    ...Template,
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInverted: StoryObj<typeof Button> = {
    ...Template,
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: StoryObj<typeof Button> = {
    ...Template,
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareSizeL: StoryObj<typeof Button> = {
    ...Template,
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeXL: StoryObj<typeof Button> = {
    ...Template,
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
