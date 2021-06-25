import hours from "./hours";
import menu from "./menu";
import about from "./about";

const navbar = () => {
    hours();
    ["hours", "menu", "about"].forEach(function(type) {
        // Create the button and add it to DOM
        let container = document.getElementById("navbar");
        let button = document.createElement("button");
        button.innerHTML = type;
        container.appendChild(button);
        // Activate button
        button.addEventListener("click", function() {
            let dynamicContentContainer = document.getElementById("dynamic-content-item");
            dynamicContentContainer.innerHTML = "";
            if (type == "hours") {
                hours();
            } else if (type == "menu") {
                menu();
            } else if (type == "about") {
                about();
            }
        });
    });
}

export default navbar;