// import react from "react";
import { getAllProducts } from "../../services/dataService";
import { useState, useEffect } from "react"

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
    })

    useEffect(() => {
        filterBurgerMain()
    })

    const [orders, setOrders]=useState([])

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value

        })
        console.log(name, value)
    }

    function filterBurgerMain() {
        console.log('passei no burgermain')
        const burger1 = allProducts.find(item => {
            return item.flavor === values.burger && item.complement === values.extra2 && item.name === values.extra1})
            if(burger1 !== undefined){
            burger1.quant = 1
            console.log(burger1)
            setValues({
                burger: '',
                extra1: '',
                extra2: '',
            })
            setOrders([...orders, burger1])
            }
        return burger1
    }

    const [sideOrders, setSideOrders] = useState([])

    function filterByItemName(e) {
        let side = allProducts.find(item => {
            return item.name === e.target.value})
            setSideOrders([...sideOrders, side])
        return side
    }
    
    return {handleChange, filterBurgerMain, values, orders, filterByItemName, sideOrders }
}
        
// const breakfast = data.filter((item) => item.type === "breakfast");
// const breakfastItems = breakfast.map((item)=> item.name + item.price);
//