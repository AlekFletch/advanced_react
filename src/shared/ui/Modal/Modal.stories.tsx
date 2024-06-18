import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Modal>;

const Template: StoryObj<typeof Modal> = {
    render: (args) => <Modal {...args} />,
};

export const Primary: StoryObj<typeof Modal> = {
    ...Template,
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: StoryObj<typeof Modal> = {
    ...Template,
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
