import React from 'react';
import Tooltip from './Tooltip';
import './App.css'
// import styled from 'styled-components';

const App = () => {
  return (
    <div className='body'>
      <Tooltip text="This is a tooltip">
        <button className='styles'>Hover me</button>
      </Tooltip>
    </div>
  );
};

export default App;
