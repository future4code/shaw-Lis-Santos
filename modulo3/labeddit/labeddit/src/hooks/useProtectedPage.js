import { useNavigate } from "react-router";
import { useLayoutEffect } from "react";
import { goToLogin } from "../routes/coordinator";

const useProtectedPage = () => {
    const navigate = useNavigate()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (!token)
            goToLogin(navigate)
    }, [navigate])
}

export default useProtectedPage