import { useState } from "react";
import { useHistory } from 'react-router-dom';
import ValidateHall from './ValidateHall'


const useForm = () => {
    const history = useHistory()
    
    function navigateToMenuMain() {
        history.push('/menumain', values)
    }

    function navigateToMenuMorning() {
            history.push('/menumorning',values) 
    }

    const [errors, setErrors] = useState({
        empty : true
    })

    const [values, setValues] = useState({
        table: '',
        nameClientInput: '',
        name: '',
    })

    const handleSubmit = e => {
        e.preventDefault();
        const validation = ValidateHall(values);
        if(validation.empty){
             if(e.target.className === "button-hall morning") {              
            navigateToMenuMorning()
            }
             else {
            navigateToMenuMain()
            }
        }else {
            setErrors(validation)
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
