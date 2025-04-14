import {
  Drawer,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SettingsIcon from "@mui/icons-material/Settings";

const navItems = [
  { label: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { label: "Loans", icon: <MonetizationOnIcon />, path: "/signup" },
  { label: "Customers", icon: <PeopleIcon />, path: "/" },
  { label: "Settings", icon: <SettingsIcon />, path: "/" },
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
          <ListItem component={Link} path={item.path} >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        </List>
      ))}
    </Drawer>
  );
}
