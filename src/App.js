import './App.css';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import LoginPage from './Components/LoginPage';
import Profile from './Components/Profile';
function App()
{
  return(
    <Router>
      <Routes>
        <Route path="/" element={ <LoginPage/>}/>
        <Route path="/ profile"element={<Profile/>}/>
      </Routes>
    </Router>
  );
};

export default App;