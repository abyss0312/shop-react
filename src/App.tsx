import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from '@/redux'
import { RoutesApp } from './utilities';

function App() {

  return(
    <Provider store={store}>
       <Router>
          <RoutesApp />
        </Router>
    </Provider>
   
  );
}

export default App
