import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './components/UserForm';
import UserData from './components/UserData';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" component={UserForm} /> */}
        <Route path="/" element={<UserForm/>} />
        {/* <Route exact path="/userData" component={UserData} /> */}
        <Route path="/userData" element={<UserData/>} />
      </Routes>
    </Router>
  );
};

export default App;
