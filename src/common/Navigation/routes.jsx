import Dashboard from "../../pages/Dashboard/Dashboard"
import StudentView from "../../pages/StudentView/StudentView"
import StudentAction from "../../pages/StudentAction/StudentAction"
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PersonIcon from '@mui/icons-material/Person';
import { PersonSearch } from "@mui/icons-material";

const routes=[
    {
        name:"Student View",
        key:'studentview',
        path:'/studentview',
        component:<StudentView/>,
        icon:<PersonSearch/>
       
    },
    {
        name:"Student Action",
        key:'studentaction',
        path:'/studentactiion',
        component:<StudentAction/>,
        icon:<PersonIcon/>
    },
]
export  default routes