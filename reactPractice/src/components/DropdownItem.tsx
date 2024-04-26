function DropdownItem(props: any) {
  return (
    <li className="dropdownitem">
      <a href={props.url}> {props.text} </a>
    </li>
  );
}

export default DropdownItem;
