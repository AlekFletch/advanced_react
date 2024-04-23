import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../../app/providers/ThemeProvider';

export default {
    title: 'shared/ThemeSwitcher',
    // eslint-disable-next-line no-undef
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as Meta<typeof ThemeSwitcher>;

export const Normal: StoryObj<typeof ThemeSwitcher> = {
    args: {},
};
export const Dark: StoryObj<typeof ThemeSwitcher> = {
    // eslint-disable-next-line no-undef
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
