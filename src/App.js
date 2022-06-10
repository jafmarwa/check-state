
import './App.css';
import React from 'react';
import Photo from './me.jpg';

class App extends React.Component {
  state = {
    person:{
    fullName:"jaafouramarwa",
    bio:"dsffjos",
    imgsrc:Photo,
    profession:"future developper",
    },
    show:true ,
    count:0,
    text:""
  };


show=()=>{
  this.setState({show:!this.state.show})
}
/**incrementCounter(){
  const thisBoundedIncrementer=this.incrementCounter.bind(this);
  setInterval(thisBoundedIncrementer,1000);
}
increment=()=>{
  this.setstate({count:this.state.count+1})
}
componentDidUpdate (){
  setInterval(()=>{
    this.setState(count.this.state.count+1)
  }, 1000);
}
componentWillUnmount(prevProps,prevState){
  console.log('im the cdunmount')
}**/


handeleChange=(e)=>{
  this.setState({text:e.target.value})
}

  render(){
    console.log('im the render')
  return (
    <div>
    {this.state.show ? 
    <div>
    <h1>hii {this.state.person.fullName}</h1>
    <p> tell me about you {this.state.person.bio}</p>
    <img src={this.state.person.imgsrc}></img>
    <h3>can you tell me what is your job {this.state.person.profession}</h3>
    </div>: null}  
    <button onClick={this.show}>ClickMe</button>
    <input type="text" placeholder="write your mobile number" onChange={this.handeleChange}/>
    <h2>count</h2>
    <h2>{this.state.count}</h2>
    <h2>{this.state.text}</h2>
    </div> 


  );
}
}
export default App;