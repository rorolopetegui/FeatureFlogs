import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Divider from '@material-ui/core/Divider';

import { Header, Footer } from './layout';

import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';




class App extends Component {
  constructor(props) {
    super(props);
    let varValue = 0;
    switch (this.props.location.pathname) {
      case "/MySpace":
        varValue = 1;
        break;
      case "/Contact":
        varValue = 2;
        break;
    }
    this.state = {
      selectedPage: varValue,
    };
    this.handlePageUpdate = this.handlePageUpdate.bind(this);
  }
  handlePageUpdate(event, value) {
    if (value !== undefined) {
      let myRedirectValue;
      switch (value) {
        case 0:
          myRedirectValue = "/Home";
          break;
        case 1:
          myRedirectValue = "/MySpace";
          break;
        case 2:
          myRedirectValue = "/Contact";
          break;
      }
      this.setState({
        selectedPage: value
      });
      if (this.props.location.pathname !== myRedirectValue)
        this.props.history.push(myRedirectValue);
    }
  }
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
      <Router history={browserHistory}>
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
      </Router>
    )
  }
}
export default withRouter(App);