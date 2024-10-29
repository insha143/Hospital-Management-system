import About from './About';
import Adddoctor from './Adddoctor';
import Addnurse from './Addnurse';
import Addpatient from './Addpatient';
import './App.css';
import Contact from './Contact';
import Dischargepatient from './Dischargepatient';
import Dishboard from './Dishboard';
import Doctor from './Doctor';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Nduties from './Nduties';
import Nurse from './Nurse';
import Patients from './Patients';
import Patnur from './Patnur';
import Services from './Services';
import Staff from './Staff';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/nurse" element={<Nurse />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dishboard" element={<Dishboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/addpatient" element={<Addpatient />} />
          <Route path="/addnurse" element={<Addnurse />} />
          <Route path="/adddoctor" element={<Adddoctor />} />
          <Route path="/nduties" element={<Nduties />} />
          <Route path="/dischargepatient" element={<Dischargepatient />} />
          <Route path="/patnur" element={<Patnur />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
