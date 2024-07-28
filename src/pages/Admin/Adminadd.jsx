import React, { useState } from 'react';
import { Plus } from "lucide-react";
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

const Adminadd = () => {
  const [add, setAdd] = useState(false);
  const halls = [
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
  ];

  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Halls</CardTitle>
          <Button onClick={() => setAdd(!add)}>
            <Plus className='h-10 w-10 mr-2' /> Add
          </Button>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-h-96 overflow-auto">
          {halls.map((hall) => (
            <Card key={hall.HallId} className="relative">
              <CardHeader>
                <CardTitle>{hall.Hallname}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="https://via.placeholder.com/150" alt={hall.Hallname} className="h-20 w-20 mb-4 object-cover" />
                <p><strong>Location:</strong> {hall.Location}</p>
                <p><strong>Capacity:</strong> {hall.Capacity}</p>
                <p><strong>Price Range:</strong> {hall.PriceRange}</p>
                <p><strong>Facilities:</strong> {hall.Facilities}</p>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      <Sheet open={add} onOpenChange={setAdd}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add Hall</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4 overflow-auto max-h-[calc(100vh-200px)]">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="hallname" className="text-right">
                Hall Name
              </Label>
              <Input id="hallname" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="hallimage" className="text-right">
                Hall Image
              </Label>
              <Input id="hallimage" type="file" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="location" className="text-right">
                Location
              </Label>
              <Input id="location" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="capacity" className="text-right">
                Capacity
              </Label>
              <Input id="capacity" type="number" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="pricerange" className="text-right">
                Price Range
              </Label>
              <Input id="pricerange" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="facilities" className="text-right">
                Facilities
              </Label>
              <Input id="facilities" className="col-span-3" />
            </div>
          </div>
          <SheetFooter className='flex justify-between'>
            <Button className='bg-red-400 hover:bg-red-500' onClick={() => setAdd(!add)}>Cancel</Button>
            <Button type="submit">Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Adminadd;
