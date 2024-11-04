import { Button, Paper, TextField } from "@mui/material"
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react"
import { Student } from "../utils/data"

interface props {
    students:Student[]
    setStudents:Dispatch<SetStateAction<Student[]>>
}

const initialState =  {id:999, fullName:"", age:"", email:"",class:""}


export const AddStudent =  ({setStudents,students}: props) => {
    const[formData,setformData] = useState(initialState)

    
    const handleChange = (e :ChangeEvent<HTMLInputElement>)  => {
        setformData({...formData,[e.target.name]:e.target.value })
    };



    const handleSubmit = ()  => {
        setStudents([...students,formData]);
        setformData(initialState)

    };



    useEffect(()=>{
        if(formData.fullName === "Admin"){
            alert("You Enter a name that will not be store in database.")
        }
    },[formData.fullName])



    return(

        <Paper sx={{width:300,padding:5,marginTop:1,gap:1,display:"flex",flexDirection:"column"}}>
            <TextField  onChange={handleChange} value={formData.fullName} id="outlined-basic" label="Full Name" name="fullName" variant="outlined" />
            <TextField  onChange={handleChange} value={formData.age} id="outlined-basic" label="Age" name="age" variant="outlined" />
            <TextField  onChange={handleChange} value={formData.email} id="outlined-basic" label="Email" name="email" variant="outlined" />
            <TextField  onChange={handleChange} value={formData.class} id="outlined-basic" label="Class" name="class" variant="outlined" />

            <Button onClick={handleSubmit} variant="contained">Submit</Button>
        </Paper>
    )
}