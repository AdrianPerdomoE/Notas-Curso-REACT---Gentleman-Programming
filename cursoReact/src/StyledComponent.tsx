import { useState } from 'react';
const style = {
    button: { color: 'white', backgroundColor: 'teal' }
};

function StyledComponent() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Styled Component</h1>
            <button
                className='styled-button'
                style={style.button} onClick={() => setCount(count + 1)}>Increment</button>
            <h2>Count: {count}</h2>
        </>
    );
}
export default StyledComponent;