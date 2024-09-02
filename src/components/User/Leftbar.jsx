import React, { useState } from 'react';
import { Power } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';

const options = [
  { value: 'Wedding', label: 'Wedding' },
  { value: 'Birthday Party', label: 'Birthday Party' },
  { value: 'Corporate Party', label: 'Corporate Party' },
  { value: 'Family Function', label: 'Family Function' },
];

const hallOptions = [
  { value: 'Party Halls', label: 'Party Halls' },
  { value: 'Banquet Halls', label: 'Banquet Halls' },
  { value: 'Marriage Halls', label: 'Marriage Halls' },
  { value: 'Conference Halls', label: 'Conference Halls' },
];

const guestOptions = [
  { value: 'Under 100 Guests', label: 'Under 100 Guests' },
  { value: 'Under 500 Guests', label: 'Under 500 Guests' },
  { value: 'Under 1000 Guests', label: 'Under 1000 Guests' },
  { value: 'Above 1000 Guests', label: 'Above 1000 Guests' },
];

const priceOptions = [
  { value: 'Below Rs.30,000', label: 'Below Rs.30,000' },
  { value: 'Rs.30,000-Rs.150000', label: 'Rs.30,000-Rs.150000' },
  { value: 'Rs.70,000-Rs.250000', label: 'Rs.70,000-Rs.250000' },
  { value: 'Above 300000', label: 'Above 300000' },
];

const filterSections = [
  { title: 'By Occasion', options, filterType: 'type' },
  { title: 'By Space Type', options: hallOptions, filterType: 'hallType' },
  { title: 'By Capacity', options: guestOptions, filterType: 'guestRange' },
  { title: 'By Budget Range', options: priceOptions, filterType: 'priceRange' },
];

const Leftbar = ({ setFilters }) => {
  const initialState = {
    type: '',
    hallType: '',
    guestRange: '',
    priceRange: '',
  };

  const [filters, setFilterState] = useState(initialState);

  const handleFilterChange = (filterType, value) => {
    const updatedFilters = { ...filters, [filterType]: value };
    setFilterState(updatedFilters);
    setFilters(updatedFilters);
  };

  const clearFilters = () => {
    setFilterState(initialState);
    setFilters(initialState);
  };

  return (
    <div className='h-full w-full flex flex-col items-center shadow-sm p-5'>
      <div className='h-20 w-[60%] flex justify-center items-center'>
        <NavLink to='/user/data'>
          <img src="https://ik.imagekit.io/hal1hunt/Home/Screenshot_2024-07-25_191002-removebg-preview.png" alt="Logo" />
        </NavLink>
      </div>

      <div className='flex-grow w-full flex flex-col items-center gap-3'>
        <Card className='w-full mt-3'>
          <div className='flex justify-between items-center p-2'>
            <p onClick={clearFilters} className='text-blue-500 rounded cursor-pointer'>
              Clear Filters
            </p>
          </div>

          {filterSections.map((section) => (
            <div key={section.title} className='flex-grow w-full flex flex-col items-center gap-2'>
              <Card className='w-full mt-2'>
                <div className='flex justify-between items-center p-2'>
                  <h6 className='text-orange-700 font-semibold'>
                    {section.title}
                  </h6>
                </div>
                <CardContent className='h-40 overflow-y-auto'>
                  {section.options.map(option => (
                    <label key={option.value} className='flex items-center mb-2'>
                      <input
                        type='radio'
                        name={section.filterType}
                        value={option.value}
                        checked={filters[section.filterType] === option.value}
                        onChange={e => handleFilterChange(section.filterType, e.target.value)}
                        className='mr-2'
                      />
                      {option.label}
                    </label>
                  ))}
                </CardContent>
              </Card>
            </div>
          ))}
        </Card>
      </div>

      <div className='w-full'>
        <Button className='p-5 bg-red-500/5 hover:bg-red-500/10 font-bold w-full'>
          <NavLink to="/">
            <span className='flex flex-row items-center justify-start w-full gap-2 text-red-500'>
              <Power size={20} /> Logout
            </span>
          </NavLink>
        </Button>
      </div>
    </div>
  );
};

export default Leftbar;
