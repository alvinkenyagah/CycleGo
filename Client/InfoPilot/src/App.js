import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/Home";
import {Routes, Route} from "react-router-dom";
import Rentbike from "./components/Rentbike";
import ContactForm from "./components/ContactUs";
import NavBar from "./components/NavBar";
import CreateAccountForm from "./components/register";

function App() {
  return (

    <>


  <div className="background">
    <img src="https://c1.wallpaperflare.com/preview/134/271/586/people-adventure-bicycle-bicycles.jpg" alt="background"/>
    <div className="overlay"></div>
  </div>

    <NavBar/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rentbike" element={<Rentbike />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/register" element={<CreateAccountForm />} />
    </Routes>
  </>
  );
}

export default App;
