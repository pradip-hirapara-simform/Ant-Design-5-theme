
import { CardStyle } from "./Card.style";


export function Card(props) {
  const {children, ...cardprop} = props
  return (
  <CardStyle {...cardprop}> 
      {children}
  </CardStyle>
  );
}
  