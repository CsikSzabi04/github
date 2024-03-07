function assertEquals(text, think, real){
    let html = "- " + text //+ " (" + real + "): "
    if(real == think) html += "<span style='color:green;'> CORRECT! &check;</span><br>"; else html += "<span style='color:red;'> WRONG! <br></span>"; 
    tdiv.innerHTML += html;
}

function assertEquals(text, think, real){
    let html = "- " + text //+ " (" + real + "): "
    if(real == think) html += "<span style='color:green;'> CORRECT! &check;</span><br>"; else html += "<span style='color:red;'> WRONG! <br></span>"; 
    tdiv.innerHTML += html;
}

function getAttribute(selector, attribute){return document.querySelector(selector).getAttribute(attribute);}
function getProperty(selector, property){return window.getComputedStyle(document.querySelector(selector)).getPropertyValue(property);}

let tdiv = document.createElement("div");
tdiv.style = "background-color: white; border: 1px solid lighgrey; padding: 10px; margin: 10px;"
document.getElementsByTagName("body")[0].appendChild(tdiv);

tdiv.innerHTML = "Az oldal:<br>";
assertEquals("Kódolása UTF-8: ", "UTF-8", getAttribute("meta[charset]","charset"));
assertEquals("Nyelve magyar: ", "hu", getAttribute("html","lang"));
assertEquals("Címe \"Github\": ", "Github", document.querySelector("title").innerHTML);
assertEquals("Háttérszíne \"steelblue\": ","rgb(70, 130, 180)", getProperty("body", "background-color"));

tdiv.innerHTML += "<br> A kép: <br>";
assertEquals("Létezik és egy: ", "1", document.querySelectorAll("body img").length)
assertEquals("Forrása megfelelő: ", "github.png", document.querySelector("img").getAttribute("src"));
assertEquals("Belső margó tíz képpont: ", "10px", getProperty("#pic", "padding"));
assertEquals("Van rajta link: ", "A",  document.querySelector("img").parentElement.nodeName);
assertEquals("A link megfelelő: ", "https://csikszabi04.github.io/",  document.querySelector("#piclink").getAttribute("href"));

tdiv.innerHTML += "<br> A nyomógomb: <br>";
assertEquals("Létezik és egy: ", "1", document.querySelectorAll("#button").length)
assertEquals("Felső margója tíz képpont: ", "10px", getProperty("#button", "margin-top"));
assertEquals("Szélessége 100 képpont: ", "100px", getProperty("#button", "width"))
assertEquals("Felirata megfelelő: ", "Login", getAttribute("#button", "value"))