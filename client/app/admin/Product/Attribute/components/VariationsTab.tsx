"use client";

import React, { useState } from 'react';
import SaveButton from './SaveButton';

const VariationsTab = () => {
  const [variations, setVariations] = useState({
    color: { values: ['White'], newValue: '' },
    sizes: { values: [], newValue: '' },
    example: { values: [], newValue: '' }
  });

  const addVariation = (type: keyof typeof variations) => {
    const currentVariation = variations[type];
    if (currentVariation.newValue.trim()) {
      setVariations({
        ...variations,
        [type]: {
          ...currentVariation,
          values: [...currentVariation.values, currentVariation.newValue],
          newValue: ''
        }
      });
    }
  };

  const removeVariation = (type: keyof typeof variations, value: string) => {
    setVariations({
      ...variations,
      [type]: {
        ...variations[type],
        values: variations[type].values.filter(v => v !== value)
      }
    });
  };

  const updateNewValue = (type: keyof typeof variations, value: string) => {
    setVariations({
      ...variations,
      [type]: {
        ...variations[type],
        newValue: value
      }
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#E5E5E5]">Variations</h2>

      <div className="space-y-6">
        {/* Color Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="block text-lg font-medium text-white">Color</label>
            <button
              onClick={() => addVariation('color')}
              className="bg-[#028EFC] text-white px-3  rounded-md hover:bg-blue-600 transition-colors"
            >
              Add
            </button>
          </div>
          <input
            type="text"
            placeholder="Enter Variation"
            value={variations.color.newValue}
            onChange={(e) => updateNewValue('color', e.target.value)}
            className="w-full px-4 py-2 border border-[#172D6D] rounded-xl text-white placeholder-gray-400 bg-transparent focus:outline-none focus:border-[#3B82F6] transition-colors"
          />
          {variations.color.values.map((value, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-white">{value}</span>
              <button
                onClick={() => removeVariation('color', value)}
                className="text-red-500 text-sm hover:text-red-400 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Sizes Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="block text-lg font-medium text-white">Sizes</label>
            <button
              onClick={() => addVariation('sizes')}
              className="bg-[#028EFC] text-white px-3 rounded-md hover:bg-blue-600 transition-colors"
            >
              Add
            </button>
          </div>
          <input
            type="text"
            placeholder="Enter Variation"
            value={variations.sizes.newValue}
            onChange={(e) => updateNewValue('sizes', e.target.value)}
            className="w-full px-4 py-2 border border-[#172D6D] rounded-xl text-white placeholder-gray-400 bg-transparent focus:outline-none focus:border-[#3B82F6] transition-colors"
          />
          {variations.sizes.values.map((value, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-white">{value}</span>
              <button
                onClick={() => removeVariation('sizes', value)}
                className="text-red-500 text-sm hover:text-red-400 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Example Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="block text-lg font-medium text-white">Example</label>
            <button
              onClick={() => addVariation('example')}
              className="bg-[#028EFC] text-white px-3 rounded-md hover:bg-blue-600 transition-colors"
            >
              Add
            </button>
          </div>
          <input
            type="text"
            placeholder="Enter Variation"
            value={variations.example.newValue}
            onChange={(e) => updateNewValue('example', e.target.value)}
            className="w-full px-4 py-2 border border-[#172D6D] rounded-xl text-white placeholder-gray-400 bg-transparent focus:outline-none focus:border-[#3B82F6] transition-colors"
          />
          {variations.example.values.map((value, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-white">{value}</span>
              <button
                onClick={() => removeVariation('example', value)}
                className="text-red-500 text-sm hover:text-red-400 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Save Changes Button */}
      <div className="flex justify-end pt-6">
        <SaveButton identifier="save-variations-btn" buttonText="Save Changes" />
      </div>
    </div>
  );
};

export default VariationsTab;
