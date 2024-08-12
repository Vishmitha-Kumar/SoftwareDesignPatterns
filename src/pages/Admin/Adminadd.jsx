import React, { useEffect, useState } from 'react';
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
import { addhalls, getHalls, deleteHall, updateHall } from '../../service/api';

const Adminadd = () => {
  const [add, setAdd] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [newHall, setNewHall] = useState({
    hallname: "",
    description: "",
    location: "",
    organiser: "",
    contact: "",
    type: "",
    halltype: "",
    hallDetails: {
      vegPrice: "",
      nonveg: "",
      reviews: "",
      guestRange: "",
      priceRange: "",
    },
  });

  const [halls, setHalls] = useState([]);

  useEffect(() => {
    const fetchHalls = async () => {
      try {
        const response = await getHalls();
        setHalls(response.data);
      } catch (error) {
        console.error("Error fetching Halls:", error);
      }
    };
    fetchHalls();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (['vegPrice', 'nonveg', 'reviews', 'guestRange', 'priceRange'].includes(id)) {
      setNewHall({
        ...newHall,
        hallDetails: {
          ...newHall.hallDetails,
          [id]: value,
        },
      });
    } else {
      setNewHall({ ...newHall, [id]: value });
    }
  };

  const handleAddHall = async (event) => {
    event.preventDefault();
    try {
      await addhalls(newHall);
      setAdd(false);
      const response = await getHalls();
      setHalls(response.data);
    } catch (error) {
      console.error('Error adding halls:', error);
    }
  };

  const handleEditHall = (index) => {
    setEditIndex(index);
    setNewHall(halls[index]);
    setAdd(true);
  };

  const handleDeleteHall = async (hallId) => {
    if (!hallId) {
      console.error('No Id provided for deletion');
      return;
    }
    try {
      await deleteHall(hallId);
      const response = await getHalls();
      setHalls(response.data);
    } catch (error) {
      console.error('Error deleting halls:', error);
    }
  };

  const handleUpdateHall = async () => {
    if (editIndex === null) {
      console.error('No hall selected for updation');
      return;
    }
    try {
      const hallId = halls[editIndex].id;
      await updateHall(hallId, newHall);
      setAdd(false);
      setEditIndex(null);
      const response = await getHalls();
      setHalls(response.data);
    } catch (error) {
      console.error('Error updating hall:', error);
    }
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
            <Card key={hall.hallId} className="relative">
              <CardHeader>
                <CardTitle>{hall.hallname}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="https://via.placeholder.com/150" alt={hall.hallname} className="h-20 w-20 mb-4 object-cover" />
                <p><strong>Description:</strong>{hall.description}</p>
                <p><strong>Location:</strong> {hall.location}</p>
                <p><strong>Organiser:</strong> {hall.organiser}</p>
                <p><strong>Contact:</strong> {hall.contact}</p>
                <p><strong>Veg Price:</strong> {hall.hallDetails?.vegPrice}</p>
                <p><strong>Non-Veg Price:</strong> {hall.hallDetails?.nonveg}</p>
                <p><strong>Reviews:</strong> {hall.hallDetails?.reviews}</p>
                <p><strong>Type:</strong> {hall.type}</p>
                <p><strong>Hall Type:</strong> {hall.halltype}</p>
                <p><strong>Guest Range:</strong> {hall.hallDetails?.guestRange}</p>
                <p><strong>Price Range:</strong> {hall.hallDetails?.priceRange}</p>
              </CardContent>
              <div className="absolute top-2 right-2 flex space-x-2">
                <Button size="icon" onClick={() => handleEditHall(index)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="destructive" onClick={() => handleDeleteHall(hall.id)}>
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
            <SheetTitle>
              <Button type="button" onClick={editIndex !== null ? handleUpdateHall : handleAddHall}>
                {editIndex !== null ? "Update Hall" : "Add Hall"}
              </Button>
            </SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4 overflow-auto max-h-[calc(100vh-200px)]">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="hallname" className="text-right">Hall Name</Label>
              <Input id="hallname" value={newHall.hallname} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="description" className="text-right">Description</Label>
              <Input id="description" value={newHall.description} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="location" className="text-right">Location</Label>
              <Input id="location" value={newHall.location} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="organiser" className="text-right">Organiser</Label>
              <Input id="organiser" value={newHall.organiser} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="contact" className="text-right">Contact</Label>
              <Input id="contact" value={newHall.contact} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="vegPrice" className="text-right">Veg Price</Label>
              <Input id="vegPrice" value={newHall.hallDetails.vegPrice} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="nonveg" className="text-right">Non-Veg Price</Label>
              <Input id="nonveg" value={newHall.hallDetails.nonveg} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="reviews" className="text-right">Reviews</Label>
              <Input id="reviews" value={newHall.hallDetails.reviews} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="type" className="text-right">Type</Label>
              <Input id="type" value={newHall.type} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="halltype" className="text-right">Hall Type</Label>
              <Input id="halltype" value={newHall.halltype} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="guestRange" className="text-right">Guest Range</Label>
              <Input id="guestRange" value={newHall.hallDetails.guestRange} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="priceRange" className="text-right">Price Range</Label>
              <Input id="priceRange" value={newHall.hallDetails.priceRange} onChange={handleInputChange} className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <Button type="submit" onClick={editIndex !== null ? handleUpdateHall : handleAddHall}>
              {editIndex !== null ? "Update Hall" : "Add Hall"}
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Adminadd;
