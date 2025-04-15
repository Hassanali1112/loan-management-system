import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SettingsIcon from "@mui/icons-material/Settings";
import FaceIcon from '@mui/icons-material/Face';

import LogoutIcon from "@mui/icons-material/Logout";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import AddCardIcon from "@mui/icons-material/AddCard";



const navItems = [
  { label: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { label: "Loans Requests", icon: <MonetizationOnIcon />, path: "/loanhistory" },
  { label: "Create Loan Request", icon: <AddCardIcon />, path: "/loanrequest" },
  { label: "My Profile", icon: <FaceIcon />, path: "/profile" },
  { label: "Logout", icon: <LogoutIcon />, path: "/" },
];

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box", p: 2 },
      }}
    >
      <Toolbar />
      {navItems.map((item) => (
        <List key={item.label}>
          <ListItem sx={{cursor : "pointer"}} component={Link} to={item.path} >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        </List>
      ))}
    </Drawer>
  );
}
