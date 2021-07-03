import { useState, useEffect } from 'react'
import Image from 'next/image'
import Logo from '../public/images/logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setAccessToken } from '../store/actionCreator'
import Router from 'next/router'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const accessToken = useSelector(state => state.accessToken)
    const dispatch = useDispatch()

    useEffect(() => {
        if (accessToken) {
            Router.replace("/")
        }
    }, [])

    const login = () => {
        if (email === "admin@admin.com" && password === "admin") {
            dispatch(setAccessToken("AccessTokenHere"))
            Router.replace("/")
        } else {
            alert("Email atau password salah")
        }
    }


    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white w-[500px] shadow rounded-lg px-4 py-6">
                <Image src={Logo} />
                <h3 className="text-center mb-8 text-lg font-semibold">Masuk untuk melanjutkan</h3>
                <div className="block">
                    <label htmlFor="email" className="block text-sm">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="rounded-lg w-full mb-4" />
                </div>
                <div className="block">
                    <label htmlFor="password" className="block text-sm">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" className="rounded-lg w-full mb-4" />
                </div>
                <hr className="my-4" />
                <button onClick={login} className="w-full bg-blue-400 text-white rounded-lg py-3">Masuk</button>
            </div>
        </div>
    )
}
