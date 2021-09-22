import { useState } from "react";
import { registerUser } from "../../services/dataService.js"
import { useHistory } from 'react-router-dom';

const useForm = validate => {
    const history = useHistory();   

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
    })

    const [errors, setErrors] = useState({
        empty : true,
        name: '',
        email: '', 
        password: '',
        role: '',
    })

    
    function navigateToLogin() {
        history.push('/login');
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values))

        if (errors.empty) {
            registerUser(values)
                .then(response => response.json(
                    console.log(response)
                ))
                .then((json) => {
                    console.log(json)

                    const token = json.token
                    localStorage.setItem("usersToken", token);

                    if (json.id === undefined) {
                        console.log('DEU ERROOO')
                    } else {
                        navigateToLogin();
                    }
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

    return {handleChange, values, handleSubmit, errors};
}

export default useForm;