import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import './App.css'
import { login } from './store/authslice'
import { logout } from './store/authslice'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from 'react-router'

function App() { 
  //for this project first we need to install some dependecies like react-router-dom, react-redux,
  //@reduxjs/toolkit, react-hook-form, @tinymce/tinymce-react, html-react-parser, appwrite

  //react-router-dom is used for routing in react application it means we can create multiple pages in our application 
  //now you have to make sure that if you making a file then it will present in root of the
  //root means it ex-package.json readme these file all are in root but app.css are not in root
   //now most important you will have to make environmental variabe 
   // and th file which we will make syntax is .name
   //now we will not gitiin .env because in this file we will just crry privscy and all
   //but for our thing we will make .envsample

   //Afteer making files in .env now we will good to go for project in appwrite

   const [loading, setLoading]=useState(true)
   const dispatch = useDispatch()

   useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
        
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))

   },[])
   
   console.log(import.meta.env.VITE_APPWRITE_URL) //now this work fine
return !loading ? (
  <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
    <div className='w-full block'> 
    <Header/>
    <main>
      TODO: {/*<Outlet/> */}
    </main>

    <Footer/>
    </div>

    {/* here we going to install tailwind */}
  </div>
) : null;
}

export default App

//here i have to stop it coz currently i amnot learn anything
//so from lecture 23 we will again strtt after backend

