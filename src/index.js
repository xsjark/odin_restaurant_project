import "./style.css";
import Menu from "./Menu";
import Contact from "./Contact";
import "@fontsource/vollkorn";

function Home() {
  const element = document.createElement("div");
    const leftDiv = document.createElement("div");
    const rightDiv = document.createElement("div")
    const image = document.createElement("img");
    const header = document.createElement("h1")
    const text = document.createElement("p");
  
    element.setAttribute("id", "content-container");
  
    image.classList.add("fit-image");
    image.setAttribute("src", "assets/home.jpg");

    leftDiv.setAttribute("id", "content-left")
    leftDiv.appendChild(image)

    header.textContent = "Welcome"
    
    rightDiv.setAttribute("id", "content-right")
    rightDiv.appendChild(header)

    text.innerText = "Monocle ipsum dolor sit amet boutique joy Beams remarkable Ginza. Ryokan carefully curated Beams K-pop Fast Lane Boeing 787. Asia-Pacific boutique efficient, craftsmanship premium Ginza sharp elegant liveable. Airport Lufthansa elegant Helsinki lovely, sharp handsome eclectic pintxos soft power efficient business class. Elegant extraordinary ryokan conversation.Vibrant Washlet Boeing 787, finest cosy first-class discerning soft power impeccable bureaux. Muji Helsinki charming ryokan liveable sharp sleepy ANA Asia-Pacific Scandinavian efficient Gaggenau boulevard Ettinger. Nordic Helsinki joy, hand-crafted Gaggenau Winkreative first-class Toto Beams izakaya Marylebone Singapore efficient finest Porter. Helsinki the best ANA finest Swiss.";
    
    rightDiv.appendChild(text); 
  
    element.append(leftDiv, rightDiv);
  return element;
}

const changeTab = (foo) => {
  content.innerHTML = ""
  content.appendChild(foo())
  console.log("changed")
}

const content = document.getElementById("content");
content.appendChild(Home());
document.getElementById("home").addEventListener("click",() => changeTab(Home))
document.getElementById("menu").addEventListener("click",() => changeTab(Menu))
document.getElementById("contact").addEventListener("click",() => changeTab(Contact))
