const homepage = function() {
    let container = document.getElementById("content");

    let headline = document.createElement("H1");
    headline.innerHTML = "Brandon's Macaroni Shop";
    container.appendChild(headline);

    let paragraph = document.createElement("p");
    paragraph.innerHTML = "The best macaroni shop this side of Lake Ontario!";
    container.appendChild(paragraph);

    let image = document.createElement("img");
    image.src = "../dist/macaroni-pie.jpeg"
    container.appendChild(image);
}

export default homepage