import "./style.css";
import Menu from "./Menu";
import Contact from "./Contact";
import "@fontsource/vollkorn";
import LogoSVG from "./assets/logo.svg";
import HomeImage from "./assets/home.jpg";

function Home() {
  const element = document.createElement("div");
  const leftDiv = document.createElement("div");
  const rightDiv = document.createElement("div");
  const image = document.createElement("img");
  const header = document.createElement("h1");
  const text = document.createElement("p");

  element.id = "content-container";

  image.classList.add("fit-image");
  image.src = HomeImage;

  leftDiv.id ="content-left";
  leftDiv.appendChild(image);

  header.textContent = "Welcome";

  rightDiv.id = "content-right";
  rightDiv.appendChild(header);

  text.innerText =
    "Monocle ipsum dolor sit amet boutique joy Beams remarkable Ginza. Ryokan carefully curated Beams K-pop Fast Lane Boeing 787. Asia-Pacific boutique efficient, craftsmanship premium Ginza sharp elegant liveable. Airport Lufthansa elegant Helsinki lovely, sharp handsome eclectic pintxos soft power efficient business class. Elegant extraordinary ryokan conversation.Vibrant Washlet Boeing 787, finest cosy first-class discerning soft power impeccable bureaux. Muji Helsinki charming ryokan liveable sharp sleepy ANA Asia-Pacific Scandinavian efficient Gaggenau boulevard Ettinger. Nordic Helsinki joy, hand-crafted Gaggenau Winkreative first-class Toto Beams izakaya Marylebone Singapore efficient finest Porter. Helsinki the best ANA finest Swiss.";

  rightDiv.appendChild(text);

  element.append(leftDiv, rightDiv);
  return element;
}

const loadContent = (foo) => {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.appendChild(foo());
};

document.getElementById("logo").src = LogoSVG;
document
  .getElementById("home")
  .addEventListener("click", () => loadContent(Home));
document
  .getElementById("menu")
  .addEventListener("click", () => loadContent(Menu));
document
  .getElementById("contact")
  .addEventListener("click", () => loadContent(Contact));

loadContent(Home);
