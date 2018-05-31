import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import Flag from '@material-ui/icons/Flag';
import People from '@material-ui/icons/People';
import { Link } from 'react-router-dom';

export default class NavigationData extends Component {
  render() {
    return (
      <div>
        <ListItem button component={Link} to='/Home'>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to='/Flags'>
          <ListItemIcon>
            <Flag />
          </ListItemIcon>
          <ListItemText primary="Feature Flags" />
        </ListItem>
        <ListItem button component={Link} to='/Users'>
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </div>
    )
  }
}
