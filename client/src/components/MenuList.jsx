import MenuListComponent from "./MenuListComponent";

function MenuList(props) {
  return (
    <>
      {props.techs.map((value, index) => {
        return <MenuListComponent key={index} value={value} />;
      })}
    </>
  );
}

export default MenuList;
