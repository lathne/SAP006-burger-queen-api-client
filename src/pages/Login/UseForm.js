import { useState } from "react";
import { loginWithUserPassword } from "../../services/dataService.js"
import { useHistory } from 'react-router-dom';

const useForm = validate => {
    const history = useHistory();   

    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        empty : true,
        email: '', 
        password: '',
    })

    function navigateToHall() {
        history.push('/hall');
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));

        if (errors.empty) {

            loginWithUserPassword(values.email, values.password)
            
                .then(res => res.json())
                .then((json) => {
                    const token = json.token
                    const id = json.id
                    // const role = json.role
                    localStorage.setItem("usersToken", token);
                    localStorage.setItem("usersName", json.name);

                    if (token !== null && id !== null ) {
                        navigateToHall()
                    } else {
                        console.log('Não cadastrado!')
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

    return {handleChange, values, handleSubmit, errors}
}

export default useForm;