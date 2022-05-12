import React, { useContext } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import BASE_URL from '../../constants/url'
import axios from "axios";
import { GlobalContext } from "../../global/GlobalContext";
import { TextField } from "@material-ui/core";

const PostPage = () => {
    useProtectedPage()

    return (
        <div>
            PostPage
        </div>
    )
}
export default PostPage;