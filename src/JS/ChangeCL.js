import React, {useState , useMemo, useCallback } from 'react';
function App() {
    const [color , setColor]= useState('#fff');
    const [letter, setLetter ]= useState('a');
    const handleColorChange = useCallback(()  => setColor(randomColor()),[]);
    const handLeletterChange = useCallback(()  => setLetter(randomLetter()),[]);
    const randomColor = () => {
        return '#' + Math.random().toString(16).substr(-6);        
    };
    const randomLetter = () => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters.charAt(randomIndex);
    };
    return(
        <div>
            <button onClick={handleColorChange}>Change Color</button>
            <button onClick={handLeletterChange}>Change Letter</button>
            <hr />
            <h1 style={{color}}>{letter}</h1>
        </div>
    )
};
    export default App;







































































































