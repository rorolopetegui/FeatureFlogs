import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="top-menu">
          <ul>
            <li>
              <Link to="/index">Index</Link>
            </li>
            <li>
              <Button variant="raised" color="primary">
                Click Me
              </Button>
            </li>
          </ul>
        </div>

        {this.props.children}
      </div>
    )
  }
}
