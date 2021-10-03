import { getAllProducts, createOrder } from "../../services/dataService";
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useHistory } from 'react-router';

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
    const [sideOrders, setSideOrders] = useState([])

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value

        })
    }
    console.log(allProducts)
    function filterBurgerMain() {
        const burger1 = allProducts.find(item => {
            return item.flavor === values.burger && (item.complement === values.extra2 ||  (values.extra2 === "nenhum" && item.complement === null)) && item.name === values.extra1})
            if(burger1 !== undefined){
            burger1.qtd = 1
            setValues({
                burger: '',
                extra1: '',
                extra2: '',
            })
            setOrders([...orders, burger1])
            }
        return burger1
    }

    

    function filterByItemName(e) {
        let side = allProducts.find(item => {
            
              return item.name === e.target.value
          }) 
          
          e.target.checked=false

          let sideExist = sideOrders.find(item => {
              console.log(e.target, item.name)
              console.log(item.name === e.target.value)
                return item.name === e.target.value
            }) 
          if(sideExist !== undefined){
              side.qtd += 1
              setSideOrders([...sideOrders]);
          }else{
          side.qtd = 1
          setSideOrders([...sideOrders, side])
          }
          console.log(side)
          return [side]
    }
    
    const location = useLocation()
    const history = useHistory()

    function sendToTheKitchen () {
        const orderBurgerProducts = orders.map((product) => {
            return {id:product.id,
                    qtd:product.qtd}
        })
        const orderProducts = sideOrders.map((product) => {
              return {id:product.id,
                      qtd:product.qtd}
        } )  

        const allProductsMain = [orderBurgerProducts, orderProducts].flat()

        const  orderToSendToTheKitchen = {
              "client": location.state.nameClientInput,
              "table": location.state.table,
              "products": allProductsMain
          }
          if (orderToSendToTheKitchen.products.length > 0){
          createOrder(orderToSendToTheKitchen).then((result) => {
              if (result.ok){
                  alert("pedido criado com sucesso")
                  history.push("/hall")
              }else {
                  alert("o cozinheiro tá de folga")
              }
          }).catch((result) => {
              alert(result)
          })}else{
              alert("estão faltando dados para o pedido")
          }
      }
  
      function cancelOrder () {
          setSideOrders([])
      }

      function addBurger(item) {
        item.qtd += 1;
        setOrders([...orders]);
      }

      function addSideItem(item) {
        item.qtd += 1;
        setSideOrders([...sideOrders]);
      }

      function removeBurger(item) {
        if (item.qtd > 1) {
          item.qtd -= 1;
          setOrders([...orders]);
        }
      }

      function removeSideItem(item) {
        if (item.qtd > 1) {
          item.qtd -= 1;
          setSideOrders([...sideOrders]);
        }
      }

      function deleteBurger(item) {
          orders.splice(orders.indexOf(item), 1);
          setOrders([...orders]);
      }

      function deleteSideItem(item) {
        sideOrders.splice(sideOrders.indexOf(item), 1);
        setSideOrders([...sideOrders]);
      }


      
    return {handleChange, filterBurgerMain, values, orders, filterByItemName, 
        sideOrders, cancelOrder, sendToTheKitchen, addBurger, addSideItem, removeBurger, removeSideItem, deleteBurger, deleteSideItem}
}
        