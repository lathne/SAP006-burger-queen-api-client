
import react from "react";
import {Button} from "./Button";
import {render, fireEvent } from "@testing-library/react";

//renderizar o botão
//buscar o botão
//clicar no botão

describe('Tests for Button component'), () => {
    it('Should render correctly', () => {
        const { getByTestId } = render( <Button 
            type="submit"
            buttonText="Entrar"
            onClick={handleSubmit}
            className="button-primary"
        /> );
        const buttonNode = getByTestId("form-button");
    });
    fireEvent.click(buttonNode);
};