import React, { Component } from 'react';


const styles = ({
  content: {
    textAlign: 'center'
  },
});
export default class HelloComponent extends Component {
  render() {
    return(
          <h1 className={styles.content}>My Content</h1>
    );
  }
}
