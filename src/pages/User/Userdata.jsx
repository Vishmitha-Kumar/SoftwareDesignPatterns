import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { CheckCircle2Icon } from 'lucide-react';
import RequestQuote from '@/components/shared/RequestQuote';
 

const Userdata = () => {
  const { filters } = useOutletContext();
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const locations = ['Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kanchipuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Nagapattinam', 'Namakkal', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Salem', 'Sivagangai', 'Thanjavur', 'Theni', 'Thoothukudi', 'Trichy', 'Tirunelveli', 'Tirupur', 'Tiruvallur', 'Tiruvannamalai', 'Vellore', 'Viluppuram', 'Virudhunagar'];

  const data = [
    {
      id: 1,
      name: 'Windsor Gardens',
      location: 'Chennai',
      imgs: "https://content3.jdmagicbox.com/comp/coimbatore/m9/0422px422.x422.180619160525.c6m9/catalogue/windsor-gardens-alandurai-coimbatore-banquet-halls-dt5qw3hqis.jpg",
      vegPrice: '$20',
      nonVegPrice: '$25',
      reviews: '4.5 stars',
      type: 'Birthday',
      hallType: 'Banquet halls',
      guestRange: 'under 100',
      priceRange: 'under 400'
    },
    {
      id: 2,
      name: 'Rengaz Mahal',
      location: 'Coimbatore',
      imgs: "https://media.bookeventz.com/884x350/html/bookeventz.com/images/restaurant-picture/rengaz-mahal-chinniyampalayam-coimbatore.jpg",
      vegPrice: '$30',
      nonVegPrice: '$35',
      reviews: '4.0 stars',
      type: 'Wedding',
      hallType: 'Marriage halls',
      guestRange: 'above 1000',
      priceRange: 'under 500'
    },
    {
      id: 3,
      name: 'Crystal Lake ServiceAppartments',
      location: 'Coimbatore',
      imgs: "https://content.jdmagicbox.com/comp/coimbatore/g4/0422px422.x422.190427114046.j6g4/catalogue/crystal-lake-service-apartments-singanallur-coimbatore-banquet-halls-shtm0awssb.jpg",
      vegPrice: '$30',
      nonVegPrice: '$35',
      reviews: '4.0 stars',
      type: 'Conference',
      hallType: 'Conference halls',
      guestRange: 'under 500',
      priceRange: 'under 400'
    },
    {
      id: 4,
      name: 'JK Hotels',
      location: 'Virudhunagar',
      imgs: "https://lh3.googleusercontent.com/9VWqa8zwc7gxsgP8G1rWggDOGUO3rpCWYNBeKH5vV5PvHt2RfIWRQBDcphHoW8U8Hn-BMgrEQnqHngKfTCrP92Gv=w600-h400-n-rw-c0xffffffff-l95-e31",
      vegPrice: '$30',
      nonVegPrice: '$35',
      reviews: '4.0 stars',
      type: 'Corporate',
      hallType: 'Party halls',
      guestRange: 'under 500',
      priceRange: 'under 400'
    },
  ];

  const filteredData = data.filter(item => {
    return (
      (!filters.type || item.type === filters.type) &&
      (!filters.hallType || item.hallType === filters.hallType) &&
      (!filters.guestRange || item.guestRange === filters.guestRange) &&
      (!filters.priceRange || item.priceRange === filters.priceRange) &&
      (!selectedLocation || item.location === selectedLocation) &&
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const handleRequestQuoteClick = () => {
    setShowPopup(true);
    setShowSuccess(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(false);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className='m-1 p-4'>
      <div className='w-full flex justify-between'>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>Location</label>
          <select
            className='mt-1 block border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black'
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value=''>Select a location</option>
            {locations.map(location => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>Search</label>
          <input
            type='text'
            className='mt-1 block border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black'
            placeholder='Search by name...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      {filteredData.map(item => (
        <Card key={item.id} className='shadow-sm shadow-primary mb-4 flex'>
          <div className='w-1/4'>
            <img src={item.imgs} alt='Ceremony' className='w-full h-full object-cover' />
          </div>
          <CardContent className='flex flex-col justify-between ml-4 w-3/4'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col gap-2'>
                <CardTitle>{item.name}</CardTitle>
                <p style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '8px' }}><MapPin /></span>
                  {item.location || 'N/A'}
                </p>
                <p>Type: {item.type}</p>
                <p>Reviews: {item.reviews}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p>Hall Type: {item.hallType}</p>
                <p>Price Range: {item.priceRange}</p>
                <p>Guests: {item.guestRange}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p>Veg Price: {item.vegPrice}</p>
                <p>Non-Veg Price: {item.nonVegPrice}</p>
              </div>
            </div>
            <Button className='self-end mt-4' onClick={handleRequestQuoteClick}>Request a Quote</Button>
          </CardContent>
        </Card>
      ))}

      <RequestQuote
        handleClosePopup={handleClosePopup}
        handleSubmit={handleSubmit}
        showPopup={showPopup}
      />

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center">
            <CheckCircle2Icon className="h-12 w-12 text-green-500 mb-4" />
            <h2 className="text-xl font-bold mb-2">Request Submitted Successfully</h2>
            <p className="text-gray-600">Thank you for your request. We will get back to you soon.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Userdata;