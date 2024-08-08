import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Menu, MenuItem, TablePagination, Select, FormControl, InputLabel, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddStudentForm from '../components/AddStudentForm';
import EditStudentForm from '../components/EditStudentForm';
import { getStudents, addStudent, updateStudent, deleteStudent } from '../redux/actions/studentActions';

function HomePage() {
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.student);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortOption, setSortOption] = useState('');
  const theme = useTheme();

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  useEffect(() => {
    if (selectedStudent) {
      setIsEditFormOpen(true); 
    }
  }, [selectedStudent]);

  const handleMenuOpen = (event, student) => {
    setAnchorEl(event.currentTarget);
    setSelectedStudent(student); 
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedStudent(null);
  };

  const handleEdit = () => {
    handleMenuClose();
  };

  const handleDelete = () => {
    dispatch(deleteStudent(selectedStudent._id));
    handleMenuClose();
  };

  const handleAddStudent = (newStudent) => {
    dispatch(addStudent(newStudent));
    setIsAddFormOpen(false);
  };

  const handleUpdateStudent = (updatedStudent) => {
    dispatch(updateStudent(updatedStudent._id, updatedStudent));
    setIsEditFormOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSortChange = (event) => {
    const option = event.target.value;
    setSortOption(option);

    const sortedStudents = [...students].sort((a, b) => {
      if (option === 'name') return a.name.localeCompare(b.name);
      if (option === 'marks') return b.marks - a.marks;
      if (option === 'subject') return a.subject.localeCompare(b.subject);
      return 0;
    });

    dispatch({ type: 'SET_STUDENTS', payload: sortedStudents });
  };

  const paginatedStudents = students.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
      <Container>
        <FormControl sx={{ mt: 2, minWidth: 200 }}>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortOption}
            onChange={handleSortChange}
            label="Sort By"
          >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="marks">Marks</MenuItem>
            <MenuItem value="subject">Subject</MenuItem>
          </Select>
        </FormControl>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: theme.palette.headerCell.main }}>Name</TableCell>
                <TableCell style={{ color: theme.palette.headerCell.main }}>Subject</TableCell>
                <TableCell style={{ color: theme.palette.headerCell.main }}>Marks</TableCell>
                <TableCell style={{ color: theme.palette.headerCell.main }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedStudents.map((student) => (
                <TableRow key={student._id}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.subject}</TableCell>
                  <TableCell>{student.marks}</TableCell>
                  <TableCell>
                    <IconButton onClick={(e) => handleMenuOpen(e, student)}>
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={students.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Button variant="contained" onClick={() => setIsAddFormOpen(true)} sx={{ mt: 2 }}>
          Add Student
        </Button>
      </Container>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
      <AddStudentForm open={isAddFormOpen} onClose={() => setIsAddFormOpen(false)} onAdd={handleAddStudent} />
      <EditStudentForm open={isEditFormOpen} onClose={() => setIsEditFormOpen(false)} student={selectedStudent} />
    </>
  );
}

export default HomePage;

