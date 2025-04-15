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
  Button,
} from "@mui/material";
import Sidebar from "../components/Sidebar";
import { supabase } from "../Utils/config"; 

const AdminPanel = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetchLoans();
  }, []);

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

  const updateStatus = async (id, status) => {
    const { error } = await supabase
      .from("loans")
      .update({ status })
      .eq("id", id);
    if (error) {
      console.error("Error updating status:", error.message);
    } else {
      fetchLoans();
    }
  };

  return (
    <Box display="flex">
      <Sidebar />
      <Box flex={1} p={3}>
        <Typography variant="h5" gutterBottom textAlign="center" sx={{ mb: 3 }}>
          Loan Applications
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
                <TableCell sx={{ color: "white" }}>Amount</TableCell>
                <TableCell sx={{ color: "white" }}>Duration</TableCell>
                <TableCell sx={{ color: "white" }}>Purpose</TableCell>
                <TableCell sx={{ color: "white" }}>Status</TableCell>
                <TableCell sx={{ color: "white" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loans.map((loan) => (
                <TableRow key={loan.id}>
                  <TableCell>{loan.name}</TableCell>
                  <TableCell>{loan.email}</TableCell>
                  <TableCell>{loan.amount}</TableCell>
                  <TableCell>{loan.duration} months</TableCell>
                  <TableCell>{loan.purpose}</TableCell>
                  <TableCell>
                    <Chip
                      label={
                        loan.status === "approved"
                          ? "Approved"
                          : loan.status === "rejected"
                          ? "Rejected"
                          : "Pending"
                      }
                      color={
                        loan.status === "approved"
                          ? "success"
                          : loan.status === "rejected"
                          ? "error"
                          : "warning"
                      }
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={() => updateStatus(loan.id, "approved")}
                      disabled={loan.status === "approved"}
                      sx={{ mr: 1 }}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => updateStatus(loan.id, "rejected")}
                      disabled={loan.status === "rejected"}
                    >
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {loans.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    No loan applications found.
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

export default AdminPanel;
