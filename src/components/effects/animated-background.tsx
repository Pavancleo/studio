"use client";

import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-background">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <style jsx>{`
        .area {
          width: 100%;
          height: 100%;
        }
        .circles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          margin: 0;
          padding: 0;
        }
        .circles li {
          position: absolute;
          display: block;
          list-style: none;
          width: 20px;
          height: 20px;
          background: hsl(var(--primary) / 0.4);
          animation: animate 25s linear infinite;
          bottom: -150px;
        }
        .circles li:nth-child(1) {
          left: 25%;
          width: 80px;
          height: 80px;
          animation-delay: 0s;
          background-color: hsl(var(--chart-1) / 0.5);
        }
        .circles li:nth-child(2) {
          left: 10%;
          width: 20px;
          height: 20px;
          animation-delay: 2s;
          animation-duration: 12s;
          background-color: hsl(var(--chart-2) / 0.5);
        }
        .circles li:nth-child(3) {
          left: 70%;
          width: 20px;
          height: 20px;
          animation-delay: 4s;
          background-color: hsl(var(--chart-3) / 0.5);
        }
        .circles li:nth-child(4) {
          left: 40%;
          width: 60px;
          height: 60px;
          animation-delay: 0s;
          animation-duration: 18s;
          background-color: hsl(var(--chart-4) / 0.5);
        }
        .circles li:nth-child(5) {
          left: 65%;
          width: 20px;
          height: 20px;
          animation-delay: 0s;
          background-color: hsl(var(--chart-5) / 0.5);
        }
        .circles li:nth-child(6) {
          left: 75%;
          width: 110px;
          height: 110px;
          animation-delay: 3s;
          background-color: hsl(var(--chart-1) / 0.4);
        }
        .circles li:nth-child(7) {
          left: 35%;
          width: 150px;
          height: 150px;
          animation-delay: 7s;
          background-color: hsl(var(--chart-3) / 0.5);
        }
        .circles li:nth-child(8) {
          left: 50%;
          width: 25px;
          height: 25px;
          animation-delay: 15s;
          animation-duration: 45s;
          background-color: hsl(var(--chart-2) / 0.45);
        }
        .circles li:nth-child(9) {
          left: 20%;
          width: 15px;
          height: 15px;
          animation-delay: 2s;
          animation-duration: 35s;
          background-color: hsl(var(--chart-4) / 0.55);
        }
        .circles li:nth-child(10) {
          left: 85%;
          width: 150px;
          height: 150px;
          animation-delay: 0s;
          animation-duration: 11s;
          background-color: hsl(var(--chart-5) / 0.4);
        }
        .circles li:nth-child(11) {
          left: 5%;
          width: 40px;
          height: 40px;
          animation-delay: 5s;
          animation-duration: 20s;
          background-color: hsl(var(--chart-1) / 0.5);
        }
        .circles li:nth-child(12) {
          left: 15%;
          width: 70px;
          height: 70px;
          animation-delay: 8s;
          background-color: hsl(var(--chart-2) / 0.5);
        }
        .circles li:nth-child(13) {
          left: 45%;
          width: 30px;
          height: 30px;
          animation-delay: 6s;
          animation-duration: 30s;
          background-color: hsl(var(--chart-3) / 0.5);
        }
        .circles li:nth-child(14) {
          left: 55%;
          width: 90px;
          height: 90px;
          animation-delay: 10s;
          background-color: hsl(var(--chart-4) / 0.5);
        }
        .circles li:nth-child(15) {
          left: 80%;
          width: 25px;
          height: 25px;
          animation-delay: 12s;
          animation-duration: 22s;
          background-color: hsl(var(--chart-5) / 0.5);
        }
        .circles li:nth-child(16) {
          left: 60%;
          width: 120px;
          height: 120px;
          animation-delay: 9s;
          background-color: hsl(var(--chart-1) / 0.45);
        }
        .circles li:nth-child(17) {
          left: 30%;
          width: 50px;
          height: 50px;
          animation-delay: 1s;
          animation-duration: 28s;
          background-color: hsl(var(--chart-2) / 0.4);
        }
        .circles li:nth-child(18) {
          left: 90%;
          width: 20px;
          height: 20px;
          animation-delay: 14s;
          background-color: hsl(var(--chart-3) / 0.5);
        }
        .circles li:nth-child(19) {
          left: 2%;
          width: 100px;
          height: 100px;
          animation-delay: 6s;
          animation-duration: 15s;
          background-color: hsl(var(--chart-4) / 0.45);
        }
        .circles li:nth-child(20) {
          left: 95%;
          width: 35px;
          height: 35px;
          animation-delay: 3s;
          background-color: hsl(var(--chart-5) / 0.4);
        }
        @keyframes animate {
          0%{
              transform: translateY(0) rotate(0deg);
              opacity: 1;
              border-radius: 0;
          }
          100%{
              transform: translateY(-1000px) rotate(720deg);
              opacity: 0;
              border-radius: 50%;
          }
        }
      `}</style>
    </div>
  );
}
