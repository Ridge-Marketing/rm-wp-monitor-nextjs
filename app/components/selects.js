'use client'
import React from 'react';
import { useState } from 'react'

const RMselect = (props) =>{

    const { websites, activeWebsite, handleChange } = props;

    return(
        <div className='custom-select'>
            <select name="websites" className={`bg-black rounded-full text-white px-4 py-2 appearance-none`} value={activeWebsite} onChange={handleChange}>
                <option value=''>Load a Site</option>
                {websites.map((website, index) => (
                    <option key={index} value={website.website_group}>{website.website_group}</option>
                ))}
            </select>
            <div className='gradient-overlay rounded-tr-full rounded-br-full'></div>
        </div>
    )
} 
export default RMselect;