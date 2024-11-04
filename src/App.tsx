import { StudentTable } from "./components/StudentTable"
import { AddStudent } from './components/AddStudent';
import { useState } from "react";
import { data } from "./utils/data";



function App() {

  const [students,setStudents] =  useState(data);

  return (
    <>
       <StudentTable students={students} />
       <AddStudent students={students} setStudents={setStudents} />
      
    </>
  )
}

export default App
