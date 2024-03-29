import { useEffect, useState } from "react";
import { FaCaretUp } from "react-icons/fa";
import MenuList from "./MenuList";

function InputMenu(props) {
  const [displayField, setDisplayField] = useState(null);
  const [menuListOpen, setMenuListOpen] = useState(false);

  useEffect(() => {
    if (props.field === "frontend") {
      setDisplayField("Frontend");
    }
    if (props.field === "backendFramework") {
      setDisplayField("Backend Framework");
    }
    if (props.field === "style") {
      setDisplayField("Style");
    }
    if (props.field === "database") {
      setDisplayField("Database");
    }
    if (props.field === "api") {
      setDisplayField("API");
    }
    if (props.field === "cloudComputingPlatform") {
      setDisplayField("Cloud Computing Platform");
    }
    if (props.field === "containerizationPlatform") {
      setDisplayField("Containerization Platform");
    }
    if (props.field === "deployment") {
      setDisplayField("Deployment");
    }
    if (props.field === "other") {
      setDisplayField("Other");
    }
  }, []);

  return (
    <div className="relative">
      <div
        className={`flex flex-row w-[552px] h-[62px] bg-[#EBE8E8] py-[12px] px-[26px] ${
          menuListOpen ? "rounded-t-2xl" : "rounded-2xl"
        }`}
      >
        <input
          type="text"
          className="w-full outline-none bg-[#EBE8E8] text-xl placeholder:text-xl placeholder:text-[#B5B5B5]"
          placeholder={displayField}
          onFocus={() => {
            setMenuListOpen(true);
          }}
          onBlur={() => {
            setMenuListOpen(false);
          }}
        ></input>

        <FaCaretUp
          className={`ml-2 self-center !max-w-fit !max-h-fit !cursor-pointer ${
            menuListOpen ? "transform -rotate-180" : ""
          }`}
          onClick={() => {
            menuListOpen ? setMenuListOpen(false) : setMenuListOpen(true);
          }}
        />
      </div>

      <div
        className={`absolute top-[62px] z-20 bg-[#dedede] w-[552px] h-auto min-h-[62px] rounded-b-2xl p-5 ${
          menuListOpen ? "block" : "hidden"
        }`}
        id={`${props.field}-menuList`}
      >
        <MenuList techs={props.techs} />
      </div>
    </div>
  );
}

export default InputMenu;
