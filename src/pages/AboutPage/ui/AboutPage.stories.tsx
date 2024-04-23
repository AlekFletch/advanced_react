import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof AboutPage>;

export const Normal: StoryObj<typeof AboutPage> = {
    args: {},
};
export const Dark: StoryObj<typeof AboutPage> = {
    // eslint-disable-next-line no-undef
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
