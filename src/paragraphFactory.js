const paragraphFactory = (content, containerID) => {
    let container = document.getElementById(containerID);
    let paragraph = document.createElement("p");
    paragraph.innerHTML = content;
    container.appendChild(paragraph);
}

export default paragraphFactory;