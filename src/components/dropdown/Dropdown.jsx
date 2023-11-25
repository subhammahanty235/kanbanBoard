import React, { useState } from 'react'
import './dropdown.css'
import DownArrow from '../../assets/down-arrow.svg'
import { useDispatch, useSelector } from 'react-redux'
import ArrowIcon from '../../assets/arrow-narrow-right-svgrepo-com.svg'
import { filterData } from '../../redux/actions/ticketActions'
const Dropdown = () => {
    const dispatch = useDispatch()
    const rawData = useSelector((state) => state?.tickets.rawdata);
    const [group , setgroup] = useState('status');
    const [order, setorder] = useState('priority');

    const search =() => {
        dispatch(filterData(group , order , rawData))
    }
    return (
        <div className='display_dropdown'>
            <div className="set_options">
                <p className="label">Grouping</p>
                <InternalDropdownGrouping group={group} setgroup={setgroup}/>
            </div>
            <div className="set_options">
                <p className="label">Ordering</p>
                <InternalDropdownOrdering order={order} setorder={setorder} />
            </div>
            <button className="search" onClick={search}>Search</button>
            {/* <img src={ArrowIcon} alt="" className="arrow" /> */}
        </div>
    )
}

const InternalDropdownGrouping = ({group , setgroup}) => {
    
    const options = ["status", "userId", "priority"]
    const [showDropdown, setShowDropdown] = useState(false)

    return ( 
        <>
            <div className="internal_dropdown_button" onClick={()=>{setShowDropdown(!showDropdown)}}>
                <p>{group}</p>
                <img src={DownArrow} alt="" />
            </div>
            {
                showDropdown === true ?
                    <div className="internal_dropdown_main1">
                        {
                            options?.map((op) => {
                                return <div className="option_button" onClick={()=>{
                                    setgroup(op)
                                    setShowDropdown(false)
                                }}>
                                    {op}
                                </div>
                            })
                        }
                    </div>
                    : <></>
            }
        </>
    )
}

const InternalDropdownOrdering = ({order, setorder}) => {
    const options = ["priority", "title"]
    const [showDropdown, setShowDropdown] = useState(false)
    return (
        <>
            <div className="internal_dropdown_button" onClick={()=>{setShowDropdown(!showDropdown)}}>
                <p>{order}</p>
                <img src={DownArrow} alt="" />
            </div>
            {
                showDropdown === true ?
                    <div className="internal_dropdown_main2">
                        {
                            options?.map((op) => {
                                return <div className="option_button" onClick={()=>{
                                    setorder(op)
                                    setShowDropdown(false)
                                }}>
                                    {op}
                                </div>
                            })
                        }
                    </div>
                    : <></>
            }
        </>
    )
}


export default Dropdown