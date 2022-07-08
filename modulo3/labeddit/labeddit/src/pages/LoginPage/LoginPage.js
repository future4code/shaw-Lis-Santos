import React, { useContext, useState } from "react";
import { login } from '../../services/user'
import { TextField } from "@material-ui/core";
import { InputsContainer, ScreenContainer, SignUpButton } from "./styled";
import useForm from '../../hooks/useForm'
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router";
import { goToSignUp } from '../../routes/coordinator'
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { GlobalContext } from "../../global/GlobalContext";
import { CircularProgress } from "@material-ui/core";

const LoginPage = () => {
    useUnprotectedPage()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const { setRightButtonText } = useContext(GlobalContext)

    console.log(form)

    const onSubmitForm = e => {
        e.preventDefault()
        login(form, clear, navigate, setRightButtonText, setIsLoading)
    }

    return (
        <ScreenContainer>
            <h1>Login</h1>

            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />

                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                    >
                        {isLoading? <CircularProgress color={"inherit"} size={24} /> : <>Fazer Login </>}
                    </Button>
                </form>
            </InputsContainer>
            <SignUpButton>
                <Button
                    onClick={() => goToSignUp(navigate)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                >
                    NÃO POSSUI CONTA? CADASTRE-SE
                </Button>
            </SignUpButton>
        </ScreenContainer>
    )
}

export default LoginPage;