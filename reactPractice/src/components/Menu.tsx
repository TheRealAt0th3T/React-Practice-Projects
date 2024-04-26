import { useState } from "react";
import DropdownItem from "./DropdownItem";

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="menu-container">
      <div
        className="menu-trigger"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img src="src/assets/menu-icon.jpg"></img>
      </div>
      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        <ul>
          <DropdownItem
            url={"https://therealat0th3t.github.io/personal-portfolio/"}
            text={"My Portfolio"}
          ></DropdownItem>
          <DropdownItem
            url={"https://www.linkedin.com/in/amaratariq/"}
            text={"LinkedIn"}
          ></DropdownItem>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
