'use client';
import React, { useState } from 'react';
import { salesData } from '@/data/mockSalesData';  // Ensure this import path is correct

import YearFilter from '../atoms/YearFilter';
import ChartSwitcher from '../molecules/ChartSwitcher';
import SalesChart from '../organisms/SalesChart';

const DashboardTemplate = () => {
  // Make sure year is a number type
  const [year, setYear] = useState<number>(2024);
  
  // Define the possible chart types ('Bar', 'Line', or 'Pie')
  const [type, setType] = useState<'Bar' | 'Line' | 'Pie'>('Bar');

  return (
    <div className="p-4 bg-black min-h-screen">
        
      <h1 className="bg-white rounded-2xl shadow-lg p-6 text-3xl font-bold text-black/800 mb-2 text-center">
        📊 Plumbing Sales Analytics (2022–2024)
      </h1>

      
      <p className="text-sm text-white -600 mb-6 text-center max-w-2xl mx-auto">
        This dashboard displays monthly sales performance data for the years 2022, 2023, and 2024. The data represents fictional sales values across 12 months, intended for visualization and practice purposes.
      </p>
      
    <div className="flex text-black gap-4 mb-4">
      <YearFilter year={year} setYear={setYear} />
      <ChartSwitcher
        type={type}
        setType={setType as (type: string) => void}
      />
    </div>

      {/* Ensure that we access the data correctly for the selected year */}
      <SalesChart data={salesData[year as keyof typeof salesData]} type={type} />
    </div>
  );
};

export default DashboardTemplate;
