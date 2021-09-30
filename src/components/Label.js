
export function Label (props) {
    return (
            <label 
                className={props.className} 
                htmlFor={props.htmlFor}>
                {props.labelText}
            </label>    
    )
}              
                    
                    

/*       <div className="drink">
            <img src={blackCoffee} alt="black coffee"/>
            <label className="label" htmlFor="black-coffee">Café Preto</label>
            <input className="input-radio" type="radio" name="drink" id="black-coffee" />
            </div>
            <div className="drink">
            <img src={latte} alt="latte"/>
            <label className="label" htmlFor="latte">Café com leite</label>
            <input className="input-radio" type="radio" name="drink" id="latte" />
            </div>
            <div className="drink">
            <img src={orangeJuice} alt="orange juice"/>
            <label className="label juice" htmlFor="orange-juice">Suco de Laranja</label>
            <input className="input-radio" type="radio" name="drink" id="orange-juice" />
        </div>
            
*/
                    
                    