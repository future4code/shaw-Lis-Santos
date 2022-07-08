import React, { useContext, useState } from 'react';
import AppBar from '@material-ui/core/AppBar'
import { StyledToolBar } from './styled';
import Button from '@material-ui/core/Button'
import { useNavigate } from 'react-router';
import { goToFeed, goToLogin } from '../../routes/coordinator';
import { GlobalContext } from '../../global/GlobalContext';

const Header = () => {
    const navigate = useNavigate()
    const {rightButtonText, setRightButtonText, token} = useContext(GlobalContext)



    const logout = () => {
        localStorage.removeItem("token")
    }


    const rightButtonAction = () => {
        if (token) {
            logout()
            setRightButtonText("Login")
            goToLogin(navigate)
        } else {
            goToLogin(navigate)
        }
    }


    return (
        <AppBar position="static">
            <StyledToolBar>
                <Button onClick={() => goToFeed(navigate)} color="inherit">LabEddit</Button>
                <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
            </StyledToolBar>
        </AppBar>
    );
}

export default Header;