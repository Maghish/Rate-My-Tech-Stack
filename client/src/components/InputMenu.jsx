import { useEffect, useState } from "react";
import { FaCaretUp } from "react-icons/fa";

function InputMenu(props) {
  const [displayField, setDisplayField] = useState(null);

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
    <>
      <div className="flex flex-row w-[552px] h-[62px] bg-[#EBE8E8] py-[12px] px-[26px] rounded-2xl">
        <input
          type="text"
          className="w-full outline-none bg-[#EBE8E8] placeholder:text-2xl"
          placeholder={displayField}
        ></input>
        <FaCaretUp />
      </div>
    </>
  );
}

export default InputMenu;
