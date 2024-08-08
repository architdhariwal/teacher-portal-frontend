// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import ForgotPassword from './components/ForgotPassword';
// import HomePage from './pages/HomePage';
// import PrivateRoute from './components/PrivateRoute';
// import Header from './components/Header';
// import ResetPassword from './components/ResetPassword';

// const theme = createTheme({
//   palette: {
//     background: {
//       default: '#f0f0f0',
//     },
//     primary: {
//       main: '#000000',
//     },
//     headerCell: {
//       main: '#A9A9A9', 
//     },
//     secondary: {
//       main: '#ffffff',
//     }
//   },
// });

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/reset-password/:token" element={<ResetPassword />} />
//           <Route
//             path="/home"
//             element={
//               <PrivateRoute>
//                 <HomePage />
//               </PrivateRoute>
//             }
//           />
//           <Route path="*" element={<Navigate to="/login" replace />} />
//         </Routes>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainLayout from './MainLayout'; // Import the new MainLayout component

const theme = createTheme({
  palette: {
    background: {
      default: '#f0f0f0',
    },
    primary: {
      main: '#000000',
    },
    headerCell: {
      main: '#A9A9A9',
    },
    secondary: {
      main: '#ffffff',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainLayout />
      </Router>
    </ThemeProvider>
  );
}

export default App;

