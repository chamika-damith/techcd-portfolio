
'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Savebutton from './Savebutton'
function AttributePage() {
  const router = useRouter()
  const [isUploading, setIsUploading] = useState(false)
  const [attributes, setAttributes] = useState(['Color'])
  const [newAttribute, setNewAttribute] = useState('')

  const handleAddAttribute = () => {
    if (newAttribute.trim()) {
      setAttributes([...attributes, newAttribute.trim()])
      setNewAttribute('')
    }
  }

  const handleRemoveAttribute = (index: number) => {
    setAttributes(attributes.filter((_, i) => i !== index))
  }

  const handleNavigation = (tab: string) => {
    if (tab === 'variations') {
      router.push('/admin/Product/Attribute/variation')
    }
  }

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
       
      </div>

      <div className="flex gap-6">
        {/* Left Panel - Navigation */}
        <div className="w-64 border border-[#172D6D] bg-black/30 backdrop-blur-[500px] rounded-lg p-4 ">
          <div className="space-y-2">
            <button
              className="w-full text-left px-4 py-2 text-[24px] rounded-md transition-all bg-gradient-to-r from-[#028EFC] to-[#028EFC] text-white"
            >
              Attributes
            </button>
            <button
              onClick={() => handleNavigation('variations')}
              className="w-full text-left px-4 py-2 rounded-md text-[24px]  transition-all text-white "
            >
              Variations
            </button>
          </div>
        </div>

        {/* Right Panel - Content */}
        <div className="flex-1  border border-[#172D6D] bg-black/30 backdrop-blur-[500px] rounded-lg p-6 ">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[24px]  text-white">Attributes</h2>
            <Button 
              onClick={handleAddAttribute}
              className="bg-[#028EFC] text-[#E5E5E5]"
            >
              Add
            </Button>
          </div>

          <div className="space-y-4">
            {attributes.map((attribute, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium text-[24px]">{attribute}</span>
                  <button
                    onClick={() => handleRemoveAttribute(index)}
                    className="text-red-400 hover:text-red-300 text-sm"
                  >
                    Remove
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Enter Attributes"
                  className="w-full px-3 py-1 placeholder:text-sm  border border-blue-400/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
              </div>
            ))}
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

export default AttributePage
