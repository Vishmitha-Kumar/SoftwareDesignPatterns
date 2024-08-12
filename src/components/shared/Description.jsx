import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import RequestQuote from './RequestQuote';
import { getHalls } from '../../service/api';

const DescriptionPage = () => {
  const { hallID } = useParams();
  const [description, setDescription] = useState([]);
  const [showSheet, setShowSheet] = useState(false);

 
console.log(hallID);



  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const response = await getHalls();
        setDescription(response.data);
      } catch (error) {
        console.error("Error fetching Description", error);
      }
    };
    fetchDescription();
  }, []);


  const item = description.find((item) => item.id === parseInt(hallID));

  const handleRequestQuote = () => {
    setShowSheet(true);
  };

  const handleCloseSheet = () => {
    setShowSheet(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    setShowSheet(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {item ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{item.hallname}</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img src="" alt={item.hallname} className="w-full h-auto rounded-lg mb-4" />
              <div className="flex flex-wrap -mx-2">
                {item.imgs?.slice(1).map((img, index) => (
                  <div key={index} className="w-1/2 px-2 mb-4">
                    <img src="" alt={`${item.hallname} ${index + 1}`} className="w-full h-auto rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="mb-4"><strong>Description:</strong> {item.description}</p>
              <p className="mb-4"><strong>Location:</strong> {item.location}</p>
              <p className="mb-4"><strong>Organizer:</strong> {item.organiser}</p>
              <p className="mb-4"><strong>Contact:</strong> {item.contact}</p>
              <p className="mb-4"><strong>Veg Price:</strong> {item.hallDetails?.vegPrice}</p>
              <p className="mb-4"><strong>Non-Veg Price:</strong> {item.hallDetails?.nonveg}</p>
              <p className="mb-4"><strong>Reviews:</strong> {item.hallDetails?.reviews}</p>
              <p className="mb-4"><strong>Type:</strong> {item.type}</p>
              <p className="mb-4"><strong>Hall Type:</strong> {item.halltype}</p>
              <p className="mb-4"><strong>Guest Range:</strong> {item.hallDetails?.guestRange}</p>
              <p className="mb-4"><strong>Price Range:</strong> {item.hallDetails?.priceRange}</p>
              <Button onClick={handleRequestQuote}>Request a Quote</Button>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p> 
      )}
      <RequestQuote hallID={hallID} handleCloseSheet={handleCloseSheet} handleSubmit={handleSubmit} showSheet={showSheet} 
      />
    </div>
  );
};

export default DescriptionPage;
