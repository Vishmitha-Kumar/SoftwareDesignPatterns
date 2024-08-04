import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../ui/button';
import RequestQuote from './RequestQuote';

const data = [
  {
    id: 1,
    name: 'Windsor Gardens',
    location: 'Chennai',
    imgs: [
      "https://content3.jdmagicbox.com/comp/coimbatore/m9/0422px422.x422.180619160525.c6m9/catalogue/windsor-gardens-alandurai-coimbatore-banquet-halls-dt5qw3hqis.jpg",
      "https://cdn.venuelook.com/uploads/space_2877/1602672423_204x158.png",
      "https://cdn.venuelook.com/uploads/space_2877/1646029156_204x158.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7u-X18ulvINm4xJu0qxau3twjMUxb7H70TXiRlW3KBUaXS9Ez9IPFfxfX8fHWhA2kTI&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe98_9I_AaRIAjNWPerjEk6ZtICllLKfa5G9db1ogjikTH3O5IxtIAvp7wdYixW1ItBn8&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pTZ13JBoo94ePGmVnhjSKamkofeOWr01yVLyhw9pNRIah9YL3m3oWuNICDrOzqS_nlA&usqp=CAU"
    ],
    vegPrice: '$20',
    nonVegPrice: '$25',
    reviews: '4.5 stars',
    type: 'Birthday',
    hallType: 'Banquet halls',
    guestRange: 'under 100',
    priceRange: 'under 400',
    description: 'Windsor Gardens is a beautiful banquet hall located in Chennai. It is perfect for birthday parties and small gatherings. The hall offers a serene ambiance and excellent services.',
    locationtype:'Mayor Ramanathan Centre, 75/2, Santhome High Rd, Mandavelipakkam, Raja Annamalai Puram, Chennai, Tamil Nadu 600028.',
    organizer:'Shanmugam R',
    contactOrganizer:'+91 8765432109'
  },
  {
    id: 2,
    name: 'Rengaz Mahal',
    location: 'Coimbatore',
    imgs: [
      "https://media.bookeventz.com/884x350/html/bookeventz.com/images/restaurant-picture/rengaz-mahal-chinniyampalayam-coimbatore.jpg",
      "https://cdn.venuelook.com/uploads/space_2877/1602672423_204x158.png",
      "https://cdn.venuelook.com/uploads/space_2877/1646029156_204x158.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7u-X18ulvINm4xJu0qxau3twjMUxb7H70TXiRlW3KBUaXS9Ez9IPFfxfX8fHWhA2kTI&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe98_9I_AaRIAjNWPerjEk6ZtICllLKfa5G9db1ogjikTH3O5IxtIAvp7wdYixW1ItBn8&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pTZ13JBoo94ePGmVnhjSKamkofeOWr01yVLyhw9pNRIah9YL3m3oWuNICDrOzqS_nlA&usqp=CAU"
    ],
    vegPrice: '$20',
    nonVegPrice: '$25',
    reviews: '4.5 stars',
    type: 'Wedding',
    hallType: 'Marriage halls',
    guestRange: 'under 300',
    priceRange: 'under 400',
    description: 'Rengaz Mahal is a prestigious marriage hall in Coimbatore, known for its grand ambiance and top-notch facilities. Ideal for weddings and large gatherings.',
    locationtype:'Chinniyampalayam, Coimbatore',
    organizer:'Mukesh R',
    contactOrganizer:'+91 9876543210'
  },
];

const DescriptionPage = () => {
  const { id } = useParams();
  const item = data.find((item) => item.id === parseInt(id));
  const [showSheet, setShowSheet] = useState(false);

  const handleRequestQuote = () => {
    setShowSheet(true);
  };

  const handleCloseSheet = () => {
    setShowSheet(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log('Form submitted');
    setShowSheet(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={item.imgs[0]} alt={item.name} className="w-full h-auto rounded-lg mb-4" />
          <div className="flex flex-wrap -mx-2">
            {item.imgs.slice(1).map((img, index) => (
              <div key={index} className="w-1/2 px-2 mb-4">
                <img src={img} alt={`${item.name} ${index + 1}`} className="w-full h-auto rounded-lg" />
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="mb-4"><strong>Description:</strong> {item.description}</p>
          <p className="mb-4"><strong>Location:</strong> {item.locationtype}</p>
          <p className="mb-4"><strong>Organizer:</strong> {item.organizer}</p>
          <p className="mb-4"><strong>Contact:</strong> {item.contactOrganizer}</p>
          <p className="mb-4"><strong>Veg Price:</strong> {item.vegPrice}</p>
          <p className="mb-4"><strong>Non-Veg Price:</strong> {item.nonVegPrice}</p>
          <p className="mb-4"><strong>Reviews:</strong> {item.reviews}</p>
          <p className="mb-4"><strong>Type:</strong> {item.type}</p>
          <p className="mb-4"><strong>Hall Type:</strong> {item.hallType}</p>
          <p className="mb-4"><strong>Guest Range:</strong> {item.guestRange}</p>
          <p className="mb-4"><strong>Price Range:</strong> {item.priceRange}</p>
          <Button onClick={handleRequestQuote}>Request a Quote</Button>
        </div>
      </div>
      <RequestQuote handleCloseSheet={handleCloseSheet} handleSubmit={handleSubmit} showSheet={showSheet} />
    </div>
  );
};

export default DescriptionPage;