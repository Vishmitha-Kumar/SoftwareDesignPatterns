import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Container, Search } from 'lucide-react'





const carouselItems = [
  {
    id: 1,
    imgSrc: 'https://cdn.venuelook.com/images/new-home-images/wedding.png',
    text:'Wedding',
    alt: 'slide1',
  },
  {
    id: 2,
    imgSrc: 'https://cdn.venuelook.com/images/new-home-images/cake.png',
    text:'Birthday',
    alt: 'slide2',
  },
  {
    id: 3,
    imgSrc: 'https://cdn.venuelook.com/images/new-home-images/ring.png',
    text:'Engagement',
    alt: 'slide3',
  },
  {
    id: 4,
    imgSrc: 'https://cdn.venuelook.com/images/new-home-images/pool.png',
    text:'Pool party',
    alt: 'slide4',
  },
  {
    id: 5,
    imgSrc: 'https://cdn.venuelook.com/images/new-home-images/cocktail.png',
    text:'Cocktail Party',
    alt: 'slide5',
  },
  {
    id: 6,
    imgSrc: 'https://cdn.venuelook.com/images/new-home-images/ofc-party.png',
    text:'Corporate Party',
    alt: 'slide6',
  },
  {
    id: 7,
    imgSrc: 'https://cdn.venuelook.com/images/new-home-images/banquet.png',
    text:'Banquet Halls',
    alt: 'slide7',
  },
  {
    id: 8,
    imgSrc: 'https://cdn.venuelook.com/images/new-home-images/kitty.png',
    text:'Kitty Party',
    alt: 'slide8',
  },
 
];

const Home = () => {
  return (
    <>
    <div className="relative w-full h-[60vh]">
      <img 
        src="https://www.elizabethanne-weddings.com/wp-content/uploads/2023/02/louisgabriel-367-scaled.jpg" 
        alt="Banner Image" 
        className="w-full h-full object-cover" 
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-4 rounded shadow-lg z-10">
        <h1 className="text-center text-4xl font-bold text-slate-50 mb-4">
          Find & Book the Best Venue For Every Special Event
        </h1>
        <div className="flex items-center border border-gray-300 rounded-lg">
          <input 
            type="text" 
            placeholder="Search for halls, services, or events..." 
            className="flex-grow p-2 px-4 border-none rounded-l-lg focus:outline-none"
          />
          <button className="p-2 px-4 text-white bg-primary rounded-r-lg flex items-center">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
    <div className='w-full flex justify-center items-start p-8'>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[80%] h-auto"
        >
          <CarouselContent>
            {carouselItems.map((item) => (
              <CarouselItem key={item.id} className="basis-1/5">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img src={item.imgSrc} alt={item.alt} className="w-full h-full object-cover" />
                    </CardContent>
                      <p className="mt-2 text-xl font-serif text-center pb-5 text-[#CC4404] cursor-pointer">{item.text}</p>
                  </Card>
                </div>
                
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <hr className='border-solid p-5'/>
    <div className='w-full flex justify-center items-center text-3xl font-serif'>
      <h6>How it works ?</h6>
    </div>


    
    </>
  )
}

export default Home
