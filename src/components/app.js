import React, { Component, Fragment } from 'react';
import { Header, Footer } from './layout';
import HelloComponent from './helloComponent';
import Divider from '@material-ui/core/Divider';



export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Fragment>
          <Header>
            <HelloComponent />
          </Header>
        </Fragment>
        <Divider />
        <Fragment>
          <Footer />
        </Fragment>
      </Fragment>
    )
  }
}
