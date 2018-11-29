import React from 'react';
import auth from '../hoc/auth';

const SecretList = (props) =>{
    return(
        <div>
        <h1 className="center">Secret Hamster List</h1>
        <ol>
            <li>Hamtaro</li>
            <li>Panda</li>
            <li>Stan</li>
            <li>Howdy</li>
            <li>Sandy</li>
            <li>Penelope</li>
        </ol>
    </div>
    )
    
    }
export default auth(SecretList);