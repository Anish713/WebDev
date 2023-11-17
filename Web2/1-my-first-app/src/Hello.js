import React, { useState } from 'react';
import "./Hello.css"

const Hello = () => {
    const initialCountry = {
        name: 'Nepal',
        description: 'Nepal is a beautiful country.'
    }
    const [country, setCountry] = useState(initialCountry);

    const buttonClick = () => {
        setCountry({
            name: 'UK',
            description: 'UK is a beautiful country.'
        });
    }

    return (
        <>
            <div className='background'>
                <h1 className='heading'>Hello {country.name}</h1>
                <div className='description'>{country.description}</div>

                <button style={
                    {
                        padding: "10px",
                        background: "blue",
                        color: "white",
                        fontSize: "1rem"
                    }
                }
                    onClick={buttonClick}
                > Learn More</button>
            </div>
        </>
    )
}

export default Hello;
