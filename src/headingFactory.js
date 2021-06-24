const headingFactory = (type, content, containerID) => {
    let container = document.getElementById(containerID);
    let heading = document.createElement(type);
    heading.innerHTML = content;
    container.appendChild(heading);
}

export default headingFactory