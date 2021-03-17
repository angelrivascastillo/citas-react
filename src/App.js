import { useEffect, useState } from "react";
import AppointmentList from "./components/AppointmentList";
import Form from "./components/Form";
const localAppoinetments = JSON.parse(localStorage.getItem('appointments'))

function App() {
  const [appointments, setAppointments] = useState(localAppoinetments || [])

  const addAppointment = (newAppointment) => {
    setAppointments([{ ...newAppointment, id: Date.now() }, ...appointments])
  }
  const deleteAppointment = id => {
    setAppointments(appointments.filter(el => el.id !== id))
  }
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments))


  }, [appointments])
  return (
    <div className="container">
      <h1 className='text-center mb-3'>Administrador de pacientes</h1>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-5">
          <Form addAppointment={addAppointment} />
        </div>
        <div className="col-12 col-md-6 col-lg-7">
          <AppointmentList appointments={appointments} deleteAppointment={deleteAppointment} />
        </div>
      </div>


    </div>
  )
}

export default App;
