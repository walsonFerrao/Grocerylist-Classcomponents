import React from "react";
import styled from 'styled-components'
import axios from 'axios'


const Inputcontainner=styled.div`

width:20%;
margin:auto;
line-height:25px;

`
const Button=styled.button`

width:50%;
margin:auto;


`



export class Groceries extends React.Component{

constructor(props)
{
super(props)

this.state={
  quantity:"",
groceryname:"",
price:"",
description:"",
image:""

}

}
addittodatabase()
{

    axios.post(" http://localhost:1080/groceries",this.state)
    .then((res)=>console.log(res))

}


render(){

return(
  <Inputcontainner >
    <input type="text" placeholder="groceryname" onChange={(e)=>{this.setState({...this.state,groceryname:e.target.value})}} />
    <input type="text" placeholder="quantity" onChange={(e)=>{this.setState({...this.state,quantity:e.target.value})}}/>
    <input type="text" placeholder="price" onChange={(e)=>{this.setState({...this.state,price:e.target.value})}}/>
    <input type="text" placeholder="description" onChange={(e)=>{this.setState({...this.state,description:e.target.value})}}/>
    <input type="text" placeholder="imageurl" onChange={(e)=>{this.setState({...this.state,image:e.target.value})}}/>
    <Button onClick={this.addittodatabase.bind(this)}>AddIt</Button>

  </Inputcontainner>
)




}





}