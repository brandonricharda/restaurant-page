import headingFactory from "./headingFactory";
import paragraphFactory from "./paragraphFactory";

const hours = () => {
    headingFactory("h2", "Hours of Operation", "dynamic-content-item");
    headingFactory("h3", "Monday to Friday", "dynamic-content-item");
    paragraphFactory("9:00 AM - 5:00 PM", "dynamic-content-item");
    headingFactory("h3", "Saturday - Sunday", "dynamic-content-item");
    paragraphFactory("9:00 AM - 5:00 PM", "dynamic-content-item");
}

export default hours;