import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom'
import Divider from '@material-ui/core/Divider';

import { Header, Footer } from './layout';

import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';




export default class App extends Component {
  render() {
    const main = (
      <main>
        <Switch>
          <Route exact path='/' component={ComponentOne} />
          <Route path='/Home' component={ComponentOne} />
          <Route path='/MySpace' component={ComponentTwo} />
          <Route path='/Contact' component={ComponentThree} />
        </Switch>
      </main>
    );
    return (
      <Fragment>
        <Fragment>
          <Header>
            {main}
          </Header>
        </Fragment>
        <Divider />
        <Fragment>
          <Footer>
            {main}
          </Footer>
        </Fragment>
      </Fragment>
    )
  }
}
