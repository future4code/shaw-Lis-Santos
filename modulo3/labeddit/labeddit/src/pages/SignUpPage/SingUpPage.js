import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router";
import { ScreenContainer, InputsContainer } from './styled'
import useForm from '../../hooks/useForm'
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { signUp } from "../../services/user";
import { GlobalContext } from "../../global/GlobalContext";

const SingUpPage = () => {
    useUnprotectedPage()
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({ username: '', email: '', password: '' })
    const { setRightButtonText } = useContext(GlobalContext)

    const onSubmitForm = e => {
        e.preventDefault()
        signUp(form, clear, navigate, setRightButtonText)
    }

    return (
        <ScreenContainer>
            <h1>Cadastro </h1>
            <form onSubmit={onSubmitForm}>
                <InputsContainer>
                    <TextField
                        value={form.username}
                        name={'username'}
                        onChange={onChange}
                        label={'Nome'}
                        variant={'outlined'}
                        fullWidth
                        required
                        autoFocus
                        margin={'normal'}
                    />
                    <TextField
                        value={form.email}
                        name={'email'}
                        onChange={onChange}
                        label={'E-mail'}
                        variant={'outlined'}
                        type={'email'}
                        fullWidth
                        required
                        margin={'normal'}
                    />
                    <TextField
                        value={form.password}
                        name={'password'}
                        onChange={onChange}
                        label={'Senha'}
                        variant={'outlined'}
                        type={'password'}
                        fullWidth
                        required
                        margin={'normal'}
                    />
                </InputsContainer>
                <Button
                    color={'primary'}
                    variant={'contained'}
                    type={'submit'}
                    fullWidth
                > Fazer Cadastro
                </Button>
            </form>
        </ScreenContainer >
    )
}

export default SingUpPage