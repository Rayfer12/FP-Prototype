import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { motion } from "framer-motion";


export default function UserDashboard() {
  const tickets = [
    {
      id: 1,
      subject: "Unable to Login",
      status: "Open",
      description: "I am unable to login to my account. Every time I try, I get an error message.",
      priority: "High",
    },
    {
      id: 2,
      subject: "Payment Not Processed",
      status: "Pending",
      description: "I made a payment, but it hasn't been processed yet. It's been two days.",
      priority: "Medium",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-green-700 mb-8">User Dashboard</h1>

        {/* Filters Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">My Tickets</h2>
          <div className="flex gap-4">
            <select className="p-3 border border-gray-300 rounded-md">
              <option value="all">All Tickets</option>
              <option value="open">Open</option>
              <option value="pending">Pending</option>
              <option value="closed">Closed</option>
            </select>
            <select className="p-3 border border-gray-300 rounded-md">
              <option value="date">Sort by Date</option>
              <option value="priority">Sort by Priority</option>
            </select>
          </div>
        </div>

        {/* Tickets Section */}
        <div className="grid gap-6 mb-8">
          {tickets.map((ticket) => (
            <Link key={ticket.id} to={`/ticket/${ticket.id}`}>
              <Card className="rounded-xl shadow-lg p-6 border border-gray-200 cursor-pointer">
                <CardContent>
                  <h3 className="text-xl font-semibold">{ticket.subject}</h3>
                  <p className="text-gray-600">Status: <span className={`bg-${ticket.status === 'Open' ? 'green' : ticket.status === 'Pending' ? 'yellow' : 'gray'}-600 text-white px-2 py-1 rounded-full`}>{ticket.status}</span></p>
                </CardContent>
              </Card>
            </Link>
          ))}
          {/* No Tickets Found Message */}
          {tickets.length === 0 && (
            <div className="text-center text-gray-600">
              <p>You have no tickets yet. Create one to get started!</p>
            </div>
          )}
        </div>

        {/* Create New Ticket Button */}
        <div className="flex justify-center mt-8">
          <Link to="/create-ticket">
            <Button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md transition-all">
              Create New Ticket
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
