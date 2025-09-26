import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero'; 

import Section from "./components/Section/Section.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      {/* Section for Top Albums */}
      <Section
        title="Top Albums"
        endpoint="https://qtify-backend.labs.crio.do/albums/top"
      />

      
      <Section
        title="New Albums"
        endpoint="https://qtify-backend.labs.crio.do/albums/new"
      />
    </div>
  );
}

export default App;
