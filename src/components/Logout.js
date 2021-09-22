import { useHistory } from 'react-router-dom';
import logoutIMG from '../images/exit.png'

const Logout = () => {
  localStorage.clear()
  useHistory().push('/login')
}

export function ButtonLogout() {
    return (
        <img
            className="btn-exit-img"
            src={logoutIMG}
            alt="logout"
            onClick= {Logout}
        />
    )
}