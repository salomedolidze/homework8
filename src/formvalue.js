import React from 'react'
import {deleteUser} from "./redux/slice/getUerSlice"
import { useDispatch } from 'react-redux';

const FormValue = ({values,onSubmit,onInfutChange,todolists,dispatch}) => {


  return (
    <div>

 
    <form onSubmit={onSubmit}>
    <input name="firstName" value={values.firstName} placeholder="firstName" onChange={onInfutChange} /> <br />
    <input name="lastName" value={values.lastName} placeholder="lastName" onChange={onInfutChange} /><br />
    <input type="number" name="age" value={values.age} placeholder="age" onChange={onInfutChange} /><br />
    <input name="email" value={values.email} placeholder="email" onChange={onInfutChange} /><br />
    <button >Add User</button> 

  </form>
   {todolists.map((user) => (
    <React.Fragment key={user._id}>
      <h1>{user.firstName}</h1>
      <h1>{user.lastName}</h1>
      <h1>{user.age}</h1>
      <button onClick={()=>{dispatch(deleteUser(user._id))}}>DELETE</button>
    </React.Fragment>
  ))}
     </div>

  )
}

export default FormValue