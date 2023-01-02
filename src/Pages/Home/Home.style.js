import styled from "styled-components";
import { lg } from "../../ThemeConfig/Variables";


export const BlogListSec = styled.section`
    padding: 0 0 100px;
`
export const BlogListHead = styled.div`
    h1 {
        font-size: 38px;
        line-height: 44px;
        color: ${props => props.theme.BlackTextColor};
        margin: 0 0 40px;
        text-align: center;
        ${lg(`
            font-size: 32px;
        `)}
    }
`