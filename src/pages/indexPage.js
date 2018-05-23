import React, { Component } from 'react';

import HelloComponent from '../components/helloComponent';

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <HelloComponent />
        
        <div className="cell">
          <article className="article">
            <h1 className="article-title">Esto es index</h1>
            <div className="article-body">
              <p>
                Some Body
              </p>
            </div>
          </article>
        </div>
      </div>
    )
  }
}

