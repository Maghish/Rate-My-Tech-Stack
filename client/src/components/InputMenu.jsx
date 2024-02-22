import { FaCaretUp } from "react-icons/fa";

function InputMenu(props) {
  return (
    <>
      <div className="w-[552px] h-[62px] bg-[#EBE8E8]">
        <input type="text" className="" placeholder={props.field}></input>
        <FaCaretUp />
      </div>
    </>
  );
}

export default InputMenu;
