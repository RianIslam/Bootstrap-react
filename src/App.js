import Button from 'react-bootstrap/Button';
import './App.css';
import Header from './components/Header/Header';
import TopHeadLine from './components/TopHeadline/TopHeadLine';

function App() {
  return (
    <div className="App">
      <h1>hello world
      </h1>
      <Header/>
      <TopHeadLine/>
      <Button variant="danger">Danger</Button>

    </div>
  );
}

export default App;
