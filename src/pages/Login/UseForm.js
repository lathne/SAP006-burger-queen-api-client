import { useState } from "react";
import { loginWithUserPassword } from "../services/dataService.js"

const useForm = validate => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        empty : true,
        email: '', 
        password: '',
    })

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        if (errors.empty) {
            loginWithUserPassword(values.email, values.password)
            .then((response) => {
                console.log(response)
            })
        }
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