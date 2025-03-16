import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No token found. Redirecting to login...");
        toast.error("Please login to access dashboard");
        navigate("/");
        return;
      }
      try {
        const res = await axios.get(
          "http://localhost:3500/functional/dashboard",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUser(res.data.user);
      } catch (error) {
        console.error("Error fetching dashboard:", error);
        navigate("/chatbot");
      }
    };
    fetchDashboard();
  }, [navigate]);
  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-teal-300">Dashboard Overview</h1>
        <Link
          to="/advices"
          className="p-3 bg-teal-500 rounded-lg hover:bg-teal-600 transition"
        >
          Get Financial Advice
        </Link>
      </div>

      {/* Financial Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-yellow-300">
            Total Balance
          </h2>
          <p className="text-3xl font-bold mt-2">$12,500</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-blue-300">
            Monthly Income
          </h2>
          <p className="text-2xl font-bold mt-2">$3,200</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-red-300">
            Monthly Expenses
          </h2>
          <p className="text-2xl font-bold mt-2">$2,400</p>
        </div>
      </div>

      {/* Recent Transactions Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-teal-300 mb-4">
          Recent Transactions
        </h2>
        <div className="bg-gray-800 p-4 rounded-lg">
          <ul className="space-y-4">
            <li className="flex justify-between border-b pb-2">
              <span>Amazon Purchase</span>
              <span className="text-red-400">- $120</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Freelance Income</span>
              <span className="text-green-400">+ $500</span>
            </li>
            <li className="flex justify-between">
              <span>Netflix Subscription</span>
              <span className="text-red-400">- $15</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Financial Insights Placeholder */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-yellow-300">
          Financial Insights
        </h2>
        <div className="bg-gray-800 p-6 rounded-lg mt-4 text-center">
          <p>📊 Charts and AI insights will be displayed here!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
