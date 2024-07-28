import React, { useState } from 'react'
import { Power } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CardContent } from '@/components/ui/card'
import { NavLink } from 'react-router-dom'

const Leftbar = ({ setFilters }) => {
  const [type, setType] = useState('')
  const [hallType, setHallType] = useState('')
  const [guestRange, setGuestRange] = useState('')
  const [priceRange, setPriceRange] = useState('')

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case 'type':
        setType(value)
        break
      case 'hallType':
        setHallType(value)
        break
      case 'guestRange':
        setGuestRange(value)
        break
      case 'priceRange':
        setPriceRange(value)
        break
      default:
        break
    }
    setFilters({
      type: filterType === 'type' ? value : type,
      hallType: filterType === 'hallType' ? value : hallType,
      guestRange: filterType === 'guestRange' ? value : guestRange,
      priceRange: filterType === 'priceRange' ? value : priceRange
    })
  }

  const clearFilters = () => {
    setType('')
    setHallType('')
    setGuestRange('')
    setPriceRange('')
    setFilters({})
  }

  const options = [
    { value: 'Wedding', label: 'Wedding' },
    { value: 'Birthday', label: 'Birthday Party' },
    { value: 'Corporate', label: 'Corporate Party' },
    { value: 'Family', label: 'Family Function' },
  ]
  const hallOptions = [
    { value: 'Party halls', label: 'Party Halls' },
    { value: 'Banquet halls', label: 'Banquet Halls' },
    { value: 'Marriage halls', label: 'Marriage Halls' },
    { value: 'Conference halls', label: 'Conference Halls' },
  ]
  const guestOptions = [
    { value: 'under 100', label: 'Under 100 Guests' },
    { value: 'under 500', label: 'Under 500 Guests' },
    { value: 'under 1000', label: 'Under 1000 Guests' },
    { value: 'above 1000', label: 'Above 1000 Guests' },
  ]
  const priceOptions = [
    { value: 'under 400', label: 'Under Rs.400 per plate' },
    { value: '400 to 800', label: 'Rs.400 to Rs.800 per plate' },
    { value: '800 to 1000', label: 'Rs.800 to Rs.1000 per plate' },
  ]

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
          <div className='flex justify-between items-center p-2'>
              <h6 className='text-orange-700 font-semibold'>
                By Occasion
              </h6>
          </div>
          <CardContent className='h-40 overflow-y-auto'>
            {options.map(option => (
              <label key={option.value} className='flex items-center mb-2'>
                <input
                  type='radio'
                  name='type'
                  value={option.value}
                  checked={type === option.value}
                  onChange={e => handleFilterChange('type', e.target.value)}
                  className='mr-2'
                />
                {option.label}
              </label>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className='flex-grow w-full flex flex-col items-center gap-2'>
        <Card className='w-full mt-2'>
        <div className='flex justify-between items-center p-2'>
              <h6 className='text-orange-700 font-semibold'>
                By Space Type
              </h6>
          </div>
          <CardContent className='h-40 overflow-y-auto'>
            {hallOptions.map(option => (
              <label key={option.value} className='flex items-center mb-2'>
                <input
                  type='radio'
                  name='hallType'
                  value={option.value}
                  checked={hallType === option.value}
                  onChange={e => handleFilterChange('hallType', e.target.value)}
                  className='mr-2'
                />
                {option.label}
              </label>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className='flex-grow w-full flex flex-col items-center gap-2'>
        <Card className='w-full mt-2'>
        <div className='flex justify-between items-center p-2'>
              <h6 className='text-orange-700 font-semibold'>
                By Capacity
              </h6>
          </div>
          <CardContent className='h-40 overflow-y-auto'>
            {guestOptions.map(option => (
              <label key={option.value} className='flex items-center mb-2'>
                <input
                  type='radio'
                  name='guestRange'
                  value={option.value}
                  checked={guestRange === option.value}
                  onChange={e => handleFilterChange('guestRange', e.target.value)}
                  className='mr-2'
                />
                {option.label}
              </label>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className='flex-grow w-full flex flex-col items-center gap-2'>
        <Card className='w-full mt-2'>
        <div className='flex justify-between items-center p-2'>
              <h6 className='text-orange-700 font-semibold'>
                By Budget Range
              </h6>
          </div>
          <CardContent className='h-40 overflow-y-auto'>
            {priceOptions.map(option => (
              <label key={option.value} className='flex items-center mb-2'>
                <input
                  type='radio'
                  name='priceRange'
                  value={option.value}
                  checked={priceRange === option.value}
                  onChange={e => handleFilterChange('priceRange', e.target.value)}
                  className='mr-2'
                />
                {option.label}
              </label>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className='w-full'>
        <Button className='p-5 bg-red-500/5 hover:bg-red-500/10 font-bold w-full '>
          <span className='flex flex-row items-center justify-start w-full gap-2 text-red-500'>
            <Power size={20} /> Logout
          </span>
        </Button>
      </div>
    </div>
  )
}

export default Leftbar
