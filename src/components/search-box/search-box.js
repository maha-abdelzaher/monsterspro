import React from 'react';
import './search-box.css';

export const Searchbox = ({ placeholder, handelChange }) => (
    <div>
    <input className="search" type="search" 
    placeholder={placeholder}
    onChange={handelChange}/>

    </div>
)