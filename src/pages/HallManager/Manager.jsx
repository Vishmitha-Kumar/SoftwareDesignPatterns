import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import React, { useState } from "react";
  import { Button } from "@/components/ui/button";
  import { Check, X, TrashIcon } from "lucide-react";
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  const Manager = () => {
    const [events, setEvents] = useState([
      {
        occasion: "Wedding",
        fromDateTime: "2024-08-01 14:00",
        toDateTime: "2024-08-01 18:00",
        numberOfGuests: 100,
        contactNumber: "123-456-7890",
        budgetRange: "Rs. 50,000 - Rs. 70,000",
        foodPreferences: "Vegetarian",
      },
      {
        occasion: "Birthday Party",
        fromDateTime: "2024-08-05 12:00",
        toDateTime: "2024-08-05 16:00",
        numberOfGuests: 50,
        contactNumber: "987-654-3210",
        budgetRange: "Rs. 20,000 - Rs. 30,000",
        foodPreferences: "Non-Vegetarian",
      },
      
    ]);
  
    const handleDelete = (eventToDelete) => {
      setEvents(events.filter((event) => event !== eventToDelete));
    };
  
    const handleYes = (eventToYes) => {
      // Handle the 'Yes' action logic here
      console.log("Yes action for", eventToYes);
    };
  
    const handleNo = (eventToNo) => {
      // Handle the 'No' action logic here
      console.log("No action for", eventToNo);
    };
  
    return (
      <div>
        <Card className="shadow-sm shadow-primary">
          <CardHeader className="w-full flex flex-row justify-between items-center">
            <CardTitle>Event Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Occasion</TableHead>
                  <TableHead>From Date Time</TableHead>
                  <TableHead>To Date Time</TableHead>
                  <TableHead>Number of Guests</TableHead>
                  <TableHead>Contact Number</TableHead>
                  <TableHead>Budget Range</TableHead>
                  <TableHead>Food Preferences</TableHead>
                  <TableHead className="flex justify-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {events.map((event, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{event.occasion}</TableCell>
                    <TableCell>{event.fromDateTime}</TableCell>
                    <TableCell>{event.toDateTime}</TableCell>
                    <TableCell>{event.numberOfGuests}</TableCell>
                    <TableCell>{event.contactNumber}</TableCell>
                    <TableCell>{event.budgetRange}</TableCell>
                    <TableCell>{event.foodPreferences}</TableCell>
                    <TableCell>
                      <span className="w-full h-full flex justify-center items-center gap-3">
                        <Check
                          className="h-8 w-8 p-1 text-green-500 cursor-pointer hover:bg-green-500 hover:text-background rounded-md"
                          onClick={() => handleYes(event)}
                        />
                        <X
                          className="h-8 w-8 p-1 text-yellow-500 cursor-pointer hover:bg-yellow-500 hover:text-background rounded-md"
                          onClick={() => handleNo(event)}
                        />
                        <TrashIcon
                          className="h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md"
                          onClick={() => handleDelete(event)}
                        />
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    );
  };
  
  export default Manager;
  