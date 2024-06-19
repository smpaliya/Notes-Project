import React, { useState } from 'react';
import './Programme/Subject.css';
export default function Saved(){
    var [likes,setLikes]=useState(0);
    var[icon,setIcon]=useState('far fa-heart');
    var[clickonlike,setclickonlike]=useState(0);
    
    const Liked=(e)=>{
        setclickonlike(clickonlike+1);
        if(clickonlike%2!=0 & clickonlike!=0){
            setLikes(likes-1);
            setIcon('far fa-heart');
        }
        else{
            setIcon('fas fa-heart');
            setLikes(likes+1);
        }
    };
    return(
<>
<div className='main'>
<div  className="notes">
            <div className='inArow'><h2 className='topic'>Topic:  Stack Data structure</h2>
            <div className="dropdown2"><button className="dropbtn2"><i className='fas fa-ellipsis-h' id='icon' style={{fontSize:'22px',color:'blueviolet'}}></i></button>
            <div className="dropdown-content2">
                <h4>Log out</h4>
                <h4>Change<br></br>mode</h4>
                <h4>Review</h4></div>
            </div></div>
            
            <h4 className='description'> Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out)</h4>
            <div className='inArow'><h3 className='username'>By: Shruti Naidu</h3>
            <h3 className='date'>Date: 12/04/24</h3>
            <button className="like" onClick={Liked}><i className={icon} id='heart' style={{fontSize:'22px',color:'red'}}></i></button> 
            <p className='likes'>{likes}</p></div>
          </div>
<div className='anim'></div>
</div>
</>

    )
}