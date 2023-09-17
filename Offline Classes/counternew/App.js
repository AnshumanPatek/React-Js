import Events1 from './Patek/Events1';
import TotalCounter from './Patek/TotalCounter';
import Mymsg from './Patek/Mymsg';
import './App.css';

function App() {

  return (
    <div className="App">
     {/* <Mymsg name={'rajan'} age2={342} data={mydt} obj={data1}/> */} 
      {/* <Events1 count={1}/> 
      <Events1 count={2}/> 
      <Events1 count={3}/> 
      <Events1 count={4}/> */} 
      <TotalCounter/> 
      {/* <ChangeName/> */} 
    </div>
  );
}

export default App;
