import React from 'react'

interface Buttonprops{
    title:string,
    className?:string
  }
  function Newbutton(props:Buttonprops) {
    return (
      <button type="button" className="text-black hover:scale-90 transition-all duration-500 bg-transparent  border-2 border-slate-700 font-medium rounded-full text-sm px-7 py-2  ">{props.title}</button>
    )
  }
export default Newbutton