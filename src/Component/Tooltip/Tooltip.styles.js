

import styled from "styled-components";
import { CustomTooltip } from "./Tooltip";

export const Tooltip = styled(CustomTooltip)`
  .ant-tooltip-arrow {
    &::before {
      background-color: ${props => props.theme.Primary};  
    }
  }
  .ant-tooltip-inner {
    background-color: ${props => props.theme.Primary};
  }
`;