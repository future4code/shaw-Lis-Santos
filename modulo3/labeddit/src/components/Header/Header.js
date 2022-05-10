import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import { StyledToolBar } from './styled';
import Button from '@material-ui/core/Button'
import { useNavigate } from 'react-router';
import { goToFeed, goToLogin } from '../../routes/coordinator';

const Header = () => {
    const navigate = useNavigate()

    return (
        <AppBar position="static">
            <StyledToolBar>
                <Button onClick={() => goToFeed(navigate)} color="inherit">LabEddit</Button>
                <Button onClick={() => goToLogin(navigate)} color="inherit">Login</Button>
            </StyledToolBar>
        </AppBar>
    );
}

export default Header;