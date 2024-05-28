// src/App.js
import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import Testmonial from './components/Testmonial';


const App = () => {
  const testimonialRef = useRef();
  const [studentName, setStudentName] = useState('')
  const [studentGpa, setStudentGpa] = useState('')
  const [studentFather, setStudentFather] = useState('')
  const [studentMother, setStudentMother] = useState('')
  const [studentExam, setStudentExam] = useState('')
  const [studentBirthDate, setStudentBirthDate] = useState('')
  const handlePrint = useReactToPrint({
    content: () => testimonialRef.current,
  });

  const handleChangeName = (e) => {
    setStudentName(e.target.value)
  }
  const handleChangeGpa = (e) => {
    setStudentGpa(e.target.value)
  }
  const handleChangeFather = (e) => {
    setStudentFather(e.target.value)
  }
  const handleChangeMother = (e) => {
    setStudentMother(e.target.value)
  }
  const handleChangeExam = (e) => {
    setStudentExam(e.target.value)
  }
  const handleChangeBirthDate = (e) => {
    setStudentBirthDate(e.target.value)
  }
  return (
    <div className='grid grid-cols-4 items-center justify-evenly w-full '>
      <div ref={testimonialRef} className='col-span-3'>
        <Testmonial stdName={studentName} stdFather={studentFather} stdMother={studentMother} stdExam={studentExam} stdBirthDate={studentBirthDate} stdGpa={studentGpa} />
      </div>
      <div className='col-span-1 bg-cyan-400'>
          <form>
            <div className='flex flex-col m-8'>
              <label htmlFor="stdName">Full Name</label>
              <input type="text" id='stdName' className='bg-white p-4 w-96 h-12 text-xl focus:outline-none' value={studentName} onChange={handleChangeName} />
            </div>
            <div className='flex flex-col m-8'>
              <label htmlFor="gpa">GPA</label>
              <input type="text" id='gpa' className='bg-white p-4  w-96 h-12 text-xl focus:outline-none' value={studentGpa} onChange={handleChangeGpa} />
            </div>
            <div className='flex flex-col m-8'>
              <label htmlFor="fatherName">Father's Name</label>
              <input type="text" id='fatherName' className='bg-white p-4  w-96 h-12 text-xl focus:outline-none' value={studentFather} onChange={handleChangeFather} />
            </div>
            <div className='flex flex-col m-8'>
              <label htmlFor="motherName">Mother's Name</label>
              <input type="text" id='motherName' className='bg-white p-4  w-96 h-12 text-xl focus:outline-none' value={studentMother} onChange={handleChangeMother} />
            </div>
            <div className='flex flex-col m-8'>
              <label htmlFor="examName">Exam Year</label>
              <input type="text" id='examName' className='bg-white p-4  w-96 h-12 text-xl focus:outline-none' value={studentExam} onChange={handleChangeExam} />
            </div>
            <div className='flex flex-col m-8'>
              <label htmlFor="birthDate">Birth Date</label>
              <input type="text" id='birthDate' className='bg-white p-4  w-96 h-12 text-xl focus:outline-none' value={studentBirthDate} onChange={handleChangeBirthDate} />
            </div>
          </form>
        <button className='px-6 py-2 bg-white border-2 border-green-700 rounded-xl hover:bg-gray-400 text-xl' onClick={handlePrint} style={{ margin: '20px', padding: '10px 20px' }}>
          Print
        </button>
      </div>
    </div>
  );
};

export default App;
