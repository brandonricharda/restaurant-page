import headingFactory from "./headingFactory";
import paragraphFactory from "./paragraphFactory";

const menu = () => {
    headingFactory("h2", "Menu", "dynamic-content-item");
    headingFactory("h3", "Macaroni", "dynamic-content-item");
    paragraphFactory("Regular macaroni with cheese", "dynamic-content-item");
    headingFactory("h3", "Double Macaroni", "dynamic-content-item");
    paragraphFactory("Macaroni with twice the cheese", "dynamic-content-item");
    headingFactory("h3", "Triple Macaroni", "dynamic-content-item");
    paragraphFactory("Macaroni with three times the cheese", "dynamic-content-item");
    headingFactory("h3", "Quadruple Macaroni", "dynamic-content-item");
    paragraphFactory("Macaroni with four times the cheese", "dynamic-content-item");
    headingFactory("h3", "Quintuple Macaroni", "dynamic-content-item");
    paragraphFactory("Macaroni with five times the cheese", "dynamic-content-item");
    headingFactory("h3", "Alright Chill", "dynamic-content-item", "dynamic-content-item");
    paragraphFactory("You're gonna have a heart attack!", "dynamic-content-item");
}

export default menu;