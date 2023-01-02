import { HeaderRight, HeaderStyle, HeaderInnerStyle,MenuStyle } from "./Header.styles";
import { Link } from "react-router-dom";
import { Select } from "../Select/Select";
import { Logo } from "../Icon/index";
import {Container} from "./../Container/Container"
const items = [
  {
    label: <Link to="/">Home</Link>,
    key: "mail",
  },
  {
    label: <Link to="/about">About</Link>,
    key: "app",
  },
];

const Header = (props) => {
  console.log(props.themevalue);
  return (
    <HeaderStyle>
      <Container>
        <HeaderInnerStyle>
        <Link className="logoBlock" to="/">
          <Logo />
        </Link>
        <MenuStyle mode="horizontal" items={items} />
        <HeaderRight>
          <Select
            defaultValue={props.themevalue}
            value={props.themevalue}
            style={{ width: 120 }}
            onChange={props.themeChange}
            options={[
              {
                value: "lightmode",
                label: "Light Theme",
              },
              {
                value: "darkmode",
                label: "Dark Theme",
              },
            ]}
          />
        </HeaderRight>
        </HeaderInnerStyle>  
      </Container>
    </HeaderStyle>
  );
};

export default Header;
