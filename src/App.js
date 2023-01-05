import './App.css';
import InfoWeather from './components/InfoWeather';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <InfoWeather />
    </div>
  );
}

export default App;
