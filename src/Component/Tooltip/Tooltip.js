import { Tooltip } from "antd";


export function CustomTooltip({ className, children, ...restProps }) {
  return (
  <Tooltip overlayClassName={className} {...restProps}> 
      {children}
  </Tooltip>
  );
}
  