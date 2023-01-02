
import { Card } from "antd";
import styled from "styled-components";

export const CardStyle = styled(Card)`
    display: block;  
    &.ant-card-hoverable {
        border: 1px solid ${props => props.theme.GrayBorderColor};
        &:hover {
            border: 1px solid ${props => props.theme.GrayBorderColor};
        }
    }
`