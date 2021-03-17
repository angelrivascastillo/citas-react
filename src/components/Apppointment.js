import React from 'react'

const Apppointment = ({ appointment, deleteAppointment, setAppointmentEdit }) => {
    const { name, owner, date, hour, symptom, id } = appointment
    return (
        <div className='col-12 col-lg-6 mb-2'>
            <div className='card'>
                <div className="card-body">
                    <p className="card-text"><b>Mascota: </b> {name}</p>
                    <p className="card-text"><b>Dueño: </b>{owner}</p>
                    <p className="card-text"><b>Fecha: </b>{date}</p>
                    <p className="card-text"><b>Hora: </b>{hour}</p>
                    <p className="card-text"><b>Sintomas: </b>{symptom}</p>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-danger mr-2" onClick={() => deleteAppointment(id)}>Eliminar</button>
                        <button className="btn btn-secondary float-left" onClick={() => setAppointmentEdit(appointment)}>Editar</button>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Apppointment
