import "./Resources.css";

import ListOfContent from "../../components/resources/ListOfContent";
import SideBarResources from "../../components/resources/SideBarResources";

function Resources() {
  return (
    <>
      <div className="resources-container">
        <div className="heading-page">Resources</div>

        <div className="content-resources container mx-auto">
          <div className="left-part">
            <SideBarResources />
          </div>
          <div className="right-part">
            <ListOfContent />
          </div>
        </div>
      </div>
    </>
  );
}

export default Resources;
