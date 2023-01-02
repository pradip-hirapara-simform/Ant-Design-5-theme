import { ContainerStyle } from "./Container.styles"

 
export function Container(props) {
    const {children} = props
    return (
        <ContainerStyle>{children}</ContainerStyle>
    )
}