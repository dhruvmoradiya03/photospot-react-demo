"use client";

import { useRouter } from "next/navigation";

const Landing = () => {
  const router = useRouter();

  return (
    <>
      <div className="min-h-screen flex flex-col space-y-10 items-center justify-center bg-yellow-100">
        <h1 className="text-5xl font-bold mb-6 text-yellow-800">
          Welcome to PhotoSpot
        </h1>
        <div className="space-y-4 space-x-10">
          <a
            href="https://photospot.us/photo-spots-feed"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-5 bg-yellow-500 text-white text-xl font-semibold rounded-md shadow hover:bg-yellow-600 transition"
          >
            Explore Photo Spots
          </a>
          <a
            href="https://photospot.us/ai-travel-planner"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-5 bg-yellow-500 text-white text-xl font-semibold rounded-md shadow hover:bg-yellow-600 transition"
          >
            AI Travel Planner
          </a>
          <a
            href="https://photospot.us/tripInfo/SkEloiwnBaS7IKpHW0gY-new-york-itinerary"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-5 bg-yellow-500 text-white text-xl font-semibold rounded-md shadow hover:bg-yellow-600 transition"
          >
            New York Itinerary
          </a>
        </div>
      </div>
    </>
  );
};

export default Landing;
