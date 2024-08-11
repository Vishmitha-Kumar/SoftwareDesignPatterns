import React, { useState, useEffect } from 'react';

import { useOutletContext, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MapPin } from 'lucide-react';
import { CheckCircle2Icon } from 'lucide-react';
import RequestQuote from '@/components/shared/RequestQuote';
import { getHalls } from '../../service/api';

const Userdata = () => {
  const { filters } = useOutletContext();
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);
  const[datas,setDatas]=useState([]);
  const navigate = useNavigate();

  const locations = ['Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kanchipuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Nagapattinam', 'Namakkal', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Salem', 'Sivagangai', 'Thanjavur', 'Theni', 'Thoothukudi', 'Trichy', 'Tirunelveli', 'Tirupur', 'Tiruvallur', 'Tiruvannamalai', 'Vellore', 'Viluppuram', 'Virudhunagar'];

  // const [hallData,sethallData]=useState({
  //   hallname: "",
  //   location: "",
  //   vegPrice:"",
  //   nonveg:"",
  //   reviews:"",
  //   type:"",
  //   halltype:"",
  //   guestRange:"",
  //   priceRange: "",

  // });




  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleFavoriteToggle = (hall) => {
    const updatedFavorites = favorites.some(fav => fav.id === hall.id)
      ? favorites.filter(fav => fav.id !== hall.id)
      : [...favorites, hall];

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const filteredData = datas.filter(item => {
    return (
      (!filters.type || item.type === filters.type) &&
      (!filters.halltype || item.halltype === filters.halltype) &&
      (!filters.guestRange || item.guestRange === filters.guestRange) &&
      (!filters.priceRange || item.priceRange === filters.priceRange) &&
      (!selectedLocation || item.location === selectedLocation) &&
      (item.hallname && item.hallname.toLowerCase().includes(searchTerm.toLowerCase()))
    );    
  });




useEffect(()=>{
  const fetchHall=async()=>{
    try{
      const response=await getHalls();
      console.log(response.data); 
      setDatas(response.data);
    }
    catch(error){
      console.error("Error fetching Halls",error);
    }
  };
  fetchHall();
},[]);









  const handleRequestQuoteClick = (id) => {
    navigate(`/description/${id}`);
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
            <img src="" alt='Ceremony' className='w-full h-full object-cover' />
          </div>
          <CardContent className='flex flex-col justify-between ml-4 w-3/4'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col gap-2'>
                <CardTitle>{item.hallname}</CardTitle>
                <p style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '8px' }}><MapPin /></span>
                  {item.location || 'N/A'}
                </p>
                <p>Type: {item.type}</p>
                <p>Reviews: {item.hallDetails?.reviews}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p>Hall Type: {item.halltype}</p>
                <p>Price Range: {item.hallDetails?.priceRange}</p>
                <p>Guests Range: {item.hallDetails?.guestRange}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p>Veg Price: {item.hallDetails?.vegPrice}</p>
                <p>Non-Veg Price: {item.hallDetails?.nonveg}</p>
              </div>
            </div>
            <div className='flex justify-between items-center mt-4'>
              <Button className='self-end' onClick={() => handleRequestQuoteClick(item.id)}>View details</Button>
              <Button variant='ghost' onClick={() => handleFavoriteToggle(item)}>
                <Heart className={favorites.some(fav => fav.id === item.id) ? 'fill-current text-red-500' : ''} />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      <RequestQuote
        handleClosePopup={handleClosePopup}
        handleSubmit={handleSubmit}
        showPopup={showPopup}
      />
    </div>
  );
};

export default Userdata;
