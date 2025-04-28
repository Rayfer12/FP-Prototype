import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const TicketDetailPage = () => {
  const { id } = useParams();  // Get the ticket ID from the URL
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    // Mock API call or logic to fetch ticket details using the ticket id
    const fetchedTicket = {
      title: 'Sample Ticket Title',
      description: 'Detailed description of the ticket.',
      priority: 'High',
    };
    
    // Set the fetched ticket details
    setTicket(fetchedTicket);
  }, [id]);

  if (!ticket) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-green-700 mb-4">{ticket.title}</h1>
        <p className="text-lg text-gray-700 mb-6">{ticket.description}</p>
        <p className="text-lg text-gray-500 mb-6">Priority: {ticket.priority}</p>
        
        {/* Back to Dashboard Button */}
        <div className="text-center">
          <Link to="/dashboard">
            <button className="py-2 px-4 bg-gray-500 hover:bg-gray-600 text-white rounded-md transition-all">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TicketDetailPage;
