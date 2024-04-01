import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string
}

// eslint-disable-next-line linebreak-style
export const Loader = ({ className }: LoaderProps) => (
    // eslint-disable-next-line
         <div className="lds-hourglass" />
);

export default Loader;
