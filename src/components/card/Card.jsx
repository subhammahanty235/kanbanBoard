import React from 'react'
import './card.css'
import { useSelector } from 'react-redux'
import {icons} from '../../assets/iconArray'

const Card = ({ cardData }) => {
    const users = useSelector((state) => state?.tickets.users);
    const groupedBy = useSelector((state) => state?.tickets.groupedBy);
    function stringAvatar(name) {
        return `${name?.split(' ')[0][0]}`
    }
    return (
        <div className='card'>
            <div className="card_id_image">
                <p className="id">{cardData.id}</p>
                {
                    groupedBy !== 'userId'?
                    <span className="avatar">
                    {
                        stringAvatar(users.find((user) => user.id === cardData.userId).name)
                    }
                    <span className={`active_indicator ${users.find((user) => user.id === cardData.userId).available === true? "active":""}`}>

                    </span>
                </span>
                :
                <></>
                }
                
            </div>
            <div className="ticket_name">
                <p> {cardData.title}</p>
            </div>

            <div className="card_footer">
                {
                groupedBy !== 'priority' ?
                <img src={icons[cardData?.priority]} alt="" className="exc_icon" />
                :
                <></>
                }
                {
                    cardData?.tag !== null?
                    <p className="tag"> <span className='indicator'></span>{cardData?.tag[0]}</p>
                    :<></>
                }
            </div>
        </div>
    )
}

export default Card