import React from 'react'
import { useState } from 'react'
import User from './components/User';

export default function App() {

  const [users,setUsers] = useState([
    {'id':'1','name':'ahmad','email':'ahmad@gmail.com'},
    {'id':'2','name':'ahmad','email':'ahmad@gmail.com'},
    {'id':'3','name':'ahmad','email':'ahmad@gmail.com'},
    {'id':'4','name':'ahmad','email':'ahmad@gmail.com'},
  ]);


  return (
      <>
      {
        users.map(user=>
           <User name={user.name} email={user.email}/>
          )
      }


      
      
      
      
      
      
      
      
      
      </>
  )
}
