import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import React, { useEffect, useState } from "react";
  import { Button } from "@/components/ui/button";
  import { Check, X, TrashIcon } from "lucide-react";
  import { getBooking } from "../../service/api";
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  
  const Manager = () => {
    const [events, setEvents] = useState([]);

    const handleYes = (eventToYes) => {
      console.log("Yes action for", eventToYes);
    };
  
    const handleNo = (eventToNo) => {
     
      console.log("No action for", eventToNo);
    };

    useEffect(()=>{
      const fetchBooking=async()=>{
        try{
          const response=await getBooking();
          setEvents(response.data);
        }
        catch(error){
          console.error('Error fetchching booking',error);
        }
      };
      fetchBooking();
    },[]);
  
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
                  <TableHead>From Date</TableHead>
                  <TableHead>To Date</TableHead>
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
                    <TableCell>{event.fromdate}</TableCell>
                    <TableCell>{event.todate}</TableCell>
                    <TableCell>{event.guest}</TableCell>
                    <TableCell>{event.contact}</TableCell>
                    <TableCell>{event.budget}</TableCell>
                    <TableCell>{event.food}</TableCell>
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
  