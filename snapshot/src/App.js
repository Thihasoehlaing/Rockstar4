import React from 'react';
import Item from './Item.js';

const App = props => {
  return(
    <div>
      <h1>Snapshot test</h1>
      <ul>
        <Item name="Apple" price="3" />
        <Item name="Orange" price="2.5" />
      </ul>
    </div>
  );
}

export default App;