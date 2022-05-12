import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SingUpPage from '../pages/SignUpPage/SingUpPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import PostPage from '../pages/PostPage/PostPage'
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Header from '../components/Header/Header'

export const Router = () => {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cadastro" element={<SingUpPage />} />
                <Route index element={<FeedPage />} />
                <Route path="/detalhe/:id" element={<PostPage />} />
                <Route path="*" element={<ErrorPage />} />
               
            </Routes>
        </BrowserRouter>
    )
}