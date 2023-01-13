import React from 'react'

function SingleNote(props) {
    const noteStyle={
        padding:"15px",
        borderRadius:"13px",
        border:"2px solid blue",
        backgroundColor:"grey",
        color:"blue"
    }
    
  return (
    <div style={noteStyle} className="single-note">
        <p className='noteText'>{props.note}</p>
    </div>
  )
}

export default SingleNote