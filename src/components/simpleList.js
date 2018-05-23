import React from 'react';
import {List, ListItem} from '@material-ui/core/List';
import ContentInbox from '@material-ui/core/svg-icons/content/inbox';
import ActionGrade from '@material-ui/core/svg-icons/action/grade';
import ContentSend from '@material-ui/core/svg-icons/content/send';
import ContentDrafts from '@material-ui/core/svg-icons/content/drafts';
import Divider from '@material-ui/core/Divider';
import ActionInfo from '@material-ui/core/svg-icons/action/info';

const ListExampleSimple = () => (
  <div>
    <List>
      <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
      <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
      <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
      <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
      <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
    </List>
    <Divider />
    <List>
      <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
    </List>
  </div>
);

export default ListExampleSimple;