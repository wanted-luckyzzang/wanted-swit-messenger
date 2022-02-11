import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Main from 'pages/Main/Main';

function App() {
  return(
    <Routes>
      <Route path='/main' element={<Main />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Login />} />
    </Routes>
  ) 
}

export default App;
