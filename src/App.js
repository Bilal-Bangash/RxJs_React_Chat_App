import {BrowserRouter, Route,Switch} from 'react-router-dom'
import './App.css';
import { FirstPerson,SecondPerson,PersonSwitcher } from "./components";

const App =()=>(
  <BrowserRouter>
  <PersonSwitcher/>
   <Switch>
     <Route path='/' component={FirstPerson} exact/>
     <Route path='/first-person' component={FirstPerson} exact/>
     <Route path='/second-person' component={SecondPerson} exact/>

   </Switch>
  </BrowserRouter>
)

export default App;
