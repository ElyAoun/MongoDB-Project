import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen'
import MakeTransactionScreen from './screens/MakeTransactionScreen';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path='/register' element={<RegisterScreen/>}/>
          <Route path='/makeTransaction' element={<MakeTransactionScreen/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
