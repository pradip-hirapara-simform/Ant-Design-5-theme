 
import { ButtonStyle } from "./Button.style";

export function Button(props) {
  const { children,   ...others } = props;
  return ( 
      <ButtonStyle   {...others} >{children}</ButtonStyle> 
  );
}
