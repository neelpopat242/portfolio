
import './App.css';
// import Ironman from './components/Ironman';
// import Captainshield from './components/Captainshield';
import Intro from './components/Intro';
import Education from './components/Education';
import Project from './components/Project';
import WorkexperienceVol from './components/WorkexperienceVol';
import ExtraActivities from './components/ExtraActivities';
import ToolsLanguages from './components/ToolsLanguages';

function App() {
  return (
    <div>
    {/* <Ironman/> */}
    <Intro/>
    <Education/>
    <Project/>
    <WorkexperienceVol/>
    <ExtraActivities/>
    <ToolsLanguages/>

   
    {/* //<Captainshield/> */}
    </div>
  );
}

export default App;
