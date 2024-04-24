import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

export default {
    title: 'shared/Loader',
    // eslint-disable-next-line no-undef
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as Meta<typeof Loader>;

export const Normal: StoryObj<typeof Loader> = {
    args: {},
};
export const Dark: StoryObj<typeof Loader> = {
    // eslint-disable-next-line no-undef
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
