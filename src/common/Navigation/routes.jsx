import Dashboard from "../../pages/Dashboard/Dashboard"
import StudentView from "../../pages/StudentView/StudentView"
import DashboardIcon from '@mui/icons-material/Dashboard';
const routes=[
    {
        name:"Dashboard",
        key:'dashboard',
        path:'/dashboard',
        component:<Dashboard/>
        icons:DashboardIcon,
    },
    {
        name:"Student View",
        key:'studentview',
        path:'/studentview',
        component:<StudentView/>
    },
]
export  default routes