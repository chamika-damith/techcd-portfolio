"use client";

import React, { useState } from 'react';
import AttributesTab from './components/AttributesTab';
import VariationsTab from './components/VariationsTab';

function AttributePage() {
  const [activeTab, setActiveTab] = useState('attributes');

  const tabs = [
    { id: 'attributes', label: 'Attributes' },
    { id: 'variations', label: 'Variations' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'attributes':
        return <AttributesTab />;
      case 'variations':
        return <VariationsTab />;
      default:
        return <AttributesTab />;
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto container">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {/* Left Navigation Panel */}
          <div className="lg:col-span-2">
            <div className="bg-[#0000004D]/30 backdrop-blur-[50px] rounded-3xl p-6 border border-[#172D6D]">
             
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-2 rounded-md 2xl:text-[20px] text-[16px] transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-[#028EFC] text-white shadow-lg'
                        : 'text-[#E5E5E5]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Content Panel */}
          <div className="lg:col-span-4">
            <div className="bg-[#0000004D]/30 backdrop-blur-[50px] rounded-3xl p-8 border border-[#172D6D]">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttributePage;
