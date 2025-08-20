import React from 'react';

interface ProfileSidebarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ 
  activeTab = 'profile', 
  onTabChange 
}) => {
  const menuItems = [
    { id: 'profile', label: 'Profile' },
  ];

  const handleTabClick = (tabId: string) => {
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <div className="w-full lg:w-80 bg-[#0000004D]/30 backdrop-blur-[500px] border border-[#172D6D]  rounded-2xl p-6">
      <h2 className="text-[26px] font-bold text-[#E5E5E5] mb-6">Account Settings</h2>
      <div className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleTabClick(item.id)}
                         className={`w-full text-left px-4 py-1 rounded-lg text-[24px] transition-all ${
               activeTab === item.id
                 ? 'bg-[#028EFC] text-[#E5E5E5]'
                 : 'text-[#AEB9E1] hover:bg-[#1E2A45]/80 hover:text-white'
             }`}
           >
             {item.label}
           </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileSidebar;
