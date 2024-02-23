function MenuListComponent(props) {
  return (
    <div key={props.key} className="flex flex-row mb-3">
      <img src={props.value.icon} className="max-w-10 max-h-10 mr-3"></img>
      <p className="self-center inter-regular">{props.value.name}</p>
    </div>
  );
}

export default MenuListComponent;
