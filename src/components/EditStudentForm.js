// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
// import { updateStudent } from '../redux/actions/studentActions';

// function EditStudentForm({ open, onClose, student }) {
//   const [name, setName] = useState('');
//   const [subject, setSubject] = useState('');
//   const [marks, setMarks] = useState('');
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (student) {
//       setName(student.name);
//       setSubject(student.subject);
//       setMarks(student.marks.toString());
//     }
//   }, [student]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (student && student._id) {
//       dispatch(updateStudent(student._id, { name, subject, marks: parseInt(marks) }));
//       onClose();
//     } else {
//       console.error('Student data is not available');
//     }
//   };

//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle>Edit Student</DialogTitle>
//       <DialogContent>
//         <TextField
//           autoFocus
//           margin="dense"
//           label="Name"
//           fullWidth
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <TextField
//           margin="dense"
//           label="Subject"
//           fullWidth
//           value={subject}
//           onChange={(e) => setSubject(e.target.value)}
//         />
//         <TextField
//           margin="dense"
//           label="Marks"
//           fullWidth
//           type="number"
//           value={marks}
//           onChange={(e) => setMarks(e.target.value)}
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose}>Cancel</Button>
//         <Button onClick={handleSubmit}>Update</Button>
//       </DialogActions>
//     </Dialog>
//   );
// }

// export default EditStudentForm;

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import { updateStudent } from '../redux/actions/studentActions';

function EditStudentForm({ open, onClose, student }) {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (student) {
      setName(student.name || '');
      setSubject(student.subject || '');
      setMarks(student.marks?.toString() || '');
    }
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student && student._id) {
      dispatch(updateStudent(student._id, { name, subject, marks: parseInt(marks) }));
      onClose();
    } else {
      console.error('Student data is not available');
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Student</DialogTitle>
      <DialogContent>
        {student ? (
          <>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Subject"
              fullWidth
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Marks"
              fullWidth
              type="number"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
            />
          </>
        ) : (
          <p>Loading student data...</p>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} disabled={!student}>Update</Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditStudentForm;
