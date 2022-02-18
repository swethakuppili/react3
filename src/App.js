import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import AddEmployee from './components/AddDestination';
import UpdateEmployee from './components/UpdateDestination';
import ViewEmployee from "./components/ViewDestinations";



function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">My Employee App</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
           {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="#">Features</a>
             */}
             <Link className="nav-link active" to="/about">About Us</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" to="/ViewEmployee">View Employee</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" to="/AddEmployee">Add Employee</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>


{/* main content */}
<div className="App">
    
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="ViewEmployee" element={<ViewEmployee/>} />
  <Route path="AddEmployee" element={<AddEmployee/>} />
  <Route path="updateDestination/:id/:batch" element={<UpdateEmployee/>} />
</Routes>
</div>

</>
);
}

export default App;
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}