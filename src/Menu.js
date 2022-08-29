const menuArray = [
    {
        name: "Shoyu Ramen",
        description: "Emerging carefully curated cutting-edge, Nordic Muji hand-crafted joy global perfect Boeing 787 sophisticated Ettinger tote bag eclectic lovely",
        price: "$3.50",
        id: "shoyuramen"
    },
    {
        name: "Kaisendon",
        description: "Exquisite Airbus A380 elegant ANA. Singapore Comme des Garçons essential Washlet charming.",
        price: "$2.50",
        id: "kaisendon"
    },
    {
        name: "Katsudon",
        description: "Ryokan Airbus A380 liveable smart, espresso Shinkansen joy Lufthansa Fast Lane Washlet.",
        price: "$1.50",
        id: "katsudon"
    }
]
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
    image.setAttribute("src", "/src/assets/shoyuramen.jpg");

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

        itemWrapper.addEventListener("mouseover", () => image.setAttribute("src", `../src/assets/${menuArray[i].id}.jpg`) )

        menu.appendChild(itemWrapper)

    }
    

    rightDiv.appendChild(menu)
  
    element.append(leftDiv, rightDiv);

    return element;
}

export default Menu