import React from 'react';
import { FaLock, FaTv, FaCircle } from 'react-icons/fa';

const matches = [
  {
    game: "Redlands United - Ipswich FC / 03/08/2025 10:30:00",
    status: "live",
    odds: { '1': 7.91, x: 1.25, '2': 8.44 }
  },
  {
    game: "Sydney United 58 FC - St George FC / 03/08/2025 10:30:00",
    status: "live",
    odds: { '1': 11.72, x: 1.14, '2': 11.72 }
  },
  {
    game: "Balcatta W - UWA Nedlands W / 03/08/2025 12:30:00",
    status: "live",
    odds: { '1': null, x: 'locked', '2': 'locked' }
  },
  {
    game: "Balcatta W - UWA Nedlands W / 03/08/2025 12:30:00",
    status: "live",
    odds: { '1': null, x: 'locked', '2': 'locked' }
  },
  {
    game: "Balcatta W - UWA Nedlands W / 03/08/2025 12:30:00",
    status: "live",
    odds: { '1': null, x: 'locked', '2': 'locked' }
  },
  {
    game: "Balcatta W - UWA Nedlands W / 03/08/2025 12:30:00",
    status: "live",
    odds: { '1': null, x: 'locked', '2': 'locked' }
  },
  {
    game: "Balcatta W - UWA Nedlands W / 03/08/2025 12:30:00",
    status: "live",
    odds: { '1': null, x: 'locked', '2': 'locked' }
  },
  {
    game: "Balcatta W - UWA Nedlands W / 03/08/2025 12:30:00",
    status: "locked",
    odds: { '1': null, x: 'locked', '2': 'locked' }
  },
  {
    game: "Balcatta W - UWA Nedlands W / 03/08/2025 12:30:00",
    status: "locked",
    odds: { '1': null, x: 'locked', '2': 'locked' }
  },
  {
    game: "Sydney United 58 FC - St George FC / 03/08/2025 10:30:00",
    status: "tv",
    odds: { '1': 11.72, x: 1.14, '2': 11.72 }
  },
  {
    game: "Sydney United 58 FC - St George FC / 03/08/2025 10:30:00",
    status: "tv",
    odds: { '1': 11.72, x: 1.14, '2': 11.72 }
  },
];

const getStatusIcon = (status) => {
  if (status === "live") return <FaCircle className="text-green-500 text-xs" />;
  if (status === "tv") return <FaTv className="text-black text-sm" />;
  if (status === "locked") return <FaLock className="text-black text-sm" />;
  return null;
};

const renderOdds = (value) => {
  if (value === 'locked') {
    return (
      <div className="bg-gray-800 text-white text-sm flex items-center justify-center h-10 ">
        <FaLock />
      </div>
    );
  }

  if (value === null || value === '-') {
    return <div className="h-10 flex items-center justify-center">-</div>;
  }

  return (
    <div className="h-10 flex items-center justify-center bg-blue-200 text-sm font-semibold px-2 border-r border-white">
      {value}
    </div>
  );
};

const Data = () => {
  return (
    <div className="overflow-x-auto w-full mt-2">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200 text-sm">
          <tr>
            <th className="text-left px-2 py-2 font-bold text-sm border-r border-gray-400">Game</th>
            <th className="px-2 py-2 border-r border-gray-400 w-12"></th>
            <th className="px-2 py-2 border-r border-gray-400 w-16">1</th>
            <th className="px-2 py-2 border-r border-gray-400 w-16">X</th>
            <th className="px-2 py-2 w-16">2</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, idx) => (
            <tr key={idx} className="border-t border-gray-300">
              <td className="text-sm px-2 py-2">{match.game}</td>
              <td className="text-center">{getStatusIcon(match.status)}</td>
              <td>{renderOdds(match.odds['1'])}</td>
              <td>{renderOdds(match.odds['x'])}</td>
              <td>{renderOdds(match.odds['2'])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
