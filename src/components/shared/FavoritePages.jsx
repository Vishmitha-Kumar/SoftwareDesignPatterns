import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const FavoritesPage = () => {
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleUnfavorite = (id) => {
    const updatedFavorites = favorites.filter(item => item.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className='m-1 p-4'>
      <h1 className='text-xl font-bold mb-4'>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorite halls added yet.</p>
      ) : (
        favorites.map(item => (
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
              <div className='flex justify-between mt-4'>
                <Link to={`/description/${item.id}`}>
                  <Button>View Details</Button>
                </Link>
                <Button
                  className='bg-red-500 hover:bg-red-600 text-white'
                  onClick={() => handleUnfavorite(item.id)}
                >
                  <Heart/>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default FavoritesPage;
