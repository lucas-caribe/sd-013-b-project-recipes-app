import React from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';

const Main = () => {
    const {id, type} = useParams();
    console.log(id, type);
    let main;
    if(type === 'comidas') main = 'Comidas';
    else if (type === 'bebidas') main = 'Bebidas';
    return (
        <div>

            <Header main={main}/>
            {main}
        </div>
     )
    
}

export default Main;