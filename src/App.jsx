import React, { useState } from 'react'

const App = () => {

    let newTime = new Date().toLocaleTimeString();

    const [ctime, setctime] = useState(newTime);

    const UpdateTime = () => {
         newTime = new Date().toLocaleTimeString();
         setctime(newTime);
    }
    
    setInterval(UpdateTime,1000)
    return (
        <>
            <h1>{ctime}</h1>
        </>

    );
}

export default App;


//<button onClick={UpdateTime}>Get Time</button>
