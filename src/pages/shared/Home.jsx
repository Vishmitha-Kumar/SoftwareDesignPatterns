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
    <div>
     
    <Carousel className="w-full">
  <CarouselContent className="flex w-full">
    {Array.from({ length: 7 }).map((_, index) => (
      <CarouselItem key={index} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-2xl font-semibold">{index + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

   
    </div>
    <div className='p-10 border-solid '>
    <div class="relative w-52 h-64 rounded-lg z-50 overflow-hidden flex flex-col items-center justify-center shadow-custom-shadow">
  <div class="absolute top-1 left-1 w-[190px] h-[240px] z-20  backdrop-blur-md rounded-md overflow-hidden outline outline-2 "></div>
  <div class="absolute top-1/2 left-1/2 w-[150px] h-[150px] bg-custom-red opacity-100 rounded-full filter blur-[12px] animate-blob-bounce"></div>
</div>


    </div>
    </>
  )
}

export default Home
