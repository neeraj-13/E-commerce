import './App.css';
import './Navbar.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateComponent from './PrivateComponent';
// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
   
    <div className="App">
      <BrowserRouter>
       <Navbar/>
        <Routes>


          <Route element={<PrivateComponent/>}>
          < Route path="/name" element={<h1>Product Listing Component</h1>} />
          < Route path="/add" element={<h1>Add product Component</h1>} />
          < Route path="/update" element={<h1>Updating Products Component</h1>} />
          < Route path="/logout" element={<h1>Logging Out Component</h1>} />
          < Route path="/profile" element={<h1>Profile</h1>} />
          < Route path="/signup" element={<Signup/>} />
          </Route>


        </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
