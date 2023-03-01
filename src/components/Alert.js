import React from 'react'

export default function Alert(props) {
    const capitalized=(word)=>{
        const lower =word.toLowerCase()
        return lower[0].toUpperCase()+lower.slice(1);//point1
        // return lower.charAt(0).toUpperCase()+lower.slice(1);  /point 2 do same work.
    }
  return (
    props.alert &&<div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalized(props.alert.type)}</strong>{props.alert.msg}
  
</div>
    </div>
  )
}
