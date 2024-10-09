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
import UserServices from "../../service/user/manageUser";

function ManageUserList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [userData, setUserData] = useState([]);

  // Fetch user data from the API when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await UserServices.getUser(); // Fetch user data from API

      setUserData(data); // Store the fetched data in the state
    };

    fetchUsers(); // Call the fetch function
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Paginate the user data
  const paginatedData = userData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

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
            {paginatedData.map((user, index) => (
              <TableRow key={user._id}>
                <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  {new Date(user.lastLogin).toLocaleString().slice(0, 9)}
                </TableCell>{" "}
                {/* Format the date */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]} // Rows per page options
        component="div"
        count={userData.length} // Total number of rows
        rowsPerPage={rowsPerPage} // Rows per page
        page={page} // Current page number
        onPageChange={handleChangePage} // Change page handler
        onRowsPerPageChange={handleChangeRowsPerPage} // Change rows per page handler
      />
    </Paper>
  );
}

export default ManageUserList;
