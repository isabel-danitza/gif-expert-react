import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [InputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        // console.log(target.value);
        setInputValue(target.value);

    }

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(InputValue);
        if(InputValue.trim().length <= 1) return;

        onNewCategory(InputValue.trim());
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={ (e) => onSubmit(e)}>
                <input
                    type="text"
                    placeholder="Buscar Gifs"
                    value={InputValue}
                    onChange={onInputChange}
                // onChange={(e) => onInputChange(e)}
                />
            </form>
        </>
    )
}
