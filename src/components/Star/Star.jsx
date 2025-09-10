import React, { useEffect, useRef } from 'react';
import './Star.css';

const Star = ({ id, x, y, onDestroy }) => {
    const starRef = useRef(null);

    // Focus the star on first render
    useEffect(() => {
        if (starRef.current) {
            starRef.current.focus();
        }
    }, []);

    const handleDestroy = () => {
        onDestroy(id);
    };

    return (
        <div
            ref={starRef}
            className='star'
            tabIndex='0'
            role='button'
            aria-label='star'
            onClick={handleDestroy}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === '') handleDestroy();
            }}
            style={{
                position: 'absolute',
                left: `${x}px`,
                right: `${y}px`,
            }}
        />
    );
};

export default Star;