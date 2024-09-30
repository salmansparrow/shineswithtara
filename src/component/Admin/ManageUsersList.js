import React, { useState } from "react";
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

const usersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    lastLogin: "2024-09-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    lastLogin: "2024-09-14",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    lastLogin: "2024-09-13",
  },
  {
    id: 4,
    name: "Bob Williams",
    email: "bob@example.com",
    lastLogin: "2024-09-12",
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie@example.com",
    lastLogin: "2024-09-11",
  },
  {
    id: 6,
    name: "Daniel Craig",
    email: "daniel@example.com",
    lastLogin: "2024-09-10",
  },
  {
    id: 7,
    name: "Emily Watson",
    email: "emily@example.com",
    lastLogin: "2024-09-09",
  },
  {
    id: 8,
    name: "Frank Green",
    email: "frank@example.com",
    lastLogin: "2024-09-08",
  },
  {
    id: 9,
    name: "Grace Lee",
    email: "grace@example.com",
    lastLogin: "2024-09-07",
  },
  {
    id: 10,
    name: "Henry White",
    email: "henry@example.com",
    lastLogin: "2024-09-06",
  },
  // Add more mock data as needed
];

function ManageUserList() {
  const [page, setPage] = useState(0); // Current page
  const [rowsPerPage, setRowsPerPage] = useState(5); // Rows per page

  // Handle change in page number
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle change in number of rows per page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Paginate data
  const paginatedData = usersData.slice(
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
              <TableRow key={user.id}>
                <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.lastLogin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]} // Rows per page options
        component="div"
        count={usersData.length} // Total number of rows
        rowsPerPage={rowsPerPage} // Rows per page
        page={page} // Current page number
        onPageChange={handleChangePage} // Change page handler
        onRowsPerPageChange={handleChangeRowsPerPage} // Change rows per page handler
      />
    </Paper>
  );
}

export default ManageUserList;
