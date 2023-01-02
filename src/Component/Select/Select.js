
import { SelectStyle } from "./Select.styles";


export function Select(props) {
  const {children, ...cardprop} = props
  return (
    <SelectStyle  {...cardprop} />
  );
}
  