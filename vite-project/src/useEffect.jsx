import { useState, useEffect } from 'react';


function CounterComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `New ${count} times`;
    }, [count]); 

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
}

export default CounterComponent;
