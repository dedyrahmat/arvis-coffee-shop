import { useEffect } from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Router from "next/router";

export default function MainLayout({ children }) {
    const accessToken = useSelector(state => state.accessToken)

    useEffect(() => {
        if (!accessToken) {
            Router.replace('/login')
        }
    }, [])

    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-12">
                {children}
            </div>
        </div>
    )
}
