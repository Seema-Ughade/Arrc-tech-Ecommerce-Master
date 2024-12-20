import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ConversationDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [newMessage, setNewMessage] = useState('');
  const [messages] = useState([
    {
      id: 1,
      content: 'Hello Desc',
      sender: 'user',
      timestamp: '4 months ago',
      avatar: '/placeholder.svg'
    },
    {
      id: 2,
      content: 'asdfasdf',
      sender: 'admin',
      timestamp: '4 months ago',
      avatar: '/placeholder.svg'
    },
    {
      id: 3,
      content: 'asdfasd',
      sender: 'user',
      timestamp: '4 months ago',
      avatar: '/placeholder.svg'
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle reply submission
    console.log('New message:', newMessage);
    setNewMessage('');
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Conversation with User</h1>
          <button
            onClick={() => navigate('/admin/tickets')}
            className="bg-indigo-700 text-white px-4 py-2 rounded flex items-center"
          >
            <span className="mr-2">←</span> Back
          </button>
        </div>
        <div className="flex items-center text-gray-600 mt-2">
          <span>Dashboard</span>
          <span className="mx-2">{'>'}</span>
          <span>Messages</span>
          <span className="mx-2">{'>'}</span>
          <span>Conversations Details</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-4 max-w-2xl`}>
                <div className="flex flex-col items-center">
                  <img
                    src={message.avatar}
                    alt={message.sender}
                    className="w-12 h-12 rounded-full"
                  />
                  <button className="mt-2 text-sm bg-indigo-700 text-white px-3 py-1 rounded">
                    View Profile
                  </button>
                </div>
                <div className={`bg-gray-100 rounded-lg p-4 ${message.sender === 'user' ? 'mr-4' : 'ml-4'}`}>
                  <p className="mb-2">{message.content}</p>
                  <span className="text-sm text-gray-500">{message.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reply Form */}
        <div className="border-t p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Reply</label>
              <textarea
                rows={4}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="w-full border rounded px-3 py-2"
                placeholder="Type your message here..."
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-700 text-white px-6 py-2 rounded"
            >
              Send Reply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConversationDetails;

