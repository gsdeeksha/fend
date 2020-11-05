import React from 'react';
import './App.css';
import Greet from './Components/greet';
import Welcome from './Components/welcome';
import Msg from './Components/msg'
import Counter from './Components/counter'
import FUNCTIONclick from './Components/FunctionClick'
import CLASSclick from './Components/classClick'
import Binder from './Components/EventBinder'
import Parent from './Components/parent'
import UserGreeting from './Components/usergreeting'
import Namelist from './Components/namelist';
import TIMERS from './Components/Timers'
import Input from './Components/input'
import Form from './Components/form'
function App() {
  return (
    <div className="App">
      <header className="App-header">
         {/* <Greet name="Alice">
        </Greet>
         <Welcome name="prt"/> 
        <Msg/> */}
        <Counter/>
        <FUNCTIONclick/> 
         <CLASSclick/> 
         <Binder/>
        <Parent/>
        <UserGreeting/>
        <Namelist/> 
        <Form/>
        {/*<TIMERS/> */}
        {/* <Input/> */}
      </header>
    </div>
  );
}

export default App;
