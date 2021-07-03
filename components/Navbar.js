import Link from "next/link"
import { useSelector, useDispatch } from 'react-redux'
import { setAccessToken } from "../store/actionCreator";
import Router from 'next/router'

export default function Navbar() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const logout = () => {
        dispatch(setAccessToken(null))
        Router.replace('/login')
    }
    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <Link href="/">
                            <div className="flex-shrink-0 flex items-center">
                                <img className="hidden lg:block h-8 w-auto" src="/images/logo.svg" alt="Workflow" />
                            </div>
                        </Link>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4 w-full">
                                <Link href="/">
                                    <a href="#" className="text-gray-800 px-3 py-3 text-sm font-medium" aria-current="page">Home</a>
                                </Link>
                                <input type="search" className="rounded-lg w-full bg-gray-50 focus:ring-0 focus:border-gray-400" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <Link href="/cart">
                            <button className=" p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">View cart</span>
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="absolute bottom-0 right-0 text-xs top-[15px] left-[25px]">{cart.map(item => item.qty).reduce(reducer, 0)}</span>
                                </div>
                            </button>
                        </Link>
                        <a href="#" onClick={logout} className="text-white font-medium bg-red-300 rounded ml-6 px-3 py-3 text-sm font-medium" aria-current="page">Logout</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
