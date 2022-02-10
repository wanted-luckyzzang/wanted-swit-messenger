import Login from './components/login/Login';
import SignUp from './components/login/SignUp';
import { Routes, Route } from 'react-router-dom';


function App() {
  return(
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  ) 
}

export default App;
