import useForm from './UseForm.js'
import validate from './ValidateLogin'
import * as dataService from '../../services/dataService.js'

jest.mock('../../services/dataService.js');

// envio do form com usuario e senha valido
// mock loginwith email
// mock response
//verificar os dados dentro do local storage
// verificar se o navigate to hall foi chamado pelo menos uma vez

test ('should call navigateToHall', () => {
    useForm.values = {email:'teste@user.com', password:'123456'}
    dataService.loginWithUserPassword.mockResolvedValueOnce(new Promise(resolve, reject){})
    useForm(validate).handleSubmit({preventDefault: () => {

    }})
});
