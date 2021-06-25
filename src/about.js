import headingFactory from "./headingFactory";
import paragraphFactory from "./paragraphFactory";

const about = () => {
    headingFactory("h2", "About", "dynamic-content-item");
    paragraphFactory("Brandon's Macaroni Shop is the best place in Toronto to get macaroni! Whether you want it in pie form or whatever other form you can get macaroni, we've got you covered! Come visit us at 123 Toronto Avenue, Toronto, Ontario!", "dynamic-content-item");
}

export default about;