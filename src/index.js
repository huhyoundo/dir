// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const hh = document.createElement("h5");
const title = document.createTextNode("Hello Halo!");
hh.appendChild(title);
hh.style.color = "white";
document.body.appendChild(hh);
function fcolor() {
  const width = window.innerWidth;
  if (width >= 800) {
    document.querySelector("body").style.backgroundColor = "#34495e";
  } else if (width >= 500) {
    document.querySelector("body").style.backgroundColor = "#64495e";
  } else {
    document.querySelector("body").style.backgroundColor = "#54495e";
  }
}
window.addEventListener("resize", fcolor);
