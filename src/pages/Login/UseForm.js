import { useState } from "react";


const useForm = validate => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        email: '', 
        password: '',
    })

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values))
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    return {handleChange, values, handleSubmit, errors}
}

export default useForm;