# Star Destroyer

Star Destoryer is a React application designed to practice `useEffect` and `useRef` hooks. The application simulates a dynamic starfield where stars appear every 2.5 seconds at random positions. Users can interact with the stars by clicking on them to destroy the star instantly. 

## Features

- **Dynamic star generation**: New star appear in random positions every 2.5 seconds.
- **Interactive stars**: Click to destroy stars.
- **Focus management**: Newly generated stars are automatically focused for better accessibility.
- **Clean component structure**: Uses modular `Space` and `Star` components.
- **Efficient cleanup**: Proper use of `useEffect` for intervals to avoid memory leaks.
