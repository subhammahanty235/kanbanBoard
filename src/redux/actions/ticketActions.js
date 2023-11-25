import axios from "axios";
import { useSelector } from "react-redux";

export const fetchData = () => async (dispatch) => {
    try {
        dispatch({
            type:"FETCH_DATA"
        })
        const response = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
        // console.log(response.data)
        dispatch({
            type: "FETCH_DATA_SUCCESS",
            data: response.data.tickets,
            users: response.data.users
        })
        //    fetchData("status", "priority", response.data.tickets)
    } catch (error) {

    }
}

export const filterData = (group="status", order="priority" , rawdata) => async (dispatch) => {
    
    const groupedArrays = {};
    const labels = [];

    rawdata?.forEach(ticket => {
        const groupValue = ticket[group];

        if (!groupedArrays[groupValue]) {
            groupedArrays[groupValue] = [];
            labels.push(groupValue);
        }

        groupedArrays[groupValue].push(ticket);
    });

    for (const groupKey in groupedArrays) {
        if (groupedArrays.hasOwnProperty(groupKey)) {
            groupedArrays[groupKey] = sortTickets(groupedArrays[groupKey], order);
        }
    };

    dispatch({
        type: "SET_FILTERED_DATA",
        data: groupedArrays,
        labels: labels,
        groupedBy:group
    })
}

function sortTickets(tickets, sortBy) {
    return tickets.sort((a, b) => {
        if (sortBy === "Title") {
            return a.title.localeCompare(b.title);
        } else if (sortBy === "Priority") {
            return a.priority - b.priority;
        }
        return 0;
    });
}