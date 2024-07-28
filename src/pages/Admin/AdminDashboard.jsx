import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { DollarSign, ShoppingBag, User, Users } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, Legend, XAxis } from "recharts"
 
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Tooltip } from '../../components/ui/tooltip'
const AdminDashboard = () => {
    const chartData = [
        { month: "January", newusers: 186, oldusers: 80 },
        { month: "February", newusers: 305, oldusers: 200 },
        { month: "March", newusers: 237, oldusers: 120 },
        { month: "April", newusers: 73, oldusers: 190 },
        { month: "May", newusers: 209, oldusers: 130 },
        { month: "June", newusers: 214, oldusers: 140 },
      ]
    return (
        <>
        <div className="flex flex-row p-4 gap-4">
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Users
                    </CardTitle>
                    <Users className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">10000</div>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Active Users
                    </CardTitle>
                    <Users className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">9999</div>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Bookings
                    </CardTitle>
                    <ShoppingBag className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">10,000</div>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Revenue
                    </CardTitle>
                    <DollarSign className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">10,000,00</div>
                </CardContent>
            </Card>
           
                </div>
            <div className="p-4">
        <BarChart
          width={600}
          height={300}
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
         
          <Legend />
          <Bar dataKey="newusers" fill="#614500" />
          <Bar dataKey="oldusers" fill="#82ca9d" />
        </BarChart>
           
        </div>
        </>
    )
}

export default AdminDashboard