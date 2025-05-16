import React, { useState, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'

interface FormData {
    firstName: string
    lastName: string
}

const SimpleForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        axios.post('https://your-api-endpoint.com/submit', formData)
            .then(response => {
                console.log('Form data submitted successfully:', response.data)
            })
            .catch(error => {
                console.error('Error submitting form data:', error)
            })
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