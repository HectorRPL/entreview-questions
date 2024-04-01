import './App.css'
import {useEffect, useState} from "react"

function App() {
    const isAxa = true

    const [dataformCustomer, setDataFormCustomer] = useState({
        mountExternal: '',
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

    const {errors, handleChange, handleBlur, clearErrors } = useForm(dataformCustomer, setDataFormCustomer, validCustomer)

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


    /*const maskCurrencyWhioutDacimals = (data = '') => {
        if (!!!data) return
        const value = data.toString()
        return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }*/



/*    const maskCurrencyWhioutDacimals = (num = '') => {
        if (!!!num) return
        let value = num.toString();

        // Agregar .00 si el valor no tiene decimales
        if (!value.includes('.')) value += '.00'

        // si tiene mas de dos puntos detener
        if (containMoreThanTwoDot(value)) return


        return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }*/

    const eliminarPuntosExceptoUltimo = (str) => {
        // Utilizar una expresión regular para encontrar todos los puntos excepto el último
        const regex = /\.(?=.*\.)/g;
        // Reemplazar todos los puntos excepto el último con una cadena vacía
        return str.replace(regex, '');
    }

    const containMoreThanTwoDot = (str) => {
        const dots = str.split('').filter(char => char === '.');
        return dots.length >= 2;
    }

    const maskCurrencyWhioutDacimals = (num = '') => {
        if (!!!num) return
        let value = num.toString()
        if (!value.includes('.')) value += '.00'

        if (containMoreThanTwoDot(num.toString())) {
            value = eliminarPuntosExceptoUltimo(value)
        }

        return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    const validMountExternal = async (value = '') => {
        let sanitized = value.trim().replace(/[^0-9]/g, '')

        setDataFormCustomer({...dataformCustomer, mountExternal: sanitized})
        setDataSelectError({...dataSelectError, mountExternal: {error: sanitized.trim().length === 0}})
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
                onChange={(event) => validMountExternal(String(event.target.value))}
            />
            {errors?.mountExternal}
        </form>
    </>)
}

export default App;



