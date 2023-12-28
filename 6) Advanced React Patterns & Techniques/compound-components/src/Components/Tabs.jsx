import React, { useState } from 'react'

const Tabs = ({children}) => {
    const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="tabs">
      <div className="tab-list">
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            isActive: index === activeTab,
            onClick: () => handleTabClick(index),
          })
        )}
      </div>
      <div className="tab-content">
        {React.Children.toArray(children)[activeTab].props.children}
      </div>
    </div>
  )
}

export default Tabs
