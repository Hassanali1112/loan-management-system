import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";
import Sidebar from "../components/Sidebar"; // Reuse your sidebar component
import { supabase } from "../Utils/config";

const LoanHistory = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      const { data, error } = await supabase
        .from("loans")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching loans:", error.message);
      } else {
        setLoans(data);
      }
    };

    fetchLoans();
  }, []);

  return (
    <Box display="flex">
      <Sidebar />

      <Box flex={1} p={3}>
        <Typography variant="h5" gutterBottom textAlign="center" sx={{ mb: 3 }}>
          Your Loan History
        </Typography>

        <TableContainer
          component={Paper}
          elevation={3}
          sx={{ borderRadius: 3 }}
        >
          <Table>
            <TableHead sx={{ backgroundColor: "#1976d2" }}>
              <TableRow>
                <TableCell sx={{ color: "white" }}>Name</TableCell>
                <TableCell sx={{ color: "white" }}>Email</TableCell>
                <TableCell sx={{ color: "white" }}>CNIC</TableCell>
                <TableCell sx={{ color: "white" }}>Amount</TableCell>
                <TableCell sx={{ color: "white" }}>Duration</TableCell>
                <TableCell sx={{ color: "white" }}>Purpose</TableCell>
                <TableCell sx={{ color: "white" }}>Income</TableCell>
                <TableCell sx={{ color: "white" }}>Company</TableCell>
                <TableCell sx={{ color: "white" }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loans.map((loan) => (
                <TableRow key={loan.id}>
                  <TableCell>{loan.name}</TableCell>
                  <TableCell>{loan.email}</TableCell>
                  <TableCell>{loan.cnic}</TableCell>
                  <TableCell>{loan.amount}</TableCell>
                  <TableCell>{loan.duration} months</TableCell>
                  <TableCell>{loan.purpose}</TableCell>
                  <TableCell>{loan.income}</TableCell>
                  <TableCell>{loan.company}</TableCell>
                  <TableCell>
                    <Chip
                      label={
                        loan.status === "approved" ? "Approved" : "Pending"
                      }
                      color={loan.status === "approved" ? "success" : "warning"}
                      variant="outlined"
                    />
                  </TableCell>
                </TableRow>
              ))}
              {loans.length === 0 && (
                <TableRow>
                  <TableCell colSpan={9} align="center">
                    No loan history found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default LoanHistory;
