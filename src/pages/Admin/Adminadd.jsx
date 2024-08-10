import React, { useState } from 'react';
import { Plus, Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Description } from '@radix-ui/react-dialog';

const Adminadd = () => {
  const [add, setAdd] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [halls, setHalls] = useState([
    {
      HallId: "hall001",
      Hallname: "Grand Hall",
      Location: "Downtown",
      Capacity: "200",
      PriceRange: "Rs.50,000 - Rs.100,000",
      Facilities: "AC, Projector, Sound System",
    },
    {
      HallId: "hall002",
      Hallname: "Celebration Hall",
      Location: "Suburbs",
      Capacity: "150",
      PriceRange: "Rs.40,000 - Rs.80,000",
      Facilities: "AC, Stage, Catering",
    },
    {
      HallId: "hall003",
      Hallname: "Luxury Hall",
      Location: "City Center",
      Capacity: "300",
      PriceRange: "Rs.100,000 - Rs.200,000",
      Facilities: "AC, VIP Rooms, Valet Parking",
    },
    {
      HallId: "hall004",
      Hallname: "Party Hall",
      Location: "Uptown",
      Capacity: "100",
      PriceRange: "Rs.30,000 - Rs.60,000",
      Facilities: "AC, Dance Floor, Bar",
    },
  ]);

  const [newHall, setNewHall] = useState({
    HallId: "",
    Hallname: "",
    Description:"",
    Location: "",
    Organizer:"",
    Contact:"",
    VegPrice:"Rs. ",
    Nonveg:"Rs. ",
    Reviews:"",
    Type:"",
    HallType:"",
    GuestRange:"",
    PriceRange: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewHall({ ...newHall, [id]: value });
  };

  const handleAddHall = () => {
    if (editIndex !== null) {
      const updatedHalls = halls.map((hall, index) =>
        index === editIndex ? { ...newHall, HallId: hall.HallId } : hall
      );
      setHalls(updatedHalls);
      setEditIndex(null);
    } else {
      setHalls([...halls, { ...newHall, HallId: `hall${halls.length + 1}` }]);
    }
    setNewHall({
      HallId: "",
      Hallname: "",
      Description:"",
      Location: "",
      Organizer:"",
      Contact:"",
      VegPrice:"Rs. ",
      Nonveg:"Rs. ",
      Reviews:"",
      Type:"",
      HallType:"",
      GuestRange:"",
      PriceRange: "",
    
    });
    setAdd(false);
  };

  const handleEditHall = (index) => {
    setEditIndex(index);
    setNewHall(halls[index]);
    setAdd(true);
  };

  const handleDeleteHall = (index) => {
    const updatedHalls = halls.filter((_, i) => i !== index);
    setHalls(updatedHalls);
  };

  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Halls</CardTitle>
          <Button onClick={() => setAdd(true)}>
            <Plus className='h-10 w-10 mr-2' /> Add
          </Button>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-h-96 overflow-auto">
          {halls.map((hall, index) => (
            <Card key={hall.HallId} className="relative">
              <CardHeader>
                <CardTitle>{hall.Hallname}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="https://via.placeholder.com/150" alt={hall.Hallname} className="h-20 w-20 mb-4 object-cover" />
                <p><strong>Description:</strong>{hall.Description}</p>
                <p><strong>Location:</strong> {hall.Location}</p>
                <p><strong>Contact:</strong> {hall.Contact}</p>
                <p><strong>Veg Price:</strong> {hall.VegPrice}</p>
                <p><strong>Non-Veg Price:</strong> {hall.Nonveg}</p>
                <p><strong>Reviews:</strong> {hall.Reviews}</p>
                <p><strong>Type:</strong> {hall.Type}</p>
                <p><strong>Hall Type:</strong> {hall.HallType}</p>
                <p><strong>Guest Range:</strong> {hall.GuestRange}</p>
                <p><strong>Price Range:</strong> {hall.PriceRange}</p>
              </CardContent>
              <div className="absolute top-2 right-2 flex space-x-2">
                <Button size="icon" onClick={() => handleEditHall(index)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="destructive" onClick={() => handleDeleteHall(index)}>
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </CardContent>
      </Card>

      <Sheet open={add} onOpenChange={setAdd}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{editIndex !== null ? "Edit Hall" : "Add Hall"}</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4 overflow-auto max-h-[calc(100vh-200px)]">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="Hallname" className="text-right">
                Hall Name
              </Label>
              <Input id="Hallname" value={newHall.Hallname} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="Description" className="text-right">
                Description
              </Label>
              <Input id=" Description" value={newHall.Location} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="Location" className="text-right">
                Location
              </Label>
              <Input id="Location" value={newHall.Location} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="Organizer" className="text-right">
                Organizer
              </Label>
              <Input id="Organizer"  value={newHall.Capacity} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="  Contact" className="text-right">
                Contact
              </Label>
              <Input id="Contact" value={newHall.PriceRange} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="Veg Price" className="text-right">
                Veg Price
              </Label>
              <Input id="Veg Price" value={newHall.Facilities} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor=" Non-Veg Price" className="text-right">
                Non-Veg Price
              </Label>
              <Input id=" Non-Veg Price" value={newHall.Facilities} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor=" Reviews" className="text-right">
                Reviews
              </Label>
              <Input id=" Reviews" value={newHall.Facilities} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="Type" className="text-right">
                Type
              </Label>
              <Input id="Type" value={newHall.Facilities} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="Hall Type" className="text-right">
                Hall Type
              </Label>
              <Input id="Hall Type" value={newHall.Facilities} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor=" Guest Range" className="text-right">
                Guest Range
              </Label>
              <Input id=" Guest Range" value={newHall.Facilities} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="Price Range" className="text-right">
                Price Range
              </Label>
              <Input id="Price Range" value={newHall.Facilities} onChange={handleInputChange} className="col-span-3" />
            </div>
          </div>
          <SheetFooter className='flex justify-between'>
            <Button className='bg-red-400 hover:bg-red-500' onClick={() => setAdd(false)}>Cancel</Button>
            <Button type="button" onClick={handleAddHall}>Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Adminadd;
