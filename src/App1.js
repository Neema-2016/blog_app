import React, {useState} from 'react';
import './App.css';
import CComponent from './components/CComponent';
import FComponent from './components/FComponent';

const App1 = () => {
    const [flag, setFlag] = useState(true);
    return ( 
        <div className="App">
            <div>
                <button onClick={() => setFlag(!flag)}>Toggle Class Component</button>
            </div>
            {flag ? <FComponent/> : ""}
        </div>
    );
}
 
export default App1;