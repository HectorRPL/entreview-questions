import './App.css'
import {useEffect, useState} from "react"

function App() {
    const isAxa = true

    const [dataformCustomer, setDataFormCustomer] = useState({
        mountExternal: '123,222.2',
    })
    const validCustomer = (data) => {
        let errors = {};

        let regexName = /^\[A-Za-z Ññ]+$/;
        if (data?.name?.trim().length === 0) {
            errors.name = 'ingresa el correo'
        } else if (!regexName.test(data?.name?.trim())) {
            errors.name = 'invalido'
        }


        let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
        if (data?.email?.trim().length === 0) {
            errors.email = 'write email'
        } else if (!regexEmail.test(data?.email?.trim())) {
            errors.email = 'invalid'
        }

        return errors

    }
    const useForm = (data, setData, validateForm) => {
        const [errors, setErrors] = useState({
            name: 'Ingresa el nombre',
            firstName: 'Ingresa el apellido del cliente',
            LastName: 'Ingresa el apellido del cliente',
            birthDate: 'Ingresa la fecha de nacimiento',
            idGenero: 'Ingresa la fecha de nacimiento',
            mobile: 'Ingresa el número telefónico',
            email: 'Ingresa el correo electrónice',
            cp: 'Ingresa el código postal',
        })
        const handleChange = (event) => {
            console.log('Entró al useForm...')
            if (!!!event?.target?.name && !!!event?.target?.value) return
            console.log({event})
            if (event.target.name === 'mobile') {
                if (event.target.value.trim().length <= 10) {
                    setData({
                        ...data,
                        [event.target.name]: event.target.value
                    })
                }
            } else if (event.target.name === 'cp') {
                if (event.target.value.trim().length <= 5) {
                    setData({
                        ...data,
                        [event.target.name]: event.target.value
                    })
                }
            } else {
                setData({
                    ...data,
                    [event.target.name]: event.target.value
                })
            }
        }
        const handleBlur = (event) => {
            handleChange(event);
            setErrors(validateForm(data))
        }
        const clearErrors = (event) => {
            setErrors({})
        }
        return {errors, handleChange, handleBlur, clearErrors}
    }

    const {
        errors,
        handleChange,
        handleBlur,
        clearErrors
    } = useForm(dataformCustomer, setDataFormCustomer, validCustomer)

    const [dataSelectError, setDataSelectError] = useState({
        name: {error: false},
        email: {error: false}
    })

    useEffect(() => {

        let vehicleErrors = {}

        for (const [key, value] of Object.entries(dataSelectError)) {
            if (value.error) {
                vehicleErrors = key;
            }
        }

    }, [errors, dataSelectError])

    useEffect(() => {
        console.log({dataformCustomer});
        handleBlur(dataformCustomer)

    }, [dataformCustomer])

    const maskCurrencyWhioutDacimals = (data = '') => {
        if (!!!data) return
        let num = data.toString().trim()
        return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    const validMountExternal = async (value = '', isWithTwoDecimals) => {

        let sanitized = value
            .trim() // Elimina todos los caracteres que no sean números o el primer punto
            .replace(/[^\d.]+/g, '') // Eeimina puntos adicionales, dejando solo el último
            .replace(/\.(?=\d{3})/g, '')  // elimina puntos si hay tres dígitos después de él
            .replace(/(\.\d\d)\d+/g, '$1')  // limitar a dos dígitos después del punto

        setDataFormCustomer({...dataformCustomer, mountExternal: sanitized})
        setDataSelectError({...dataSelectError, mountExternal: {error: sanitized.trim().length === 0}})
    }

    const onVoidTowDots = (event) => {
        const allowedKeys = ['ArrowLeft', 'ArrowRight', 'Delete', 'Backspace', '.', 'Home', 'End', 'Shift', 'Tab'];

        const numericKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

        if (!numericKeys.includes(event.key) && event.key !== '.') {
            if (!allowedKeys.includes(event.key)) event.preventDefault()
            return
        }

        if (dataformCustomer.mountExternal.toString().trim().includes('.')) {
            if (dataformCustomer.mountExternal.split('.')[1].split('').length === 2) {
                if (!allowedKeys.includes(event.key)) event.preventDefault()
            }
        }

        if (event.key === '.') {
            if (dataformCustomer.mountExternal.toString().trim().includes('.')) {
                event.preventDefault()
                return
            }
        }

        if (event.key === '.') {
            const decimalIndex = dataformCustomer.mountExternal.indexOf('.');
            if (decimalIndex >= 0) {
                const integerPart = dataformCustomer.mountExternal.slice(0, decimalIndex);
                if (!allowedKeys.includes(event.key)) if (integerPart.length >= 7) event.preventDefault()
            }
        }

        // evitar ingresar dos puntos
        if (event.key === '.') {
            const decimalIndex = dataformCustomer.mountExternal.indexOf('.');
            if (decimalIndex >= 0) {
                const integerPart = dataformCustomer.mountExternal.slice(0, decimalIndex);
                if (!allowedKeys.includes(event.key)) if (integerPart.length >= 7) event.preventDefault()
            }
        }


        // si no tiene punto solo puede meter 7 caracteres

        if (!dataformCustomer.mountExternal.toString().trim().includes('.') && dataformCustomer.mountExternal.split('').length === 7) {
            if (!allowedKeys.includes(event.key)) event.preventDefault()
        }

        // si tiene punto solo puede meter 10 caracteres

        if (dataformCustomer.mountExternal.toString().trim().includes('.') && dataformCustomer.mountExternal.toString().trim().split('').length === 10) {
            if (!allowedKeys.includes(event.key)) event.preventDefault()
        }

    }
    const cleanNumber = (event) => {
        const {name, value} = event.target;
        if (value.endsWith('.')) {
            // Si el valor termina con un punto, eliminar el punto
            setDataFormCustomer({
                ...dataformCustomer,
                [name]: value.slice(0, -1), // Eliminar el último carácter (el punto)
            });
        } else if (value.endsWith('.0')) {
            // Si el valor termina con ".0", eliminar el ".0"
            setDataFormCustomer({
                ...dataformCustomer,
                [name]: value.slice(0, -2), // Eliminar los dos últimos caracteres (el punto y el cero)
            });
        }
    }


    return (<>
        <form>
            <input
                className="input-form"
                placeholder="PRIMA"
                type="text"
                name="mountExternal"
                maxLength={12} // antes 9
                value={maskCurrencyWhioutDacimals(String(dataformCustomer.mountExternal))}
                onChange={(event) => validMountExternal(String(event.target.value), true)}
                onKeyDown={onVoidTowDots}
                onBlur={cleanNumber} // Agregar el evento onBlur
            />
            {errors?.mountExternal}
        </form>
    </>)
}

export default App;



