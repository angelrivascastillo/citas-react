import React, { useState } from 'react'

const initialFormValues = {
    name: '',
    owner: '',
    date: '',
    hour: '',
    symptom: ''

}

const Form = () => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const { name, owner, date, hour, symptom } = formValues

    const handleOnchange = e => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })

    }
    return (
        <>
            <h2 className='text-center mb-4'> Crear cita</h2>
            <form action="">

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
                    <input type="submit" value="Agregar cita"
                        className='btn btn-primary btn-block ' />
                </div>
                <input type="time" name="" id="" />

            </form>

        </>
    )
}

export default Form
