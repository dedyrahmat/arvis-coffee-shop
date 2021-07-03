import Link from 'next/link'

export default function ItemCard({ coffee }) {
    return (
        <Link href={{ pathname: "/product-detail/[id]", query: { id: coffee.id } }}>
            <div className="rounded shadow-md cursor-pointer">
                <img src={coffee.image_url} className="w-[252px] h-[252px] object-cover rounded-tr rounded-tl" />
                <div className="px-3 py-4 text-center">
                    <h1 className="font-semibold text-gray-800">{coffee.product_name}</h1>
                    <span className="text-sm text-blue-400">Rp. {coffee.price}</span>
                </div>
            </div>
        </Link>
    )
}
