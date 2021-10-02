import { NavBar } from '../../components/NavBar';
import { Button } from '../../components/Button';
import '../../styles/hall.scss';
import useForm from '../Hall/UseForm'

import table from '../../images/table.png';

export function Hall() {
    const {handleChange, values, handleSubmit, errors} = useForm()
    return (
        <div className="hall-page">
            <NavBar />              
            <main className="hall-page-main">
                <h3 className="employee"> Atendente: {localStorage.getItem("usersName")} </h3>
                <h1>Iniciar Atendimento</h1>
                <h2 className="instructions"> Selecione uma mesa e digite o nome do cliente: </h2>
                
                <form className="form" onSubmit={handleSubmit}>
                    <div className="error-message">{errors.table && <p>{errors.table}</p>}</div>
                        <div className="tables-container">
                            <div className="table">
                                <input className="table-input" type="radio" name="table"  id="t1" value="1" onChange={handleChange}/>
                                <label htmlFor="t1"><img className="table-label" src={table} alt=""/></label>
                            </div>
                            <div className="table">
                                <input className="table-input" type="radio" name="table" id="t2" value="2" onChange={handleChange}/>
                                <label htmlFor="t2"><img className="table-label" src={table} alt=""/></label>
                            </div>
                            <div className="table">
                                <input className="table-input" type="radio" name="table" id="t3" value="3" onChange={handleChange}/>
                                <label htmlFor="t3"><img className="table-label" src={table} alt=""/></label>
                            </div>
                            <div className="table">
                                <input className="table-input" type="radio" name="table" id="t4" value="4" onChange={handleChange}/>
                                <label htmlFor="t4"><img className="table-label" src={table} alt=""/></label>
                            </div>
                            <div className="table">
                                <input className="table-input" type="radio" name="table" id="t5" value="5" onChange={handleChange}/>
                                <label htmlFor="t5"><img className="table-label" src={table} alt=""/></label>
                            </div>
                            <div className="table">
                                <input className="table-input" type="radio" name="table" id="t6" value="6" onChange={handleChange}/>
                                <label htmlFor="t6"><img className="table-label" src={table} alt=""/></label>
                            </div>
                            <div className="table">
                                <input className="table-input" type="radio" name="table" id="t7" value="7" onChange={handleChange}/>
                                <label htmlFor="t7"><img className="table-label" src={table} alt=""/></label>
                            </div>
                            <div className="table">
                                <input className="table-input" type="radio" name="table" id="t8" value="8" onChange={handleChange}/>
                                <label htmlFor="t8"><img className="table-label" src={table} alt=""/></label>
                            </div>
                            <div className="table">
                                <input className="table-input" type="radio" name="table" id="t9" value="9" onChange={handleChange}/>
                                <label htmlFor="t9"><img className="table-label"  src={table} alt=""/></label>
                            </div>
                    </div>

                    <div className="client-name-container">
                        <label className="client-name-label">
                            <h2>Nome do Cliente</h2>
                        </label> 
                        <input 
                            className="client-name-input"
                            type="text" 
                            name="nameClientInput"
                            autoComplete="off"
                            value={values.nameClientInput}
                            onChange={handleChange}
                        />
                        <div className="error-message">{errors.nameClientInput && <p>{errors.nameClientInput}</p>}</div>
                    </div>
                    <div className="menu-buttons-container">
                    <h2 className="instructions">Selecione o menu desejado:</h2>
                   
                    <div className="menu-buttons">
                        
                        <Button 
                            type="button"
                            buttonText="Café da Manhã"
                            className="button-hall morning"
                            onClick={handleSubmit}
                        /> 
                                           
                        <Button 
                            type="button"
                            buttonText="Almoço/Jantar"
                            className="button-hall main"
                            onClick={handleSubmit}
                        />
                        
                    </div>

                </div>

                </form>
                
            </main>
        </div>
    );
}

