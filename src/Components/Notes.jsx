
// import './App.css';
import note from '../Components/my.module.css'
import './new.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './Card';
import { useState } from 'react';
function Notes() {
  const [title , settitle] = useState("")
  const [msg , setmsg] = useState("")
  const [notes , setnotes] = useState([])

  const add = (e)=>{
    e.preventDefault();
    settitle("")
    setmsg("")
    setnotes((spred)=>{
   return(
    [...spred,{
    title:title,
    msg:msg,
   
     }]
     ) 
    })
   
  }
  const delAll = ()=>{
    setnotes([])
  }
  
 
  
  return (
    <>
    <div className={note.App}>
    <h1 className={note.head}>Notes</h1>
    </div>
<div className="container-fluid">

{/* ------first row start--------  */}
<div className="row">
<div className="col-12 col-sm-12 col-md-3 red"></div>
<div className="col-12 col-sm-12 col-md-6 green">
<div className={note.inp}>
<h2 className={note.headtwo}>Title</h2>
<input className={note.inpone} type="text" placeholder='Enter title'
value={title}
onChange={(e)=>settitle(e.target.value)}
/> <br />
<h2 className={note.headtwo}>Description</h2>
<textarea name="" id="" cols="50" rows="7" placeholder='Enter your description'
value={msg}
onChange={(e)=>setmsg(e.target.value)}
></textarea> <br />
<div class="d-grid gap-2">
  <button className="btn btn-primary newbtn" type="button" onClick={add}>Add</button>
  <button className="btn btn-primary delbtn" type="button" onClick={delAll}>Delete all</button>
</div>
</div> 
</div>
<div className="col-12 col-sm-12 col-md-3 blue"></div>
</div>

{/* ------first row end--------  */}


{/* ------second row start--------  */}

{
  notes.map((element,index)=>{
    return(
      <Card element={element} setnotes={setnotes} notes={notes} key={element.id} id={index}/>
    )
  })
}


{/* ------second row end--------  */}





</div>  

    
  
    </>
  );
}

export default Notes;
 