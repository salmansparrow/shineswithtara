import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Typography,
} from "@mui/material";
import UserServices from "../../service/user/manageUser"; // Ensure correct path to UserServices

function ManageUserList() {
  const [page, setPage] = useState(0); // Current page index (0-based)
  const [rowsPerPage, setRowsPerPage] = useState(5); // Default rows per page
  const [userData, setUserData] = useState([]); // Stores user data
  const [totalCount, setTotalCount] = useState(0); // Total records count

  // Fetch user data from the backend
  const fetchUser = async (page, limit) => {
    try {
      const data = await UserServices.getUser(page + 1, limit); // 1-based page for backend

      // Check if data is returned correctly
      console.log("API Response:", data); // Debug log

      if (data && data.getUserData) {
        setUserData(data.getUserData); // Set fetched user data
        setTotalCount(data.totalUsers || 0); // Corrected total count to match backend response
      } else {
        console.warn("Unexpected API response:", data);
        setUserData([]); // Fallback to empty array
        setTotalCount(0); // Fallback to 0
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setUserData([]); // Handle error with empty data
      setTotalCount(0); // Handle error with 0 total count
    }
  };

  // Fetch data whenever `page` or `rowsPerPage` changes
  useEffect(() => {
    fetchUser(page, rowsPerPage);
  }, [page, rowsPerPage]);

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage); // Update to new page
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage); // Update rows per page
    setPage(0); // Reset to first page when rows per page changes
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Typography variant="h6" sx={{ padding: "16px", textAlign: "center" }}>
        Manage Users
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sr. No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Last Login</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.length > 0 ? (
              userData.map((user, index) => (
                <TableRow key={user._id}>
                  <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {new Date(user.lastLogin).toLocaleString().slice(0, 10)}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No users found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]} // Available rows per page
        component="div"
        count={totalCount} // Total number of records from backend
        rowsPerPage={rowsPerPage} // Current rows per page
        page={page} // Current page index (0-based)
        onPageChange={handleChangePage} // Handle page change
        onRowsPerPageChange={handleChangeRowsPerPage} // Handle rows per page change
      />
    </Paper>
  );
}

export default ManageUserList;
