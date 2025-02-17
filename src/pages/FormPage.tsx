import { useState } from "react"
import Header from "../components/Header"

function FormPage() {

    const [isEdit, setIsEdited] =useState(false)



  return (
    <>
    <Header title={"Let’s start with your personal info"} description={"Include your full name and at least one way for employers to reach you"} clicked={isEdit} onclick={()=>{
        setIsEdited(!isEdit)
    }} />
    <div className="grid  sm:grid-cols-2">
        
        <div className="min-h-[22px] bg-orange-500">
        <form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
 
</form>
    
        </div>
        <div className="min-[22px] bg-teal-500">
        <p>j</p>
         </div>
    </div>
    </>
    
  )
}

export default FormPage