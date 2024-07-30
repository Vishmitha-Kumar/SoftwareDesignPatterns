import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import RequestQuote from './RequestQuote';
import { useState } from 'react';
import { Button } from '../ui/button';

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
    vegPrice: '$30',
    nonVegPrice: '$35',
    reviews: '4.0 stars',
    type: 'Wedding',
    hallType: 'Marriage halls',
    guestRange: 'above 1000',
    priceRange: 'under 500',
    description: 'Rengaz Mahal is an exquisite marriage hall located in Coimbatore. It is ideal for weddings and large gatherings. The hall is spacious and offers premium services.',
    locationtype:'Mayor Ramanathan Centre, 75/2, Santhome High Rd, Mandavelipakkam, Raja Annamalai Puram, Chennai, Tamil Nadu 600028.',
     organizer:'Shanmidha R',
    contactOrganizer:'+91 8765432109'
  },
  {
    id: 3,
    name: 'Crystal Lake ServiceAppartments',
    location: 'Namakkal',
    imgs: [
        "https://content.jdmagicbox.com/comp/coimbatore/g4/0422px422.x422.190427114046.j6g4/catalogue/crystal-lake-service-apartments-singanallur-coimbatore-banquet-halls-shtm0awssb.jpg",
       "https://cdn.venuelook.com/uploads/space_2877/1602672423_204x158.png",
        "https://cdn.venuelook.com/uploads/space_2877/1646029156_204x158.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7u-X18ulvINm4xJu0qxau3twjMUxb7H70TXiRlW3KBUaXS9Ez9IPFfxfX8fHWhA2kTI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe98_9I_AaRIAjNWPerjEk6ZtICllLKfa5G9db1ogjikTH3O5IxtIAvp7wdYixW1ItBn8&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pTZ13JBoo94ePGmVnhjSKamkofeOWr01yVLyhw9pNRIah9YL3m3oWuNICDrOzqS_nlA&usqp=CAU"
      ],
    vegPrice: '$30',
    nonVegPrice: '$35',
    reviews: '4.0 stars',
    type: 'Conference',
    hallType: 'Conference halls',
    guestRange: 'under 500',
    priceRange: 'under 400',
     organizer:'Krishan R',
    contactOrganizer:'+91 8765432109'
  },
  {
    id: 4,
    name: 'JK Hotels',
    location: 'Tirupur',
    imgs:[
        "https://lh3.googleusercontent.com/9VWqa8zwc7gxsgP8G1rWggDOGUO3rpCWYNBeKH5vV5PvHt2RfIWRQBDcphHoW8U8Hn-BMgrEQnqHngKfTCrP92Gv=w600-h400-n-rw-c0xffffffff-l95-e31",
        "https://cdn.venuelook.com/uploads/space_2877/1602672423_204x158.png",
        "https://cdn.venuelook.com/uploads/space_2877/1646029156_204x158.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7u-X18ulvINm4xJu0qxau3twjMUxb7H70TXiRlW3KBUaXS9Ez9IPFfxfX8fHWhA2kTI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe98_9I_AaRIAjNWPerjEk6ZtICllLKfa5G9db1ogjikTH3O5IxtIAvp7wdYixW1ItBn8&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pTZ13JBoo94ePGmVnhjSKamkofeOWr01yVLyhw9pNRIah9YL3m3oWuNICDrOzqS_nlA&usqp=CAU"
      ],
    vegPrice: '$30',
    nonVegPrice: '$35',
    reviews: '4.0 stars',
    type: 'Corporate',
    hallType: 'Party halls',
    guestRange: 'under 500',
    priceRange: 'under 400',
     organizer:'Venkat R',
    contactOrganizer:'+91 8765432109'
  },
];



const DescriptionPage = () => {



  const { id } = useParams();
  const item = data.find(item => item.id === parseInt(id));
  if (!item) {
    return <div>Item not found</div>;
  }

 const [showPopup, setShowPopup] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
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
      <h1 className='text-2xl font-bold mb-4'>{item.name}</h1>
      <div className='mb-4'>
        <img src={item.imgs[0]} alt={item.name} className='w-full h-64 object-cover mb-4' />
        <p className='text-lg'><strong>Location:</strong> {item.location}</p>
        <p className='text-lg'><strong>Description:</strong> {item.description}</p>
        <p className='text-lg'><strong>Veg Price:</strong> {item.vegPrice}</p>
        <p className='text-lg'><strong>Non-Veg Price:</strong> {item.nonVegPrice}</p>
        <p className='text-lg'><strong>Reviews:</strong> {item.reviews}</p>
        <p className='text-lg'><strong>Type:</strong> {item.type}</p>
        <p className='text-lg'><strong>Hall Type:</strong> {item.hallType}</p>
        <p className='text-lg'><strong>Guest Range:</strong> {item.guestRange}</p>
        <p className='text-lg'><strong>Price Range:</strong> {item.priceRange}</p>
      </div>
      <h2 className='text-xl font-bold mb-2'>Gallery & Parking: </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {item.imgs.map((img, index) => (
          <img key={index} src={img} alt={`Gallery ${index + 1}`} className='w-full h-48 object-cover' />
        ))}
      </div>
      <hr className='border-solid p-5'/>
      <p className='text-lg'><strong>Hall Location:</strong> {item.locationtype}</p>
      <p className='text-lg'><strong>Organiserer</strong>(optional) :{item.organizer}</p>
      <p className='text-lg'><strong>Contact Organiser:</strong> {item.contactOrganizer}</p>
      
      <Button className='self-end mt-4' onClick={handleRequestQuoteClick}>Request a Quote</Button>
      <RequestQuote
        handleClosePopup={handleClosePopup}
        handleSubmit={handleSubmit}
        showPopup={showPopup}
      />
      <Button className='self-end mt-4 flex flex-row justify-items-end'>Contact:+91 9876543210</Button>
    </div>
  );
};

export default DescriptionPage;
