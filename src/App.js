import React, { PropTypes } from 'react';
import { NavBar } from './modules/';

const App = ({ children, location }) => (
  <div>
    <NavBar path={location.pathname} />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
}

export default App;
