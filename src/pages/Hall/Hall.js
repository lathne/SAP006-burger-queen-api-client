import { NavBar } from '../../components/NavBar';
import { Button } from '../../components/Button';
import useForm from '../Hall/UseForm'

import table from '../../images/table.png'

import '../../styles/hall.scss';

export function Hall() {
    const {handleChange, values, handleSubmit, errors} = useForm()
    return (
        <div className="hall-page">
            <NavBar />              
            <main className="hall-page-main">
                <h2 className="name-empoyee"> Atendente: {localStorage.getItem("usersName")} </h2>
                <h1>Iniciar Atendimento</h1>
                <h2 className="instructions"> Selecione uma mesa e digite o nome do cliente: </h2>
                <form className="tables-container" onSubmit={handleSubmit}>
                <div className="error-message">{errors.table && <p>{errors.table}</p>}</div>
                    <div>
                        <label htmlFor="t1"><img src={table} alt=""/>1</label>
                        <input type="radio" name="table" id="t1" value="1" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="t2"><img src={table} alt=""/>2</label>
                        <input type="radio" name="table" id="t2" value="2" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="t3"><img src={table} alt=""/>3</label>
                        <input type="radio" name="table" id="t3" value="3" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="t4"><img src={table} alt=""/>4</label>
                        <input type="radio" name="table" id="t4" value="4" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="t5"><img src={table} alt=""/>5</label>
                        <input type="radio" name="table" id="t5" value="5" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="t6"><img src={table} alt=""/>6</label>
                        <input type="radio" name="table" id="t6" value="6" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="t7"><img src={table} alt=""/>7</label>
                        <input type="radio" name="table" id="t7" value="7" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="t8"><img src={table} alt=""/>8</label>
                        <input type="radio" name="table" id="t8" value="8" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="t9"><img src={table} alt=""/>9</label>
                        <input type="radio" name="table" id="t9" value="9" onChange={handleChange}/>
                    </div>
                    <div className="name-client-input">
                        <label >Nome do Cliente</label> 
                        <input 
                            name="nameClientInput"
                            onChange={handleChange}
                            type="text" 
                            autoComplete="off"
                            value={values.nameClientInput}
                        />
                        <div className="error-message">{errors.nameClientInput && <p>{errors.nameClientInput}</p>}</div>
                    </div>

                    <div>
                        <Button 
                            type="submit"
                            buttonText="Café da Manhã"
                            className="button-primary morning" 
                        />
                    </div>
                    <div>
                        <Button 
                            type="submit"
                            buttonText="Almoço/Jantar"
                            className="button-primary main"
                        />
                    </div>
                </form>

               
            </main>
            
        </div>
    );
}