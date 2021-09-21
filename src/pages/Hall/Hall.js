import { Link } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { Button } from '../../components/Button';
import validateHall from '../Hall/ValidateHall'
import useForm from '../Hall/UseForm'
import table from '../../images/table.png'

import '../../styles/hall.scss';

export function Hall() {
    return (
        <div className="hall-page">
            <NavBar />              
            <main className="hall-page-main">
                <h2 className="name-empoyee"> Atendente: {localStorage.getItem("usersName")} </h2>
                <h1>Iniciar Atendimento</h1>
                <h2 className="instructions"> Selecione uma mesa e digite o nome do cliente: </h2>
                <form className="tables-container">
                    <div>
                        <label for="t1"><img src={table} alt=""/>1</label>
                        <input type="radio" name="table" id="t1" />
                    </div>
                    <div>
                        <label for="t2"><img src={table} alt=""/>2</label>
                        <input type="radio" name="table" id="t2" />
                    </div>
                    <div>
                        <label for="t3"><img src={table} alt=""/>3</label>
                        <input type="radio" name="table" id="t3" />
                    </div>
                    <div>
                        <label for="t4"><img src={table} alt=""/>4</label>
                        <input type="radio" name="table" id="t4" />
                    </div>
                    <div>
                        <label for="t5"><img src={table} alt=""/>5</label>
                        <input type="radio" name="table" id="t5" />
                    </div>
                    <div>
                        <label for="t6"><img src={table} alt=""/>6</label>
                        <input type="radio" name="table" id="t6" />
                    </div>
                    <div>
                        <label for="t7"><img src={table} alt=""/>7</label>
                        <input type="radio" name="table" id="t7" />
                    </div>
                    <div>
                        <label for="t8"><img src={table} alt=""/>8</label>
                        <input type="radio" name="table" id="t8" />
                    </div>
                    <div>
                        <label for="t9"><img src={table} alt=""/>9</label>
                        <input type="radio" name="table" id="t9" />
                    </div>
                    <div className="name-client-input">
                        <label >Nome do Cliente</label> 
                        <input 
                            type="text" 
                            autoComplete="off"
                        />
                    </div>
                </form>

                <div><Link className="link" to="/menumorning">
                        <Button 
                            type="submit"
                            buttonText="Café da Manhã"
                            className="button-primary"
                        /></Link>
                </div>
                <div><Link className="link" to="/menumain">
                        <Button 
                            type="submit"
                            buttonText="Almoço/Jantar"
                            className="button-primary"
                        /></Link>
                </div>
            </main>
            
        </div>
    );
}