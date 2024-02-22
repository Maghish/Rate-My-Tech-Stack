import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [allFrontend, setAllFrontend] = useState([]);
  const [allStyle, setAllStyle] = useState([]);
  const [allBackendFramework, setAllBackendFramework] = useState([]);
  const [allDatabase, setAllDatabase] = useState([]);
  const [allAPI, setAllAPI] = useState([]);
  const [allCloudComputingPlatform, setAllCloudComputingPlatform] = useState(
    []
  );
  const [allContainerizationPlatform, setAllContainerizationPlatform] =
    useState([]);
  const [allDeployment, setAllDeployment] = useState([]);
  const [allOther, setAllOther] = useState([]);

  useEffect(() => {
    async function getAllTechOnEveryField(field) {
      axios
        .post("/api/gettechthroughfield", { field: field })
        .then((response) => {
          if (field === "frontend") {
            setAllFrontend(response.data);
          }
          if (field === "style") {
            setAllStyle(response.data);
          }
          if (field === "backendFramework") {
            setAllBackendFramework(response.data);
          }
          if (field === "database") {
            setAllDatabase(response.data);
          }
          if (field === "api") {
            setAllAPI(response.data);
          }
          if (field === "cloudComputingPlatform") {
            setAllCloudComputingPlatform(response.data);
          }
          if (field === "containerizationPlatform") {
            setAllContainerizationPlatform(response.data);
          }
          if (field === "deployment") {
            setAllDeployment(response.data);
          }
          if (field === "other") {
            setAllOther(response.data);
          }
        });
    }

    getAllTechOnEveryField("frontend");
    getAllTechOnEveryField("style");
    getAllTechOnEveryField("backendFramework");
    getAllTechOnEveryField("database");
    getAllTechOnEveryField("api");
    getAllTechOnEveryField("cloudComputingPlatform");
    getAllTechOnEveryField("containerizationPlatform");
    getAllTechOnEveryField("deployment");
    getAllTechOnEveryField("other");
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center p-14">
      <p className="text-5xl inter-bold ">Rate My Tech Stack</p>
      <div className="grid grid-cols-2 gap-40" id="body"></div>
    </div>
  );
}

export default Home;
