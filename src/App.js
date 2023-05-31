import React from "react";
import { Route, Routes} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Placements from "./pages/Placements";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { startAppLogin } from "./store/auth-actions";
import Chat from "./pages/Chat";
import Events from "./pages/Events";
import Classroom from "./pages/Classroom";
import Main from "./examComponents/Main";
import Login_user from "./examComponents/Login_user";
import Login_admin from "./examComponents/Login_admin";
import CreateElection from "./examComponents/CreateElection";
import { Suspense } from "react";

const Home1 = React.lazy(()=>import("./pages/Home"));
const Auth1 = React.lazy(()=>import("./pages/Auth"));
const Placements1 = React.lazy(()=>import("./pages/Placements"));
const Chat1= React.lazy(()=>import("./pages/Chat"));
const Events1 = React.lazy(()=>import("./pages/Events"));
const Classroom1 = React.lazy(()=>import("./pages/Classroom"));


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.classList.add("bg-background", "text-txtCol");
    dispatch(startAppLogin());
  }, [dispatch]);
  return (
    <Suspense fallback={<p>loading</p>} >
    <Routes>
      <Route exact path='/' element={<Home1 />} />
      <Route exact path="/auth" element={<Auth1 />} />
      <Route exact path="/placements/*" element={<Placements1 />} />
      <Route exact path="/chat" element={<Chat1 />} />
      <Route exact path="/events" element={<Events1 />} />
      <Route exact path="/classroom/*" element={<Classroom1 />} />
    </Routes>
    </Suspense>
    // <Routes>
    //   <Route path="/*" element={<Main />} />
    //   <Route path="/userSignup" element={<Login_user />} />
    //   <Route path="/adminSignup" element={<Login_admin />} />
    //   <Route path="/createElection" element={<CreateElection />} />
      
    // </Routes>
  );
}

export default App;
