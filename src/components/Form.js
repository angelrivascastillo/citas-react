import React, { useEffect, useState } from 'react'

const initialFormValues = {
    name: '',
    owner: '',
    date: '',
    hour: '',
    symptom: ''

}

const Form = ({ addAppointment, appointmentEdit, setAppointmentEdit, updateAppointment }) => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const { name, owner, date, hour, symptom } = formValues
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const handleOnchange = e => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name.trim() || !owner.trim() || !date || !hour || !symptom.trim()) {
            setError('Todos los campos son obligatorios')
            return false
        }
        if (appointmentEdit) {
            updateAppointment(formValues)
            setSuccess('Actualizado conn éxito')
            setAppointmentEdit(null)
        }
        else {
            addAppointment(formValues)
            setFormValues(initialFormValues)
            setSuccess('Cita agregada con exito')
        }

        setError(null)

        setTimeout(() => {
            setSuccess(null)

        }, 3000);


    }
    useEffect(() => {
        if (appointmentEdit) setFormValues(appointmentEdit)
        else setFormValues(initialFormValues)

    }, [appointmentEdit])
    return (
        <>
            <h2 className='text-center mb-4'> {appointmentEdit ? 'Editar cita' : 'Crear cita'}</h2>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <input type="text" className="form-control"
                        placeholder='Nombre de mascota'
                        name='name'
                        value={name}
                        onChange={handleOnchange}
                    />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control"
                        placeholder='Nombre de dueño de la mascota'
                        name='owner'
                        value={owner}
                        onChange={handleOnchange}
                    />
                </div>
                <div className="form-group">
                    <input type="date" className="form-control"
                        name='date'
                        value={date}
                        onChange={handleOnchange}
                    />
                </div>
                <div className="form-group">
                    <input type="time" className="form-control"
                        name='hour'
                        value={hour}
                        onChange={handleOnchange}
                    />
                </div>
                <div className="form-group">
                    <textarea rows='5'
                        className='form-control'
                        placeholder='síntomas'
                        name='symptom'
                        value={symptom}
                        onChange={handleOnchange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" value={appointmentEdit ? 'Actualizar cita' : 'Agregar cita'}
                        className='btn btn-primary btn-block ' />
                </div>
                {appointmentEdit && (
                    <div className="form-group">
                        <input type="submit" value='Cancelar edición'
                            className='btn btn-warning btn-block '
                            onClick={() => setAppointmentEdit(null)}
                        />
                    </div>

                )

                }

            </form>
            {success && <div className="alert alert-success">{success}</div>}
            {error && <div className="alert alert-danger">{error}</div>}


        </>
    )
}

export default Form
