"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const cards = [
  { label: 'Wykopy', icon: (
    <Image
      src="/img/homepage/wykopy.png"
      alt="Earn card illustration"
      width={120}
      height={120}
      className="h-[140px] w-[140px] object-contain opacity-80 filter brightness-[.85] saturate-[.65] group-hover/item:brightness-[1.2] group-hover/item:saturate-100 transition-all duration-300 ease-in-out"
    />
  ), r: -15 },
  { label: 'Wiertnica', icon: (
    <Image
      src="/img/homepage/wiertnica.png"
      alt="Code card illustration"
      width={120}
      height={120}
      className="h-[150px] w-[150px] object-contain opacity-80 filter brightness-[.95] saturate-[.70] group-hover/item:brightness-[1.4] group-hover/item:saturate-100 transition-all duration-300 ease-in-out"
    />
  ), r: 5 },
  { label: 'Slupki', icon: (
    <Image
      src="/img/homepage/slupki.png"
      alt="Earn card illustration"
      width={120}
      height={120}
      className="h-[160px] w-[160px] object-contain opacity-80 filter brightness-[.85] saturate-[.65] group-hover/item:brightness-[1.2] group-hover/item:saturate-100 transition-all duration-300 ease-in-out"
    />
  ), r: 25 },
];

const Card = () => {
  const [activeMobileCard, setActiveMobileCard] = useState<string | null>(null);

  return (
    <div className="flex justify-center items-center relative sm:me-12 mt-6 md:mt-0">
      <div className="flex justify-center items-center relative group/fan">
        {cards.map((card, idx) => (
          <div
            key={card.label}
            data-text={card.label}
            onClick={() => {
              setActiveMobileCard(prev => prev === card.label ? null : card.label);
            }}
            className={`group/item relative w-44 h-44 sm:w-52 sm:h-52 bg-white/90 border border-white/10 shadow-lg cursor-pointer flex justify-center items-center transition-all duration-500 rounded-lg backdrop-blur-sm -mx-16 ${activeMobileCard === card.label ? 'z-20 scale-105 -translate-y-2 rotate-0' : `${card.label === 'Wiertnica' ? 'z-10' : 'z-0'} rotate-[var(--r)]`}  sm:group-hover/fan:rotate-0 sm:group-hover/fan:mx-[10px] ${card.label === 'Wiertnica' ? 'sm:z-10' : 'sm:z-0'}`}
            style={{
              '--r': `${card.r}deg`,
            } as React.CSSProperties}
          >
            {card.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
