import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'; 
import Section from "./components/Section/Section";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className='sections'>
        <div> 
      <Section
        title="Top Albums"
        endpoint="https://qtify-backend.labs.crio.do/albums/top"
      /></div>

      <div>
      <Section
        title="New Albums"
        endpoint="https://qtify-backend.labs.crio.do/albums/new"
      /></div>
      </div>
    </div>
  );
}

export default App;

