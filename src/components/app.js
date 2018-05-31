import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';

import { Header, Footer } from './layout';

import HomePage from './pages/HomePage';
import FlagsPage from './pages/FlagsPage';
import UsersPage from './pages/UsersPage';

class App extends Component {
  constructor(props) {
    super(props);
    let varValue = 0;
    switch (this.props.location.pathname) {
      case "/Flags":
        varValue = 1;
        break;
      case "/Users":
        varValue = 2;
        break;
    }
    this.state = {
      selectedPage: varValue,
    };
    this.handlePageUpdate = this.handlePageUpdate.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.handlePageUpdate(null, null);
    }
  }

  handlePageUpdate(event, value) {
    if (value !== undefined && value !== null) {
      let myRedirectValue;
      switch (value) {
        case 0:
          myRedirectValue = "/Home";
          break;
        case 1:
          myRedirectValue = "/Flags";
          break;
        case 2:
          myRedirectValue = "/Users";
          break;
      }
      if (this.props.location.pathname !== myRedirectValue)
        this.props.history.push(myRedirectValue);
      return;
    }
    switch (this.props.location.pathname) {
      case "/Home":
        value = 0;
        break;
      case "/Flags":
        value = 1;
        break;
      case "/Users":
        value = 2;
        break;
    }
    this.setState({
      selectedPage: value
    });
  }
  render() {
    const main = (
      <main>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/Home' component={HomePage} />
          <Route path='/Flags' component={FlagsPage} />
          <Route path='/Users' component={UsersPage} />
        </Switch>
      </main>
    );
    return (
      <Fragment>
        <Fragment>
          <Header handlePageUpdate={this.handlePageUpdate}>
            {main}
          </Header>
        </Fragment>
        <Divider />
        <Fragment>
          <Footer handlePageUpdate={this.handlePageUpdate} selectedPage={this.state.selectedPage}>
            {main}
          </Footer>
        </Fragment>
      </Fragment>
    )
  }
}
export default withRouter(App);