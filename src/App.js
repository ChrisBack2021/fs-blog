import Single from "./pages/single/Single";
import Topbar from "./components/topbar/Topbar"
import Home from "./pages/home/Home"
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  Route,
  Routes,
  Link,
  BrowserRouter
} from "react-router-dom";


function App() {
  const user = false


  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Home />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:Id" element={<Single/>} /> 
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
