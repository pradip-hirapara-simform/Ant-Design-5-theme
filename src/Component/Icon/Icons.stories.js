import React from "react";
import * as Icons from ".";

export default {
  title: "Icons/Icons",
  component: Icons,
  argTypes: { 
    color: {
    control: {type: 'color' }
    }, 
  },
};

// export const AllIcons = (args) => (
//   <div className='icons' style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
//     {Object.values(IconList).map((Icon, i) => (
//       <Icon key={i} {...args} />
//     ))}
//   </div>
// );


export const AllIcons = (args) => {
  const icons = Object.values(Icons);
  return (
    <div className="icons" style={{ display: "flex", flexWrap: "wrap", gap: "20px",  }}>
      {icons.map(IconComponent => (
        <div style={{ display: "flex", flexDirection: "column", alignItems: 'center', gap: 10, fontSize: args.size, color: args.color }}>
            <IconComponent /> 
            <span style={{fontSize: 14}}>{IconComponent.name}</span>
        </div>
      ))}
    </div>
  );
};
AllIcons.args = {  
    size: 24,
    color: '#000',
  };