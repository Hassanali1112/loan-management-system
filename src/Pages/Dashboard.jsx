import {
  Box,
  Grid,
  Typography,
  Paper,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import {
  CreditScore,
  Done,
  HourglassBottom,
  ErrorOutline,
} from "@mui/icons-material";

const stats = [
  { label: "Total Loans", value: 210, icon: <CreditScore />, color: "#1976d2" },
  { label: "Paid", value: 168, icon: <Done />, color: "#2e7d32" },
  { label: "Pending", value: 32, icon: <HourglassBottom />, color: "#f9a825" },
  { label: "Overdue", value: 10, icon: <ErrorOutline />, color: "#d32f2f" },
];

const recent = [
  { name: "Ali Raza", amount: "$5,000", status: "Paid", date: "2025-04-12" },
  {
    name: "Sara Khan",
    amount: "$3,200",
    status: "Pending",
    date: "2025-04-11",
  },
  {
    name: "Ahmed Ali",
    amount: "$1,500",
    status: "Overdue",
    date: "2025-04-10",
  },
];

export default function Dashboard() {
  return (
    <Box
      sx={{ display: "flex", backgroundColor: "#f9f9f9", minHeight: "100vh" }}
    >
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Topbar />

        <Typography variant="h4" fontWeight={700} mb={2}>
          Dashboard Overview
        </Typography>

        <Grid container spacing={2} mb={5}>
          {stats.map(({ label, value, icon, color }) => (
            <Grid size={{ sm : 6, md : 3 }}
              // xs={12}
              // sm={8}
              // md={5}
              key={label}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Avatar sx={{ bgcolor: color }}>{icon}</Avatar>
                <Box>
                  <Typography variant="h6">{value}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {label}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h6" mb={2}>
          Recent Loans
        </Typography>
        <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#eceff1" }}>
              <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recent.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
