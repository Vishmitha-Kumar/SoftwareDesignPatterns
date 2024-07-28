import React from 'react'
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

import { DollarSign, ShoppingBag, User, Users } from 'lucide-react'
const UserDashboard = () => {



    const invoices = [
        {
          invoice: "INV001",
          hall:"JK Mahal",
          totalAmount: "Rs.1500.00",
          functionType: "Birthday Party",
        },
        {
          invoice: "INV002",
         hall: "JK Mahal",
          totalAmount: "Rs.15000.00",
          functionType: "Engagement",
        },
        {
          invoice: "INV003",
         hall: "SVS Marriage hall",
          totalAmount: "Rs.24500.00",
          functionType: "Wedding",
        },
       
    ]
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
                    <div className="text-2xl font-bold">3</div>
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
                    <div className="text-2xl font-bold">41,000</div>
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
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Hall Type</TableHead>
                <TableHead>Amount Paid</TableHead>
                <TableHead >Function</TableHead>
              
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">{invoice.invoice}</TableCell>
                  <TableCell>{invoice.hall}</TableCell>
                  <TableCell>{invoice.totalAmount}</TableCell>
                  <TableCell >{invoice.functionType}</TableCell>
                  
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