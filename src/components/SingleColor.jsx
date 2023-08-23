import React from 'react'
import {toast } from 'react-toastify'
const SingleColor = ({color , index}) => {
  const saveToClipBoard =async () =>{
    if(navigator){
      try {
       await navigator.clipboard.writeText( `#${hex}`) ;
       toast.success(`Color  #${color.hex} Copied to Clipboard`) ;
      } catch (error) {
        toast.error("failed to copy to clipboard");
      }
    }else{
      toast.error('clipboard access not available')
    }
  }
  const {hex ,weight} = color ;
  return <article onClick={saveToClipBoard} className={index > 10 ? 'color-light' : 'color' } style={{background:`#${hex}`}}>
    <p className='percent-value'> { weight}%</p>
    <p className='percent-value'> #{hex}</p>
  </article>;
}

export default SingleColor