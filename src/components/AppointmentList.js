import React from 'react'
import Apppointment from './Apppointment'

const AppointmentList = ({ appointments, deleteAppointment }) => {
    return (
        <>
            <h2 className='text-center mb-4'>{appointments.length ? 'Administra tus citas' : 'No hay citas'}</h2>
            <div className="row">
                {appointments.map(el => (
                    <Apppointment key={el.id} {...el} deleteAppointment={deleteAppointment} />
                ))}
            </div>

        </>
    )
}

export default AppointmentList
