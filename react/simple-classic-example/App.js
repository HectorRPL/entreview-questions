import React, { useState } from 'react'

const SimpleForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form data submitted:', formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">Nombre:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="lastName">Apellido:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default SimpleForm
