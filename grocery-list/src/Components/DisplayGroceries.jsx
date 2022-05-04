import axios from "axios";
import React from "react";




export class Displaygroceries extends React.Component{

constructor(props)
{
    super(props)
     this.state={
     data:[],
     page:1
     }
  this.getitem=function()
  {

    axios.get(`http://localhost:1080/groceries?_page=1&_limit=2`)
    .then((res)=>{this.setState({data:[...res.data]});console.log(this.state,"state")})
    .catch((err)=>{console.log(err)})

  }

}

componentDidMount()
{

this.getitem()

}
next()
{

    this.setState({...this.state,page:this.state.page+1})
    axios.get(`http://localhost:1080/groceries?_page=${this.state.page}&_limit=2`)
    .then((res)=>{this.setState({data:[...res.data]});console.log(this.state,"state")})
    .catch((err)=>{console.log(err)})
}
prev()
{
    if(this.state.page>0)
    {
        this.setState({...this.state,page:this.state.page-1})

        axios.get(`http://localhost:1080/groceries?_page=${this.state.page}&_limit=2`)
        .then((res)=>{this.setState({data:[...res.data]});console.log(this.state,"state")})
        .catch((err)=>{console.log(err)})
    }
   
}
deleteitem(id)
{
    axios.delete(`http://localhost:1080/groceries/${id}?_page=${this.state.page}&_limit=2`)
        .then((res)=>{this.setState({data:[...res.data]});console.log(this.state,"state")})
        .catch((err)=>{console.log(err)})
        this.getitem()
}
render()
{

return(
<>
<div style={{margin:"auto",width:"400px"}}>

{this.state.data.map((e)=><div style={{display:"flex",marginBottom:"25px",justifyContent:"space-between",border:"1px solid black",height:"200px",padding:"25px"}} >
<div>
<h3>{e.groceryname}</h3>

<p>{e.description}</p>
<p>{e.price}</p>
<p>{e.quantity}</p>
</div>
<div>
<img style={{width:"80%",height:"100%",border:"2px solid black"}} src={e.image} alt="" />

</div>
<div>
    <button style={{marginTop:"30px"}} onClick={()=>{this.deleteitem(e.id)}}>delete</button>
</div>

</div>)}

<div style={{display:"flex",justifyContent:"space-between",marginBottom:"25px"}}>
        <button onClick={()=>{this.prev()}}>prev</button>
         <button onClick={()=>{this.next()}}>next</button>
</div>

</div>
 
</>


)


}





}