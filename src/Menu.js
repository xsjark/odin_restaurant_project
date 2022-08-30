import ShoyuRamen from "./assets/shoyuramen.jpg"
import menuArray from "./menuArray"

function Menu() {
    const element = document.createElement("div");
    const leftDiv = document.createElement("div");
    const rightDiv = document.createElement("div")
    const image = document.createElement("img");
    const header = document.createElement("h1");
    const menu = document.createElement("div")
    const itemName = document.createElement("h3");
    const itemDescription = document.createElement("p");
    const itemPrice = document.createElement("p");

  
    element.setAttribute("id", "content-container");
  
    image.classList.add("fit-image");
    image.src = ShoyuRamen;


    leftDiv.setAttribute("id", "content-left")
    leftDiv.appendChild(image)

    header.textContent = "Menu"
    
    rightDiv.setAttribute("id", "content-right")
    rightDiv.appendChild(header)

    menu.setAttribute("id", "menu-card")
    for(let i = 0; i < menuArray.length; i++) {
        const itemWrapper = document.createElement("div");
        itemWrapper.classList.add("item-wrapper")
        const itemText = document.createElement("div");
        itemName.textContent = menuArray[i].name;
        itemText.appendChild(itemName.cloneNode(true))

        itemDescription.textContent = menuArray[i].description;
        itemText.appendChild(itemDescription.cloneNode(true))

        itemWrapper.appendChild(itemText)

        itemPrice.textContent = menuArray[i].price

        itemWrapper.appendChild(itemPrice.cloneNode(true))

        itemWrapper.addEventListener("mouseover", () => image.src = menuArray[i].id )

        menu.appendChild(itemWrapper)

    }
    

    rightDiv.appendChild(menu)
  
    element.append(leftDiv, rightDiv);

    return element;
}

export default Menu