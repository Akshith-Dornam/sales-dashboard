'use client';
import React from 'react';

type Props = {
  year: number;
  setYear: (year: number) => void;
};

const YearFilter = ({ year, setYear }: Props) => (
  <select className="border p-2 rounded" value={year} onChange={(e) => setYear(Number(e.target.value))}>
    {[2022, 2023, 2024].map((yr) => (
      <option key={yr} value={yr}>
        {yr}
      </option>
    ))}
  </select>
);

export default YearFilter;