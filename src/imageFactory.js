const imageFactory = (path, containerID) => {
    let container = document.getElementById(containerID);
    let image = document.createElement("img");
    image.src = path;
    container.appendChild(image);
}

export default imageFactory;