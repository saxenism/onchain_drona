import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
    const [handle, setHandle] = useState('');
    const [repo, setRepo] = useState('');
    return (
        <div className = "joinOuterContainer">
            <div className = "joinInnerContainer">
                <h1 className = "heading">Welcome to Onchain Drona</h1>
                 <h2 className = "heading2">Your Blockchain Habit Bank</h2>
                    <div><input placeholder = "Github Handle" className = "joinInput" type = "text" onChange={(event) => setHandle(event.target.value)} /></div> 
                    <div><input placeholder = "Github Repo" className = "joinInput mt-20" type = "text" onChange={(event) => setRepo(event.target.value)} /></div>
                    <button className={"button mt-20"} type="submit" onClick = {() => alert('Complete transactions using Portis')}>Sign Up for the Chanllenge</button>        
            </div>
        </div>
    );
}

export default Join;