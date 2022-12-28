import React, { useEffect, useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormValue from './formvalue';
import { postUser, getUserBe } from "./redux/slice/getUerSlice"

const defaultVelues = {
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    sex: "femail"
}
function AddUser() {

    const dispatch = useDispatch()

    const todolists = useSelector((state) => state.todos.data)

    const [values, setValues] = useState(defaultVelues)


    const onInfutChange = (e) => {
        const { value, name } = e.target
        setValues({ ...values, [name]: value })

    }
    console.log("value", values)


    const onSubmit = async (e) => {
        // e.preventDefault()
        dispatch(postUser(values))

    }

    useEffect(() => {
        dispatch(getUserBe())
    }, [])


    return (
        <>
            <FormValue values={values} onSubmit={onSubmit} onInfutChange={onInfutChange} todolists={todolists} dispatch={dispatch} />


        </>
    )

}

export default AddUser;