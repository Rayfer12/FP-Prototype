import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

export default function ViewTicketsPage() {
  const tickets = [
    { id: 1, title: "Unable to login", status: "Open", description: "Cannot log into the account" },
    { id: 2, title: "Payment not processed", status: "Pending", description: "Payment issue during checkout" },
  ];

  // Color mapping for ticket statuses
  const statusColors = {
    Open: "bg-green-600",
    Pending: "bg-yellow-600",
    Closed: "bg-gray-600"
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-700 mb-8">My Tickets</h2>

        {/* Ticket Listing */}
        <div className="grid gap-6">
          {tickets.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-500">You have no tickets yet. Create one to get started!</p>
              <Link to="/create-ticket">
                <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md">
                  Create New Ticket
                </Button>
              </Link>
            </div>
          ) : (
            tickets.map((ticket) => (
              <Link to={`/ticket/${ticket.id}`} key={ticket.id}>
                <Card className="rounded-xl shadow-xl p-6 border border-gray-200">
                  <CardContent>
                    <h3 className="text-xl font-semibold">{ticket.title}</h3>
                    <p className={`text-white py-1 px-3 rounded-full ${statusColors[ticket.status]}`}>
                      {ticket.status}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))
          )}
        </div>

        <Link to="/">
          <Button className="mt-6 w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md">
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
