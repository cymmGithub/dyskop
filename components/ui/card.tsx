import React from 'react';
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
  return (
    <div className="flex justify-center items-center relative me-12">
      <div className="flex justify-center items-center relative group/fan">
        {cards.map((card, idx) => (
          <div
            key={card.label}
            data-text={card.label}
            className={`group/item relative w-52 h-52 bg-white/90 border border-white/10 shadow-lg cursor-pointer flex justify-center items-center transition-all duration-500 rounded-lg mx-[-50px] backdrop-blur-md rotate-[var(--r)] group-hover/fan:rotate-0 group-hover/fan:mx-[10px] ${card.label === 'Wiertnica' ? 'z-10' : 'z-0'}`}
            style={{
              // @ts-ignore
              '--r': `${card.r}deg`,
            } as React.CSSProperties}
          >
            {card.icon}
            <span className="absolute bottom-0 w-full h-10 bg-white/5 flex justify-center items-center text-white text-base font-semibold pointer-events-none select-none">
              {card.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
