import { Button } from 'shared/ui/Button/Button';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
    className?: string;
}
// Компонент кнопки с ошибкой (для тестирования)
export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState();
    const { t } = useTranslation();
    const onThrow = () => {
        // @ts-ignore
        setError(true);
    };
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
        >
            {t('throw error')}
        </Button>
    );
};
