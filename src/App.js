import { useEffect, useState } from "react";
import AppointmentList from "./components/AppointmentList";
import Form from "./components/Form";
const localAppoinetments = JSON.parse(localStorage.getItem('appointments'))

function App() {
  const [appointments, setAppointments] = useState(localAppoinetments || [])
  const [appointmentEdit, setAppointmentEdit] = useState(null)

  const addAppointment = (newAppointment) => {
    setAppointments([{ ...newAppointment, id: Date.now() }, ...appointments])
  }
  const deleteAppointment = id => {
    if (appointmentEdit && appointmentEdit.id === id) setAppointmentEdit(null)


    setAppointments(appointments.filter(el => el.id !== id))
  }
  const updateAppointment = editAppointment => {
    setAppointments(appointments.map(appointment => (
      appointment.id === editAppointment.id
        ? editAppointment
        : appointment
    )))
  }
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments))


  }, [appointments])
  return (
    <div className="container">
      <h1 className='text-center mb-3'>Administrador de pacientes</h1>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-5">
          <Form addAppointment={addAppointment} appointmentEdit={appointmentEdit} setAppointmentEdit={setAppointmentEdit} updateAppointment={updateAppointment} />
        </div>
        <div className="col-12 col-md-6 col-lg-7">
          <AppointmentList appointments={appointments} deleteAppointment={deleteAppointment} setAppointmentEdit={setAppointmentEdit} />
        </div>
      </div>


    </div>
  )
}

export default App;
