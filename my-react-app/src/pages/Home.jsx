import Footer from '../components/Footer'
import Header from '../components/Header'
import TourCard from '../components/TourCard'
import Heading from '../components/Heading'
import Button from '../components/Button'

function Home() {
  // mock data
  const tours = [
    {
      id: 1,
      title: 'Tour Du Lịch Hoa Kỳ',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/04/Tour-Bo-Dong-My-10N9D-destination-new-york-01-1-1200x800.jpg',
    },
    {
      id: 2,
      title: 'Tour Du Lịch Canada',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/04/Tour-Bo-Dong-My-10N9D-destination-new-york-01-1-1200x800.jpg',
    },
    {
      id: 3,
      title: 'Tour Du Lịch Châu Âu',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-sydney-1200x800.jpg',
    },
    {
      id: 4,
      title: 'Tour Du Lịch Úc',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-sydney-1200x800.jpg',
    },
    {
      id: 4,
      title: 'Tour Du Lịch Cuba',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-sydney-1200x800.jpg',
    },
    {
      id: 4,
      title: 'Tour Du Lịch Nga',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-sydney-1200x800.jpg',
    },
    {
      id: 4,
      title: 'Tour Singapore - Malaysia',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-sydney-1200x800.jpg',
    },
    {
      id: 4,
      title: 'Tour Du Lịch Châu Á',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-sydney-1200x800.jpg',
    },
  ]
  return (
    <div className="min-h-screen flex flex-col justify-between container mx-auto px-20">
      <Header />
      <Heading title="Tour Quốc Tế"/>
      <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-3 pt-5">
        {tours.map(tour => (
          <TourCard key={tour.id} title={tour.title} image={tour.image}/>
        ))}
      </div>
      <div className="flex justify-center my-6">
        <Button label="Xem tất cả"/>
      </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home