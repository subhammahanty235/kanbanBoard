import React, { useEffect } from 'react'
import './kanbanBoard.css'
// import tickets from '../newdata.json'
import Card from '../components/card/Card';
import { icons } from '../assets/iconArray'
import PlusIcon from '../assets/plus-svgrepo-com.svg'
import MenuIcon from '../assets/dot-menu-more-2-svgrepo-com.svg'
import { filterData } from '../redux/actions/ticketActions';
import { useDispatch, useSelector } from 'react-redux';
const KanbanBoard = () => {
    const dispatch = useDispatch()
    const rawData = useSelector((state) => state?.tickets.rawdata);
    const users = useSelector((state) => state?.tickets.users);
    const data = useSelector((state) => state?.tickets.data);
    const labels = useSelector((state) => state?.tickets.labels);
    const groupedBy = useSelector((state) => state?.tickets.groupedBy);
    const priorityArray = {
        4: "Urgent",
        3: "High",
        2: "Medium",
        1: "Low",
        0: "No priority"
    }
    useEffect(() => {
        dispatch(filterData("status", "priority", rawData))
    }, [dispatch])

    function stringAvatar(name) {
        return `${name?.split(' ')[0][0]}`
    }
    // Function to filter tickets based on status
    const filterTicketsByStatus = (status) => {
        return data[status] || [];
    };
    return (
        <>
            <div className='kanban_board'>
                {
                    data?.length !== 0 ?
                        labels?.map(label => (
                            <div key={label} className='kanban_board_row'>
                                <div className="row_header">
                                    <div className="header_left">
                                        {
                                            groupedBy === "userId" ?
                                                <span className="avatar">
                                                    {
                                                        stringAvatar(users.find((user) => user.id === label).name)
                                                    }
                                                    <span className={`active_indicator ${users.find((user) => user.id === label).available === true ? "active" : ""}`}>

                                                    </span>
                                                </span>
                                                :
                                                <img src={icons[label]} alt="" className='header_icon' />
                                        }
                                        <p className="label">{
                                            groupedBy === 'userId' ?
                                                users.find((user) => user.id === label).name
                                                : groupedBy === 'priority' ?
                                                    priorityArray[label]
                                                    :
                                                    label
                                        }</p>
                                        <p className="length_of_data">{filterTicketsByStatus(label).length}</p>
                                    </div>
                                    <div className="header_right">
                                        <img src={PlusIcon} alt="" className="header_icon" />
                                        <img src={MenuIcon} alt="" className="header_icon" />
                                    </div>
                                </div>
                                <div className='kanban_board_row_inner'>
                                    {filterTicketsByStatus(label).map(ticket => (
                                        <Card key={ticket.id} cardData={ticket} />
                                    ))}
                                </div>
                            </div>
                        ))
                        :
                        <button className="reload">
                            Please reload!, Some internal error faced
                        </button>
                }

            </div>
        </>
    )
}

export default KanbanBoard