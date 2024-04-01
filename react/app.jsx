export const useForm = (data, setData, validForm) => {

    const [errors, setErrors] = useState({
        name: 'write name',
        email: 'write email'
    })

    const handleChange = (event) => {

        if (!event?.target?.name && !event?.target?.value) return console.log({event})

        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleBlur = (event) => {
        handleChange(event);
        setErrors(validForm(data))
    }

    const clearErrors = (event) => {
        setErrors({});
    }

    return {errors, handleChange, handleBlur, clearErrors}

}


function App() {

    const [dataSelectError, setDataSelectError] = useState({
        name: {error: false},
        email: {error: false}
    })

    const [dataformCustomer, setDataFormCustomer] = useState({
        name: '',
        email: ''
    })

    useEffect(() => {
        console.log({dataformCustomer});
        handleBlur(dataformCustomer)

    }, [dataformCustomer])

    const validCustomer = (data) => {
        let errors = {};

        let regexName = /^\[A-Za-z Ññ]+$/;
        if (data.name.trim().length === 0) {
            errors.name = 'ingresa el correo'
        } else if (!regexName.test(data.name.trim())) {
            errors.name = 'invalido'
        }



        let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
        if (data.email.trim().length === 0) {
            errors.email = 'write email'
        } else if (!regexEmail.test(data.email.trim())) {
            errors.email = 'invalid'
        }

        return errors

    }

    const {
        errors,
        handleChange,
        handleBlur
    } = useForm(dataformCustomer, setDataFormCustomer, validCustomer)

    useEffect(() => {

        let vehicleErrors = {}

        for (const [key, value] of Object.entries(dataSelectError)) {
            if (value.error) {
                vehicleErrors = key;
            }
        }

    }, [errors, dataSelectError]);

    return (
        <form>
            <input
                autoComplete="off"
                aria-autocomplete="off"
                className="input-form"
                placeholder="CORREO ELECTRONICO"
                type="text"
                name="email"
                value={dataformCustomer.email}
                onChange={handleChange}/>
            {errors?.email && <InfoError msg={errors?.email} type={"error"}/>}
        </form>
    )
}



