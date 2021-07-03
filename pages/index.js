import ItemCard from '../components/ItemCard'
import MainLayout from '../components/MainLayout'
import coffee from './coffee.json'

export default function Home() {
  return (
    <MainLayout>
      <div className="w-full rounded max-h-[400px] mt-12 relative">
        <img src="https://images.unsplash.com/photo-1461988366670-48e401bafb0a" className="w-full max-h-[400px] object-cover rounded" />
        <div className="absolute bottom-5 left-5 right-5 text-white">
          <div className="bg-black opacity-75 rounded p-4">
            <h1 className="font-bold text-3xl opacity-100 mb-4">Semua Orang Bisa Seduh Kopi di Rumah</h1>
            <span>Perjalanan kopi setiap orang bermula dari satu titik. Ada yang bermula di kedai kopi, di lingkungan kerja dan tak jarang pula berawal dari rumah. Seiring berjalannya waktu penikmat kopi tak lagi hanya mau sebatas menikmati, tetapi juga menyeduh lebih dalam untuk kepuasan diri sendiri. Untuk mewujudkannya, kamu hanya perlu mengawalinya dengan memiliki alat kopi, biji kopi terbaik dan sedikit kesabaran untuk mau belajar.</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-6 my-12">
        {coffee.map((item, i) => (
          <ItemCard coffee={item} key={i} />
        ))}

      </div>
    </MainLayout>
  )
}
