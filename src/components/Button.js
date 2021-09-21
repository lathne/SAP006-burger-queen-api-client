import '../styles/button.scss';

export function Button(props) {
    return (
        <button 
            type={props.type} 
            className={props.className}> 
            {props.buttonText}
        </button>
    )
};
