import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

export default {
    title: 'shared/AppLink',
    // eslint-disable-next-line no-undef
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as Meta<typeof AppLink>;

export const Primary: StoryObj<typeof AppLink> = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: StoryObj<typeof AppLink> = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
};
export const Red: StoryObj<typeof AppLink> = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED,
    },
};
export const PrimaryDark: StoryObj<typeof AppLink> = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: StoryObj<typeof AppLink> = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const RedDark: StoryObj<typeof AppLink> = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED,
    },
    // eslint-disable-next-line no-undef
    decorators: [ThemeDecorator(Theme.DARK)],
};
