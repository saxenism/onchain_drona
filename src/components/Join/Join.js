import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Portis from '@portis/web3';
import Web3 from 'web3';

import './Join.css';

const Join = () => {
    const portis = new Portis('8879454e-22e5-4534-92c3-b3c925892977', 'goerli');
    const web3 = new Web3(portis.provider);
    const [handle, setHandle] = useState('');
    const [repo, setRepo] = useState('');
    return (
        <div className = "joinOuterContainer">
            <div className = "joinInnerContainer">
                <h1 className = "heading">Welcome to Onchain Drona</h1>
                 <h2 className = "heading2">Your Blockchain Habit Bank</h2>
                    <div><input placeholder = "Github Handle" className = "joinInput" type = "text" onChange={(event) => setHandle(event.target.value)} /></div> 
                    <div><input placeholder = "Github Repo" className = "joinInput mt-20" type = "text" onChange={(event) => setRepo(event.target.value)} /></div>
                    <button className={"button mt-20"} type="submit" onClick = {() => web3.eth
                        .getAccounts()
                        .then(accounts => console.log(accounts))
                        .catch(error => console.log(error))}>Sign Up for the Chanllenge</button>        
            </div>
        </div>
    );
}

export default Join;