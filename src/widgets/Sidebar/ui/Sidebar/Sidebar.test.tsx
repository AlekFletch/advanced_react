import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { componentRender } from '../../../../shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
    test('with only first param', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('toggles collapse state on button click', () => {
        componentRender(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        const sidebar = screen.getByTestId('sidebar');

        // Проверяем, что изначально sidebar не свернут
        expect(sidebar).not.toHaveClass('collapsed');

        // Имитируем клик по кнопке "Toggle"
        fireEvent.click(toggleButton);

        // Проверяем, что sidebar свернулся
        expect(sidebar).toHaveClass('collapsed');

        // Имитируем ещё один клик по кнопке "Toggle"
        fireEvent.click(toggleButton);

        // Проверяем, что sidebar развернулся обратно
        expect(sidebar).not.toHaveClass('collapsed');
    });
});
