import { useState } from "react";
import { useHistory } from 'react-router-dom';
import ValidateHall from './ValidateHall'


const useForm = () => {
    const history = useHistory()
    
    function navigateToMenuMain() {
        history.push('/menumain')
    }

    function navigateToMenuMorning() {
            history.push('/menumorning') 
    }

    const [errors, setErrors] = useState({
        empty : true
    })

    const [values, setValues] = useState({
        table: '',
        nameClientInput: '',
    })

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(ValidateHall(values));
        console.log(ValidateHall(values))
        if(errors.empty){
             if(e.target.className["morning"]!== undefined) {              
            navigateToMenuMorning()
         }
             else {
            navigateToMenuMain()
         }
        }
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
        console.log(name, value)
    }
    
    return {handleChange, values, handleSubmit, errors}
    // ir para acompanhar pedidos 
    // não é da historia atual

    // ir para pagina da cozinha
    // não é da historia atual 
}
export default useForm;
