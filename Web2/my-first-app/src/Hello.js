import React from 'react';
import "./Hello.css"


const Hello = () => {
    let country = {
        name: 'Nepal',
        description: 'Nepal is a beautiful country.'
    }
    const buttonClick = () => {
        console.log(country);
        country = {
            ...country,
            name: 'USA'
        }
        console.log(country)
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
            {/* When button clicked, value changes but is not reflected in UI, so needs react hooks. */}
        </>
    )
}
export default Hello;