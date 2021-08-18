
// import './App.css';
// import Fotter from './components/Footer/Fotter';
// import Header from './components/Header/Header';
// import LandingPage from './screens/LandingPage/LandingPage';
// import {BrouserRouter ,Route} from 'react-router-dom'
// import MyNotes from './screens/MyNotes/MyNotes';
// const App=()=>(
 
// <BrouserRouter>
//      <Header />  
//      <main>
//      <Route path="/" component={LandingPage} />
//      <Route path="/mynotes" component={()=><MyNotes/>} />
//   </main>



//    <Fotter />
  
//   </BrouserRouter>
//  );

// export default App;
// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import Footer from './components/Footer/Footer';
 import Header from './components/Header/Header';
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen"
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import SingleNote  from "./screens/SingleNote/SingleNote";
import  CreateNote from "./screens/CreateNote/CreateNote";
import Note from "./screens/Note/Note"
import NotesAdmin from "./screens/Note/NotesAdmin"
import User from "./screens/User/User"
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen"

const App=()=> {
  const [search, setSearch]= useState('')


  return (
    <Router>
      <Header setSearch={setSearch}/>
      <main className="App">
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen}  />
        <Route path="/profile" component={ProfileScreen}  />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/notes/:id" component={SingleNote} />
        <Route path="/createnote" component={CreateNote}/>
        <Route path="/Annonces" component={Note} />
        <Route path="/User" component={User} />
        <Route path="/NotesAdmin" component={NotesAdmin} />
        

        <Route path="/mynotes" component={() => (<MyNotes search={search} /> )}/>
    
      </main>
  <Footer />
    </Router>
  );
}

export default App;