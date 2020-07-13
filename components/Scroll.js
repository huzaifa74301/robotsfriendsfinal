import React from 'react'
import './scroll.css'


// to make a component scroll

const Scroll=(props)=>{
    return(
<div style={{overflowY: 'scroll',border:'1px solid black',height:'500px'}}>
    {props.children}
</div>
    )}


export default Scroll;