import headingFactory from "./headingFactory";
import paragraphFactory from "./paragraphFactory";
import imageFactory from "./imageFactory";
import navbar from "./navbar";

// Render homepage elements
imageFactory("macaroni-pie.jpeg", "brand");
headingFactory("H1", "Brandon's Macaroni Shop", "brand-text");
paragraphFactory("The best macaroni shop this side of Lake Ontario!", "brand-text");
navbar();