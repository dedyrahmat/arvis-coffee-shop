import { useState } from "react";
import MainLayout from "../../components/MainLayout";
import coffee from '../coffee.json'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from "../../store/actionCreator";

export async function getServerSideProps({ query }) {
    const data = coffee.filter((item) => item.id == query.id)[0]
    return {
        props: {
            data
        }, // will be passed to the page component as props
    }
}

export default function ProductDetail({ data }) {
    const [qty, setQty] = useState(1)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const addToCart = () => {
        let cartState = [...cart]
        const found = cartState.some(el => el.id === data.id);
        if (!found) {
            const newCart = {
                id: data.id,
                product_name: data.product_name,
                description: data.description,
                price: data.price,
                image_url: data.image_url,
                qty
            }
            cartState.push(newCart)
            dispatch(setCart(cartState))
        } else {
            // const tempArr = [...cartState]
            const cartIndex = cartState.findIndex(v => v.id === data.id)
            cartState[cartIndex].qty += qty
            cartState = cartState
            dispatch(setCart(cartState))
        }
    }

    return (
        <MainLayout>
            <div className="grid grid-cols-2 gap-x-6">
                <img src={data.image_url} className="w-full max-h-[600px] object-cover rounded" />
                <div>
                    <h1 className="font-semibold text-gray-800 text-2xl mb-2">{data.product_name}</h1>
                    <p className="text-3xl font-bold text-blue-400 mb-6">Rp. {data.price}</p>
                    <p className="text-gray-800 mb-4">{data.description}</p>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="relative col-span-1 flex items-center gap-x-1">
                            <div onClick={() => setQty(qty - 1)} className="bg-blue-400 hover:bg-blue-500 cursor-pointer py-2 px-4 text-xl font-bold text-gray-100">-</div>
                            <input type="text" className="w-full text-center" value={qty} />
                            <div onClick={() => setQty(qty + 1)} className="bg-blue-400 hover:bg-blue-500 cursor-pointer py-2 px-4 text-xl font-bold text-gray-100">+</div>
                        </div>
                        <button onClick={addToCart} className="py-2 px-4 col-span-2 bg-blue-400 hover:bg-blue-500 text-white rounded flex gap-x-2 w-full text-center items-center justify-center">Add to cart
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
