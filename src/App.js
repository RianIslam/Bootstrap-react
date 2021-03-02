import Button from 'react-bootstrap/Button';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <h1>hello world
      </h1>
      <Header/>
      <Button variant="danger">Danger</Button>

    </div>
  );
}

export default App;
