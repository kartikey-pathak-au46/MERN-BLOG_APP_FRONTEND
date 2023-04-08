// import logo from './logo.svg';/
import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Create from './components/Blog/Create';
import Home from './components/Home/Home';
import Api from "./components/api/api"
import Login from './components/Login_SignUp/Login';
import Signup from './components/Login_SignUp/Signup';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';
import Dashboard from './components/Blog/Dashboard';
import Edit from './components/Blog/Edit';
import Getblog from './components/Home/Getblog';
import User from './components/Home/UserPage';
// import Navbar from './extra/Navbar';
function App() {
  return (
    <div className={styles.app}>
      {/* <Navbar/> */}
      <Navbar/>
      {/* <Api/> */}
     <Routes>
      <Route path="/"  element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/profile' element={<Profile/>}> </Route>
      <Route path='/editprofile/:userID' element={<EditProfile/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}></Route>
      <Route path='/blog/:id' element={<Getblog/>}></Route>
      <Route path="/user/:id" element={<User/>}></Route>


      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>} ></Route>
     </Routes>
    </div>
  );
}

export default App;
