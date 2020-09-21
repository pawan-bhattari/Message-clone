import React,{useState,useEffect} from 'react';
import './App.css';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import FlipMove from 'react-flip-move';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { IconButton } from '@material-ui/core';

function App() {

 const [input ,setInput] =useState('')
 const [message,setMessage]=useState([
  {username:'Shyam' , text: 'hi Mates what you doing this days'},

  {username:'pawan' , text: 'I am Pretty Good in Sydney man'}
  
  
 ]);
 const [username,setusername]=useState('')


console.log(input);
console.log(message);


 useEffect(()=>{
  setusername(prompt('Username Please ...'));


 },[])


 const sendMessage=(e)=>{

  e.preventDefault();
  setMessage([...message,{username:username,text:input}]);
  setInput('');
  

 }

 console.log(input);
  return (
    <div className="App">
    <img className="image" src="data:image/png;base64,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" alt="karli" />


  <h2>Welcome : {username}</h2>
   
  
   <form className= "app__form">
   <FormControl className="app__formControl" >
 
  
  
  <Input className="app__class" placeholder="Messaging...." value={input} onChange={e=>setInput(e.target.value)} />
  
  
  <IconButton className="app__icon"  disabled={!input} type='submit' onClick={sendMessage} variant="contained" color="secondary"> 
  
   <SendOutlinedIcon/>
  
  </IconButton>
 </FormControl>
 </form>

  <FlipMove>
  
  {
    message.map(message=> 
    <Message key={message} username={username} message={message} />
     
     
     )}
  
  </FlipMove>
  

    </div>
   
  );
}

export default App;
