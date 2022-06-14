
// import './App.css';
import note from '../Components/my.module.css'
import './new.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
function Card({element,setnotes,notes,id}) {
  const deletes = (ind)=>{
   notes.splice(ind,1)
   setnotes([...notes])
  }
    
  return(
    <>
 <div className="container">
<div className="row justify-content-center">
<div className="col-md-6">
 <div className="card newcard">
<div className="card-body">
    <h3 className="card-title">{element.title}</h3>
    <p className="card-text">{element.msg}</p>
    <a href="#" className="btn btn-primary del" onClick={() => deletes(id)}>Delete</a>
  </div>
</div>
</div>
</div>
</div>
  </>
  );







    
  
 
 
}

export default Card;
 