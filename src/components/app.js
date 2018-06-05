import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';

import { Header, Footer } from './layout';
import * as Pages from './Data/Pages';

import HomePage from './pages/HomePage';
import FlagsPage from './pages/FlagsPage';
import UsersPage from './pages/UsersPage';

class App extends Component {
  constructor(props) {
  
    super(props);
    let varValue = 0;
    console.log(this.props.location.pathname);
    switch (this.props.location.pathname) {
      case Pages.FlagsUrl:
        varValue = Pages.FlagsIndex;
        console.log("FlagsUrl");
        break;
      case Pages.UsersUrl:
        varValue = Pages.UsersIndex;
        console.log("UsersIndex");
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
        case Pages.HomeIndex:
        console.log("VALUE" + value);
          myRedirectValue = Pages.HomeUrl;
          break;
        case Pages.FlagsIndex:
        console.log("VALUE" + value);
          myRedirectValue = Pages.FlagsUrl;
          break;
        case Pages.UsersIndex:
        console.log("VALUE" + value);
          myRedirectValue = Pages.UsersUrl;
          break;
      }
      if (this.props.location.pathname !== myRedirectValue)
        this.props.history.push(myRedirectValue);
      return;
    }
    switch (this.props.location.pathname) {
      case Pages.HomeUrl:
        value = Pages.HomeIndex;
        console.log("HomeUrl: " + value);
        break;
      case Pages.FlagsUrl:
        value = Pages.FlagsIndex;
        console.log("FlagsUrl: " + value);
        break;
      case Pages.UsersUrl:
        value = Pages.UsersIndex;
        console.log("UsersUrl: " + value);
        break;
    }
    console.log("value: " + value);
    this.setState({
      selectedPage: value
    });
  }
  render() {
    const main = (
      <main>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path={Pages.HomeUrl} component={HomePage} />
          <Route path={Pages.FlagsUrl} component={FlagsPage} />
          <Route path={Pages.UsersUrl} component={UsersPage} />
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