import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {Children}
            <Footer />
        </>
    )
}

export default Layout;