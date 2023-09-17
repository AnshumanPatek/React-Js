import React from 'react' 
 
const Mymsg = (props) => { 
  return ( 
    <div> 
        <h2>name is {props.name} & age is {props.age2}</h2> 
        {/* using single objects */} 
        <h3>Hello {props.data.name2} {props.data.roll}</h3> 
        {/* using Array of objects */} 
        <h3>Ji {props.obj[0].age} {props.obj[0].name}</h3> 
        <h3>Ji {props.obj[1].age} {props.obj[1].name}</h3> 
        <h3>Ji {props.obj[2].age} {props.obj[2].name}</h3> 
    </div> 
  ) 
} 
 
export default Mymsg