'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Savebutton from './Savebutton'
function VariationPage() {
  const router = useRouter()
  const [isUploading, setIsUploading] = useState(false)
  const [variations, setVariations] = useState({
    color: ['White'],
    sizes: [],
    example: []
  })
  const [newVariations, setNewVariations] = useState({
    color: '',
    sizes: '',
    example: ''
  })

  const handleAddVariation = (type: 'color' | 'sizes' | 'example') => {
    const value = newVariations[type].trim()
    if (value) {
      setVariations(prev => ({
        ...prev,
        [type]: [...prev[type], value]
      }))
      setNewVariations(prev => ({
        ...prev,
        [type]: ''
      }))
    }
  }

  const handleRemoveVariation = (type: 'color' | 'sizes' | 'example', index: number) => {
    setVariations(prev => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index)
    }))
  }

  const handleNavigation = (tab: string) => {
    if (tab === 'attributes') {
      router.push('/admin/Product/Attribute')
    }
  }

  return (
    <div className="min-h-screen  p-6">
      {/* Header */}
      <div className="mb-6">
       
      </div>

      <div className="flex gap-6">
        {/* Left Panel - Navigation */}
        <div className="w-64 border border-[#172D6D] bg-black/30 backdrop-blur-[500px] rounded-lg p-4 ">
          <div className="space-y-2">
            <button
              onClick={() => handleNavigation('attributes')}
              className="w-full text-left px-4 py-2 text-[24px] rounded-md transition-all  text-white "
            >
              Attributes
            </button>
            <button
              className="w-full text-left px-4 py-2 text-[24px] rounded-md transition-all bg-gradient-to-r from-[#028EFC] to-[#028EFC] text-white"
            >
              Variations
            </button>
          </div>
        </div>

        {/* Right Panel - Content */}
        <div className="flex-1  border border-[#172D6D] bg-black/30 backdrop-blur-[500px] rounded-lg p-6 ">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[24px]  text-white">Variations</h2>
          </div>

          <div className="space-y-6">
            {/* Color Section */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-white font-semibold text-[24px]">Color</h3>
                <Button 
                  onClick={() => handleAddVariation('color')}
                  className="bg-[#028EFC] text-[#E5E5E5] text-sm px-3 py-1"
                >
                  Add
                </Button>
              </div>
              {variations.color.map((color, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-white text-[20px] ">{color}</span>
                  <button
                    onClick={() => handleRemoveVariation('color', index)}
                    className="text-red-400 hover:text-red-300 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <input
                type="text"
                placeholder="Enter Variation"
                value={newVariations.color}
                onChange={(e) => setNewVariations(prev => ({ ...prev, color: e.target.value }))}
                className="w-full px-3 py-1 placeholder:text-sm  border border-blue-400/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 "
              />
            </div>

            {/* Sizes Section */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-white font-semibold text-[24px]">Sizes</h3>
                <Button 
                  onClick={() => handleAddVariation('sizes')}
                  className="bg-[#028EFC] text-[#E5E5E5] text-sm px-3 py-1"
                >
                  Add
                </Button>
              </div>
              {variations.sizes.map((size, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-white">{size}</span>
                  <button
                    onClick={() => handleRemoveVariation('sizes', index)}
                    className="text-red-400 hover:text-red-300 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
              {/* <input
                type="text"
                placeholder="Enter Variation"
                value={newVariations.sizes}
                onChange={(e) => setNewVariations(prev => ({ ...prev, sizes: e.target.value }))}
                className="w-full px-3 py-2 bg-slate-700/50 border border-gray-400/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              /> */}
            </div>

            {/* Example Section */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-white font-semibold text-[24px]">Example</h3>
                <Button 
                  onClick={() => handleAddVariation('example')}
                  className="bg-[#028EFC] text-[#E5E5E5] text-sm px-3 py-1"
                >
                  Add
                </Button>
              </div>
              {variations.example.map((example, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-white">{example}</span>
                  <button
                    onClick={() => handleRemoveVariation('example', index)}
                    className="text-red-400 hover:text-red-300 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
              {/* <input
                type="text"
                placeholder="Enter Variation"
                value={newVariations.example}
                onChange={(e) => setNewVariations(prev => ({ ...prev, example: e.target.value }))}
                className="w-full px-3 py-2 bg-slate-700/50 border  rounded-md text-white placeholder-gray-40"
              /> */}
            </div>
          </div>

          <div className="mt-8 flex justify-end">
          <Savebutton 
                        identifier="gallery-upload" 
                        buttonText={isUploading ? 'Processing...' : 'Save Changes'} 
                        
                    />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VariationPage 