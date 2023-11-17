import React from 'react';
import "./Hello.css"


const Hello = () => {
    const country = {
        name: 'Nepal',
        description: 'Nepal is a beautiful country.'
    }
    return (
        /* <></> is called as fragment, can have only 1 root element. */
        <>
        <div className='background'>
            <h1 className='heading'>Hello {country.name}</h1>
            <p className='description'>{country.description}</p>
        </div>
        </>
    )
}
export default Hello;