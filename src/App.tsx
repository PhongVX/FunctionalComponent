import React from 'react';
import logo from './logo.svg';
import './common/styles/styles.scss';
import './styles.scss';
import ButtonF from './components/Button/Functional';
import ButtonC from './components/Button/Class';

function App() {
  const sayHello = () => { 
    alert('Hello World');
  }
  return (
    <div className="wrapper-app">
      <br/>
      <br/>
      <ButtonF color='primary' onClick={sayHello}>FunctionalComponent Button</ButtonF>
       <br/>
       <br/>
      <ButtonC color='secondary' onClick={sayHello}>ClassComponent Button</ButtonC>
      <br/>
       <br/>
      <ButtonF disabled onClick={sayHello}>FunctionalComponent Disabled Button</ButtonF>
       <br/>
       <br/>
      <ButtonC disabled onClick={sayHello}>ClassComponent Disabled Button</ButtonC>
    </div>
  );
}

export default App;
