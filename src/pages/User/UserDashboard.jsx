import React,{useEffect, useState} from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  import { getBooking, getHalls } from '../../service/api'

import { DollarSign, ShoppingBag, User, Users } from 'lucide-react'
const UserDashboard = () => {

  const[invoices,setInvoices]=useState([]);
  
  useEffect(()=>{
    const fetchBooking=async()=>{
      try{
        const response=await getBooking();
        setInvoices(response.data);
      }catch(error){
        console.error("Error fetching user booking:",error);
      }
    };
    fetchBooking();
  },[]);

    return (
        <div>
        <div className="flex flex-row p-4 gap-4">
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Halls booked
                    </CardTitle>
                    <Users className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">1</div>
                </CardContent>
            </Card>
           
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Bookings amount
                    </CardTitle>
                    <ShoppingBag className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">3000</div>
                </CardContent>
            </Card>

        </div>
            <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Halls Booked</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
             
                <TableHead>Hall Name</TableHead>
                <TableHead>Occasion</TableHead>
                <TableHead >Status</TableHead>
              
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                
                  <TableCell>{invoice.id}</TableCell>
                  <TableCell>{invoice.occasion}</TableCell>
                  <TableCell >{invoice.bookingStatus}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
         
        </div>
    )
}

export default UserDashboard