import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import NavBar from './NavBar';
import Posts from './Posts';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
            <Toolbar>
                <TypoGraphy variant="subtitle1" color="inherit" >
                    My header
                </TypoGraphy>
            <NavBar />
            </Toolbar>
        </AppBar>
        <Posts />
      </div>
    );
  }
}
export default App;