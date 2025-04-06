"use client";
import React from "react";
import Navbar from "./Navbar";
import DiscussionCard from "./pages/dashboard/DiscussionCard";
import TrendingItem from "./pages/dashboard/TrendingItem";
import TabNavigation from "./pages/dashboard/TabNavigation";
import "./dashboard.css"; 
import ChatBot from "./pages/Chatbot";

export default function Dashboard() {
  return (
    <div style={{ overflowX: "hidden", overflowY: "auto", width: "100vw", height: "100vh" }}>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-left">
          <DiscussionCard />
          <TabNavigation />
        </div>
        <div className="dashboard-right">
          <TrendingItem />
        </div>
        <ChatBot />
      </div>
    </div>
  );
}