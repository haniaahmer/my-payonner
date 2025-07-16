import React, { useState, useEffect } from 'react';

const Global = () => {
  const [balls, setBalls] = useState([]);

  // Initialize balls with random positions and velocities
  useEffect(() => {
    const initialBalls = [
      {
        id: 1,
        x: 20,
        y: 60,
        vx: 0.5,
        vy: 0.3,
        size: 80,
        color: 'bg-blue-200',
        opacity: 0.6
      },
      {
        id: 2,
        x: 80,
        y: 20,
        vx: -0.3,
        vy: 0.4,
        size: 60,
        color: 'bg-purple-200',
        opacity: 0.5
      },
      {
        id: 3,
        x: 70,
        y: 80,
        vx: -0.4,
        vy: -0.2,
        size: 40,
        color: 'bg-pink-200',
        opacity: 0.7
      },
      {
        id: 4,
        x: 30,
        y: 30,
        vx: 0.2,
        vy: 0.5,
        size: 50,
        color: 'bg-green-900',
        opacity: 0.4
      },
      {
        id: 5,
        x: 90,
        y: 70,
        vx: -0.6,
        vy: -0.3,
        size: 35,
        color: 'bg-orange-900',
        opacity: 0.6
      },
      {
        id: 6,
        x: 15,
        y: 85,
        vx: 0.4,
        vy: -0.4,
        size: 45,
        color: 'bg-teal-800',
        opacity: 0.5
      }
    ];
    setBalls(initialBalls);
  }, []);

  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setBalls(prevBalls => 
        prevBalls.map(ball => {
          let newX = ball.x + ball.vx;
          let newY = ball.y + ball.vy;
          let newVx = ball.vx;
          let newVy = ball.vy;

          // Bounce off walls
          if (newX <= 0 || newX >= 100) {
            newVx = -newVx;
            newX = Math.max(0, Math.min(100, newX));
          }
          if (newY <= 0 || newY >= 100) {
            newVy = -newVy;
            newY = Math.max(0, Math.min(100, newY));
          }

          return {
            ...ball,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto px-20 py-20 bg-gradient-to-br from-gray-500 via-pink-100 to-blue-100 overflow-hidden">
      {/* Animated Background Balls */}
      {balls.map(ball => (
        <div
          key={ball.id}
          className={`absolute rounded-full ${ball.color} blur-sm transition-all duration-75 ease-linear`}
          style={{
            left: `${ball.x}%`,
            top: `${ball.y}%`,
            width: `${ball.size}px`,
            height: `${ball.size}px`,
            opacity: ball.opacity,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8 max-w-md md:max-w-lg lg:max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            Go global
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            We support payments in 190+ countries and territories and handle 70
            currencies - that's a lot more than many other payment providers. Explore our
            globe to discover all the services we offer businesses around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Global;