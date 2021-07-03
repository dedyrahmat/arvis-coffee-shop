import MainLayout from "../components/MainLayout";
import { useSelector, useDispatch } from 'react-redux'
import { setCart } from "../store/actionCreator";

export default function Cart() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const deleteCart = (cartId) => {
        const tempCart = [...cart]
        const deletedItem = tempCart.filter(v => v.id !== cartId)
        dispatch(setCart(deletedItem))
    }
    const checkout = () => {
        dispatch(setCart([]))
        alert("Berhasil Checkout")
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return (
        <MainLayout>
            <h1 className="font-semibold text-gray-800 text-4xl my-8">Cart</h1>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8">
                    {cart.map((item, index) => (
                        <div key={index}>
                            <div className="flex items-center gap-x-6">
                                <img src={item.image_url} className="w-[80px] h-[80px] object-cover rounded" />
                                <div className="flex flex-1 items-center justify-between">
                                    <div className="text-gray-800">
                                        <h3>{item.product_name}</h3>
                                        <span className="font-bold">Rp. {item.price}</span>
                                        <p>{item.qty}x</p>
                                    </div>
                                    <svg onClick={() => deleteCart(item.id)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </div>
                            </div>
                            <hr className="my-4" />
                        </div>
                    ))}
                </div>
                <div className="col-span-4">
                    <div className="bg-white shadow rounded p-4">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-800 text-xl">Total</h3>
                            <h3 className="font-semibold text-gray-800 text-xl">Rp. {cart.map(item => item.price * item.qty).reduce(reducer, 0)}</h3>
                        </div>
                        <button onClick={checkout} className="bg-blue-400 hover:bg-blue-500 w-full py-2 text-white font-semibold">Checkout</button>
                    </div>
                </div>
            </div>
        </MainLayout >
    )
}
