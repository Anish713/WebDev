import React, { useState, useEffect } from 'react';
import './list.css';
const people = [
  {
    id: 0, // Used in JSX as a key
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'https://i.imgur.com/MK3eW3As.jpg',
  },
  {
    id: 1, // Used in JSX as a key
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'https://i.imgur.com/mynHUSas.jpg',
  },
  {
    id: 2, // Used in JSX as a key
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'https://i.imgur.com/bE7W1jis.jpg',
  },
  {
    id: 3, // Used in JSX as a key
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment:
      'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'https://i.imgur.com/IOjWm71s.jpg',
  },
  {
    id: 4, // Used in JSX as a key
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'https://i.imgur.com/lrWQx8ls.jpg',
  },
];


export default function List(){
    const [list, setList] = useState(people);
    const [filter, setFilter] = useState('');
    
    useEffect(() => {
        const filteredList = people.filter((person) => {
        return person.name.toLowerCase().includes(filter.toLowerCase());
        });
        setList(filteredList);
    }, [filter]);
    
    return (
        <div>
        <input
            type="text"
            placeholder="Search"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
        />
        <ul>
            {list.map((person) => (
            <li key={person.id}>
                <img src={person.imageId} alt={person.name} />
                <div>
                <h3>{person.name}</h3>
                <p>
                    {person.profession} - {person.accomplishment}
                </p>
                </div>
            </li>
            ))}
        </ul>
        </div>
    );
}