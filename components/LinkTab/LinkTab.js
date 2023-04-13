import { Link } from "react-scroll";
import { Tab } from "@mui/material";
const LinkTab = ({to, tabName, handleChange}) => {
  return ( 
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      <Tab 
        label={tabName}
        onClick={(event) => {
          event.preventDefault();
          handleChange();
        }}
      />
    </Link>
   );
}
 
export default LinkTab;