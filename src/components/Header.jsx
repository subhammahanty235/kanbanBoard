import React, { useState } from 'react'
import './header.css'
import FilterIcon from '../assets/filter-icon.svg'
import DownArrow from '../assets/down-arrow.svg'
import Dropdown from './dropdown/Dropdown'
const Header = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    return (
        <>
            <div className='header'>
                <div className="filterButton" onClick={()=>{setOpenDropdown(!openDropdown)}}>
                    <img className='headerIcon' src={FilterIcon} alt="" />
                    <p className='display'>Display</p>
                    <img className='headerIcon' src={DownArrow} alt="" />

                </div>
            </div>
            {
                openDropdown === true?
                <Dropdown />:<></>
            }
        </>
    )
}

export default Header