// import react from "react";
import { getAllProducts } from "../../services/dataService";
import { useState } from "react"

let allProducts = []
getAllProducts().then( (result) => {
    result.json().then( (data)=> {
        allProducts = data
    })
})

export function NoteOrder(){
    const [values, setValues] = useState({
        burger: '',
        extra1: '',
        extra2: '',
        tab: []
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
        console.log(name, value)
    }

    function filterBurgerMain() {
        console.log(values)
        let burger1 = allProducts.filter(item => {
            return item.flavor === values.burger && item.complement === values.extra2 && item.name === values.extra1})
            
            setValues({ tab: [...values.tab, burger1] })
        return burger1
    }
    
    return {handleChange, filterBurgerMain, values}
}
        
// const breakfast = data.filter((item) => item.type === "breakfast");
// const breakfastItems = breakfast.map((item)=> item.name + item.price);
//