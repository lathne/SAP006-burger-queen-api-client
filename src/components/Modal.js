import { Link } from 'react-router-dom';
import '../styles/modal.scss';

export function Modal({children}) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p class="validation-message">{children}</p>
                <div class="modal-button">
                    <Link to="/hall" class="close-modal">
                        Voltar para o salão
                    </Link>
                </div>
            </div>
        </div>
    )
}