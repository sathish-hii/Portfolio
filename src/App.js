import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header"
import TopContainer from "./Components/TopContainer/TopContainer"
import Skills from './Components/SkillContainer/Skills';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import { JoinWithMe } from './Components/JoinWithMe/JoinWithMe';
function App() {
  return (
    <div className="App">
     <Header/>
     <TopContainer/>
     <Skills/>
     <Experience/>
     <Footer/>
     {/* <JoinWithMe/> */}
        </div>
  );
}

export default App;
