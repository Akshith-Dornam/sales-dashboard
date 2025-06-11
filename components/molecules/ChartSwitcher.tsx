'use client';
import React from 'react';

type Props = {
  type: string;
  setType: (type: string) => void;
};

const ChartSwitcher = ({ type, setType }: Props) => (
  <div className="flex gap-2">
    {['Bar', 'Line', 'Pie'].map((t) => (
      <button
        key={t}
        onClick={() => setType(t)}
        className={`px-3 py-1 rounded${type === t ? ' bg-blue-500 text-white' : ' bg-gray-200'}`}
       >
        {t}
      </button>
    ))}
  </div>
);

export default ChartSwitcher;