import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CreateTicketPage() {
  const [ticketDetails, setTicketDetails] = useState({
    subject: "",
    description: "",
    priority: "Medium",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicketDetails({
      ...ticketDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to submit the ticket (API call)
    alert("Ticket Created!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-semibold text-green-700 mb-12 text-center">Create a New Ticket</h1>

        <Card className="rounded-xl shadow-lg p-8 border border-gray-200">
          <CardContent>
            <form onSubmit={handleSubmit}>
              {/* Subject */}
              <div className="mb-6">
                <label htmlFor="subject" className="block text-lg font-medium text-gray-800 mb-2">
                  Ticket Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={ticketDetails.subject}
                  onChange={handleInputChange}
                  placeholder="Enter ticket subject"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  required
                />
              </div>

              {/* Description */}
              <div className="mb-6">
                <label htmlFor="description" className="block text-lg font-medium text-gray-800 mb-2">
                  Ticket Description
                </label>
                <Textarea
                  id="description"
                  name="description"
                  value={ticketDetails.description}
                  onChange={handleInputChange}
                  placeholder="Describe the issue or request"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  required
                />
              </div>

              {/* Priority */}
              <div className="mb-6">
                <label htmlFor="priority" className="block text-lg font-medium text-gray-800 mb-2">
                  Ticket Priority
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={ticketDetails.priority}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-md transition-all"
                >
                  Submit Ticket
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Link to="/dashboard">
            <Button className="py-2 px-4 bg-gray-500 hover:bg-gray-600 text-white rounded-md transition-all">
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
