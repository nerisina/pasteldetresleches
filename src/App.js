import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import CompareBuilder from './containers/CompareBuilder/CompareBuilder'

class App extends Component{
  render()
  {
    return (
      <div>
        <Layout>
          <CompareBuilder />
        </Layout>
      </div>
    )
  }
}

export default App;
