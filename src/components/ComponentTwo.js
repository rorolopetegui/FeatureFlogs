import React, { Component } from 'react';


const styles = ({
  content: {
    textAlign: 'center'
  },
});
export default class ComponentTwo extends Component {
  render() {
    return(
          <h1 className={styles.content}>Component 2</h1>
    );
  }
}
