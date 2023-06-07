import LogoutIcon from '@mui/icons-material/Logout';
import ListIcon from '@mui/icons-material/List';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const sideBar = [
  {
    title: "My Orders",
    path: "/order",
    icons: <ListIcon/>,
  },
  {
    title: "My addresses",
    path: "/address",
    icons: <LocationOnIcon/>,
  },
  {
    title: "Sign Out",
    path: "/",
    icons: <LogoutIcon />,
  },
];

export default sideBar;
