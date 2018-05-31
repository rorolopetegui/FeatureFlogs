import React, { Component } from 'react';


const styles = ({
  content: {
    textAlign: 'center'
  },
});
export default class ComponentThree extends Component {
  render() {
    return(
          <h1 className={styles.content}>Here goes the flags Page</h1>
    );
  }
}
