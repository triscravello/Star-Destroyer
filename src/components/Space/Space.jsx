import React, { useEffect, useRef, useState } from 'react';
import Star from '../Star/Star';
import './Space.css';

const STAR_SIZE = 20; // px - assume all stars are square

const Space = () => {
    const [stars, setStars] = useState([]);
    const starId = useRef(0);
    const intervalRef = useRef(null);

    // Function to generate random star position and add to state
    const addStar = () => {
        const x = Math.random() * (window.innerWidth - STAR_SIZE);
        const y = Math.random() * (window.innerHeight - STAR_SIZE);

        const newStar = {
            id: starId.current++,
            x,
            y,
        };

        setStars((prev) => [...prev, newStar]);
    };

    // Function to destroy a star by ID
    const destroyStar = (id) => {
        setStars((prev) => prev.filter((star) => star.id !== id));
    };

    // Set up the interval to add stars every 2.5 seconds
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            addStar();
        }, 2500);

        // Cleanup on unmount
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div className='space'>
            {stars.map((star) => (
                <Star 
                    key={star.id} 
                    id={star.id} 
                    x={star.x} 
                    y={star.y} 
                    onDestroy={destroyStar} 
                />
            ))}
        </div>
    );
};

export default Space;