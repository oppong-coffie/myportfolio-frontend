import './App.css';
import {NextUIProvider} from "@nextui-org/react";
import MainSection from './components/MainSection';
import MainLayout from './components/MainLayout';
// import Toogle from './components/Toogle';
import MyPopover from './components/Toogle';

function App() {
  return (
    <div className="App">
      <MainLayout />
    </div>
  );
}

export default App;
