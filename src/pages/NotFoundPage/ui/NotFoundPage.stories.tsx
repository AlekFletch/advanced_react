import type { Meta, StoryObj } from '@storybook/react';
import { NotFoundPage } from './NotFoundPage';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof NotFoundPage>;

export const Normal: StoryObj<typeof NotFoundPage> = {
    args: {},
};
export const Dark: StoryObj<typeof NotFoundPage> = {
    // eslint-disable-next-line no-undef
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
