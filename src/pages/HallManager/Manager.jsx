import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import { gethallforowners } from "../../service/api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { approveBooking,denyBooking } from "../../service/api";

const Manager = () => {
    
  const [events, setEvents] = useState([]);

  const handleYes = async (eventToYes) => {
    try {
      const response = await approveBooking(eventToYes.id); // Assuming `id` is the identifier for the booking
      console.log("Booking approved:", response.data);
      // Optionally update the UI to reflect the approval status
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === eventToYes.id ? { ...event, bookingStatus: "Approved" } : event
        )
      );
    } catch (error) {
      console.error("Error approving booking:", error);
    }
  };

  const handleNo = async (eventToNo) => {
    try {
      const response = await denyBooking(eventToNo.id); // Assuming `id` is the identifier for the booking
      console.log("Booking denied:", response.data);
      // Optionally update the UI to reflect the denial status
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === eventToNo.id ? { ...event, bookingStatus: "Denied" } : event
        )
      );
    } catch (error) {
      console.error("Error denying booking:", error);
    }
  };

  useEffect(()=>{
      const fetchBooking=async()=>{
        try{
          const response=await gethallforowners();
          setEvents(response.data);
          console.log(response.data);
          
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
                              <TableHead>Status</TableHead>
                              <TableHead>Actions</TableHead>
                          </TableRow>
                      </TableHeader>
                      <TableBody>
                          {events.map((event) => (
                              <TableRow key={event.index}>
                                  <TableCell className="font-medium">{event.occasion}</TableCell>
                                  <TableCell>{event.fromdate}</TableCell>
                                  <TableCell>{event.todate}</TableCell>
                                  <TableCell>{event.guest}</TableCell>
                                  <TableCell>{event.contact}</TableCell>
                                  <TableCell>{event.budget}</TableCell>
                                  <TableCell>{event.food}</TableCell>
                                  <TableCell>{event.bookingStatus}</TableCell> {/* Display status */}
                                  <TableCell>
                                      <span className="w-full h-full flex justify-center items-center gap-3">
                                          <Check
                                              className="h-8 w-8 p-1 text-green-500 cursor-pointer hover:bg-green-500 hover:text-background rounded-md"
                                              onClick={() => handleYes(event)}
                                          />
                                          <X
                                              className="h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md"
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
