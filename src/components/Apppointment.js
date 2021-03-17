import React from 'react'

const Apppointment = ({ id, name, owner, hour, date, symptom, deleteAppointment }) => {
    return (
        <div className='col-12 col-lg-6 mb-2'>
            <div className='card'>
                <div className="card-body">
                    <p className="card-text"><b>Mascota: </b> {name}</p>
                    <p className="card-text"><b>Dueño: </b>{owner}</p>
                    <p className="card-text"><b>Fecha: </b>{date}</p>
                    <p className="card-text"><b>Hora: </b>{hour}</p>
                    <p className="card-text"><b>Sintomas: </b>{symptom}</p>
                    <button className="btn btn-primary" onClick={() => deleteAppointment(id)}>Eliminar</button>
                </div>

            </div>
        </div>
    )
}

export default Apppointment
