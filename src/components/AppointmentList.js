import React from 'react'
import Apppointment from './Apppointment'

const AppointmentList = ({ appointments, deleteAppointment, setAppointmentEdit }) => {
    return (
        <>
            <h2 className='text-center mb-4'>{appointments.length ? 'Administra tus citas' : 'No hay citas'}</h2>
            <div className="row">
                {appointments.map(el => (
                    <Apppointment key={el.id} appointment={el} deleteAppointment={deleteAppointment} setAppointmentEdit={setAppointmentEdit} />
                ))}
            </div>

        </>
    )
}

export default AppointmentList
