import { Route, Switch } from 'react-router';
import './App.css';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Header name="Wild Games"/>
     <Switch>
       <Route exact path="/" component={GameList} />
       <Route path="/games/:id" component={GameDetails} />
     </Switch>
    </div>
  );
}

export default App;
