import Map from "./assets/map.png"

function Contact() {
    const element = document.createElement("div");
    const details = document.createElement("div");
    const leftDiv = document.createElement("div");
    const rightDiv = document.createElement("div")
    const image = document.createElement("img");
    const header = document.createElement("h1");
    const address = document.createElement("p");
    const phone = document.createElement("p");
    const email = document.createElement("p");
    
    element.setAttribute("id", "content-container");
  
    image.classList.add("fit-image");
    image.src = Map

    leftDiv.setAttribute("id", "content-left")
    leftDiv.appendChild(image)

    header.textContent = "Location"
    
    rightDiv.setAttribute("id", "content-right")
    rightDiv.appendChild(header)

    details.setAttribute("id", "contact-details")

    address.innerText = "335 Central Ave, Albany, North Dakota, 12206";
    phone.innerText = "123 456 7890";
    email.innerText = "contact@henomoheji.com";
    
    details.append(address, phone, email); 
    
    rightDiv.appendChild(details)
  
    element.append(leftDiv, rightDiv);

    return element;
}

export default Contact