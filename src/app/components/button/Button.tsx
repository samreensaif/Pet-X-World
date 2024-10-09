import React from 'react'
interface Buttonprops{
  title:string,
  className?:string
}
function Button(props:Buttonprops) {
  return (
    <button type="button" className="text-white hover:scale-90 transition-all duration-500 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-3.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{props.title}</button>
  )
}

export default Button