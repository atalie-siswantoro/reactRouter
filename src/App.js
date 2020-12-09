import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react'

class App extends React.Component {
  render() {
    return(
      <div style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}> <hr />
        <Link to="/">
          <Button color="blue">
            <span>Beranda</span>
          </Button>
        </Link>  
        <Link to="/tentangsaya">
          <Button color="blue">
            <span>Tentang Saya</span>
          </Button>
        </Link> 
        <Link to="/karya">
          <Button color="blue">
            <span>Karya</span>
          </Button>
        </Link> 
        <Link to="/kontak">
          <Button color="blue">
            <span>Kontak</span>
          </Button>
        </Link> <hr />
        <p><Utama /></p>
      </div>
    );
  }
}

export default App;
