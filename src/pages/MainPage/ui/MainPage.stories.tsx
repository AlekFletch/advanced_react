import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof MainPage>;

export const Normal: StoryObj<typeof MainPage> = {
    args: {},
};
export const Dark: StoryObj<typeof MainPage> = {
    // eslint-disable-next-line no-undef
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
