import React, { Component } from 'react';
import PageHeader from 'components/PageHeader/PageHeader';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(fab, faEnvelope)

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader />
      </div>
    );
  }
}

export default App;
