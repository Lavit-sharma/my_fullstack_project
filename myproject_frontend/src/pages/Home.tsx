import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-green-400 to-blue-500 p-6">
      <h1 className="text-4xl font-bold mb-8 text-white">Welcome to Our Service Platform</h1>
      <p className="text-white mb-8 max-w-lg text-center">
        We offer Web, Mobile App Development, and Digital Marketing services.
      </p>
      <div className="space-x-4">
        <Link to="/login" className="bg-white text-indigo-600 px-6 py-3 rounded font-semibold hover:bg-gray-200">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
