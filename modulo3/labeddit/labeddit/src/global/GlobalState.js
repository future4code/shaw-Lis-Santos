import React, { useState } from 'react'
import { GlobalContext } from './GlobalContext'

export default function GlobalState(props) {

    const token = localStorage.getItem("token")
    const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

    return (
        <GlobalContext.Provider value={{ token, rightButtonText, setRightButtonText }}>
            {props.children}
        </GlobalContext.Provider>
    )
}