import { AppBar, Toolbar, Typography, Avatar, Box } from "@mui/material";

export default function Topbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ background: "transparent", boxShadow: "none", mb: 4 }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#333" }}>
          LoanApp Dashboard
        </Typography>
        <Box display="flex" alignItems="center" gap={2}>
          <Typography variant="body1" color="text.secondary">
            Welcome, Hassan
          </Typography>
          <Avatar src="/avatar.png" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
