import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useResize = (size: number) => {
    const isSize = useMediaQuery({ query: `(min-width: ${size}px)` });
    const [is, setIs] = useState(isSize);

    useEffect(() => {
        const handleResize = () => {
            setIs(isSize)
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isSize]);

    return [is]
}