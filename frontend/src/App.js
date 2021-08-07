import './App.css';
import Form from './Form';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const  App =()=> {
  return (
    <BrowserRouter>
 
      <Switch>
        <Route path='/' component={Form}></Route>
      </Switch>
     </BrowserRouter>
  );
}

export default App;