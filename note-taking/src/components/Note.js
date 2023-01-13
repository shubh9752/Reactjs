import React,{useState} from 'react';
import SingleNote from './SingleNote';

function Note() {
    const [note,setNote]=useState([]);
    const [addNote,setAddNote]=useState("");

    const updateNote = (e)=>{
         setAddNote(e.target.value); 
       
    }
    const addCurNote=()=>{
        let currNote=[...note,addNote]
        setNote(currNote);
        
    }
    const ulStyle={
        listStyle:"none",
        display:"grid",
        gridTemplateColumns:"repeat(3, 1fr)",
        gap:"25px"
    }
    const inputStyle={
        fontSize:"2rem",
        background:"grey",
        border:"2px solid yellow",
        borderRadius:"18px",
        color:"blue"

    }
    const buttonStyle={
        fontSize:"2rem",
        background:"#1bc4bf",
        color:"blue",
        borderRadius:"25px"
    }



  return (
    <>
        <input style={inputStyle} type="text" onChange={updateNote} /> 
        <button  style={buttonStyle} onClick={addCurNote}>Add Note</button>
        <div>
            <ul style={ulStyle}>{
                note.map((notes,index)=>{
                    return <li key={index}>
                    <SingleNote note={note} />
                    </li>
                })
            }

            </ul>
        </div>
    </>
  )
}

export default Note;