import CircleIcon from '../assets/circle-svgrepo-com.svg'
import ImportantIcon from '../assets/important-svgrepo-com.svg'
import InProgressIcon from '../assets/in-progress-svgrepo-com.svg'
import HighPriority from '../assets/signal-strength-8-svgrepo-com.svg'
import MediumPriority from '../assets/signal-strength-7-svgrepo-com.svg'
import LowPriority from '../assets/signal-strength-4-svgrepo-com.svg'
import NoPriority from '../assets/dot-menu-more-2-svgrepo-com.svg'
import DoneTask from '../assets/done-ring-round-svgrepo-com.svg'
import BacklogIcon from '../assets/loading-2-svgrepo-com.svg'

//it will be used to dynamically render the icons accoring to the responses or labels
export const icons = {
    "Todo":CircleIcon,
    "Backlog":BacklogIcon,
    "Done":DoneTask,
    "In progress":InProgressIcon,
    //priority
    0:NoPriority,
    1:LowPriority,
    2:MediumPriority,
    3:HighPriority,
    4:ImportantIcon

}