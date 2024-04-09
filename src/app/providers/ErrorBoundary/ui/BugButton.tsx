import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

interface BugButtonProps {
    className?: string;
}
// Компонент кнопки с ошибкой (для тестирования)
export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState();
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
            throw error
        </Button>
    );
};
