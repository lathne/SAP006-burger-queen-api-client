import { NavBar } from '../../components/NavBar';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

import '../../styles/hall.scss';

import validateHall from '../Hall/ValidateHall'
import useForm from '../Hall/UseForm'

import table1 from '../../images/table1.png';
import table2 from '../../images/table2.png';
import table3 from '../../images/table3.png';
import table4 from '../../images/table4.png';
import table5 from '../../images/table5.png';
import table6 from '../../images/table6.png';
import table7 from '../../images/table7.png';
import table8 from '../../images/table8.png';
import table9 from '../../images/table9.png';


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
                            <label htmlFor="t1">
                            <img className="table-label" src={table1} alt=""/></label>
                            <input className="table-input" type="radio" name="table" id="t1" onChange={handleChange}/>
                        </div>
                        <div className="table">
                            <label htmlFor="t2"><img className="table-label" src={table2} alt=""/></label>
                            <input className="table-input" type="radio" name="table" id="t2" onChange={handleChange}/>
                        </div>
                        <div className="table">
                            <label htmlFor="t3"><img className="table-label" src={table3} alt=""/></label>
                            <input className="table-input" type="radio" name="table" id="t3" onChange={handleChange}/>
                        </div>
                        <div className="table">
                            <label htmlFor="t4"><img className="table-label" src={table4} alt=""/></label>
                            <input className="table-input" type="radio" name="table" id="t4" onChange={handleChange}/>
                        </div>
                        <div className="table">
                            <label htmlFor="t5"><img className="table-label" src={table5} alt=""/></label>
                            <input className="table-input" type="radio" name="table" id="t5" onChange={handleChange}/>
                        </div>
                        <div className="table">
                            <label htmlFor="t6"><img className="table-label" src={table6} alt=""/></label>
                            <input className="table-input" type="radio" name="table" id="t6" onChange={handleChange}/>
                        </div>
                        <div className="table">
                            <label htmlFor="t7"><img className="table-label" src={table7} alt=""/></label>
                            <input className="table-input" type="radio" name="table" id="t7" onChange={handleChange}/>
                        </div>
                        <div className="table">
                            <label htmlFor="t8"><img className="table-label" src={table8} alt=""/></label>
                            <input className="table-input" type="radio" name="table" id="t8" onChange={handleChange}/>
                        </div>
                        <div className="table">
                            <label htmlFor="t9"><img className="table-label"  src={table9} alt=""/></label>
                            <input className="table-input" type="radio" name="table" id="t9" onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="client-name-container">
                        <label className="client-name-label">
                            <h2>Nome do Cliente</h2>
                        </label> 
                        <input 
                            className="client-name-input"
                            type="text" 
                            autoComplete="off"
                            value={values.nameClientInput}
                            onChange={handleChange}
                        />
                        <div className="error-message">{errors.nameClientInput && <p>{errors.nameClientInput}</p>}</div>
                    </div>

                </form>
                <div className="menu-buttons-container">
                    <h2 className="instructions">Selecione o menu desejado:</h2>
                   
                   <div className="menu-buttons">
                        <Link className="link" to="/menumorning">
                            <Button 
                                type="submit"
                                buttonText="Café da Manhã"
                                className="button-hall"
                            />
                        </Link>
                    
                        <Link className="link" to="/menumain">
                            <Button 
                                type="submit"
                                buttonText="Almoço/Jantar"
                                className="button-hall"
                            />
                        </Link>
                    </div>

                </div>
            </main>
        </div>
    );
}

