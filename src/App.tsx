// src/App.js
import React, { useState } from 'react';
import Chat from './components/Chat';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-800">Belcorp</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Subdivisions */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800">Subdivision 1</h2>
            <p className="text-gray-600 mt-2">
              Description of subdivision 1.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800">Subdivision 2</h2>
            <p className="text-gray-600 mt-2">
              Description of subdivision 2.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800">Subdivision 3</h2>
            <p className="text-gray-600 mt-2">
              Description of subdivision 3.
            </p>
          </div>
        </section>

        {/* Chat Button */}
        <div className="fixed bottom-8 right-8">
          <button
            onClick={toggleChat}
            className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-500 focus:outline-none"
          >
            {isChatOpen ? 'Close Chat' : 'Open Chat'}
          </button>
        </div>

        {/* Chat Component */}
        {isChatOpen && <Chat />}
      </main>
    </div>
  );
}

export default App;

