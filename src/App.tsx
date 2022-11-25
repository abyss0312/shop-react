import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from '@/redux'
import { RoutesApp, SnackbarUtilitiesConfigurator } from './utilities';
import NavBar from './components/navbar';
import { NextUIProvider } from '@nextui-org/react';
import { SnackbarProvider } from 'notistack';


function App() {

  return(
    <Provider store={store}>
      <NextUIProvider>
        <SnackbarProvider>
        <SnackbarUtilitiesConfigurator />
        <Router>
          <NavBar />
          <RoutesApp />
        </Router>
        </SnackbarProvider>
      </NextUIProvider>
    </Provider>
   
  );
}

export default App
