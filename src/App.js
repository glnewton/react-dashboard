import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Reviews from './components/Reviews';
import Rating from './components/Rating';
import SentimentAnalysis from './components/SentimentAnalysis';
import Visitors from './components/Visitors';


function App() {
  return (
    <div className="container">
      <Header />
      <div className="mainDisplay">
        <Sidebar />
        <Reviews />
        <Rating />
        <SentimentAnalysis />
        <Visitors />
      </div>
    </div>
  );
}

export default App;
