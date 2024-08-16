import { useState } from 'react'
import Card from './Components/Card'
import { Form } from './Components/Form'

function App() {
  const [showForm, setShowForm] = useState(true);
  const [studentInfo, setStudentInfo] = useState(null);

  const handleFormSubmit = (info) => {
    setStudentInfo(info);
    setShowForm(false);
  };

  const handleReset = () => {
    setStudentInfo(null);
    setShowForm(true);
  };


  return (
    <>
      <section className='home'>
        <h1 className='title'>Enseñanos cual es tu Pelicula favorita y te creamos una Card</h1>
        {showForm ? (
          <Form onSubmit={handleFormSubmit} />
        ) : (
          <div className='Container-Cards'>
            <Card {...studentInfo} />
            <button className='pulse' onClick={handleReset}>Volver al formulario</button>
          </div>
        )}
      </section>


    </>
  )
}

export default App
