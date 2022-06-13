const colors = ['#2E191B', '#0B6623', '#000080'] // Vermillion, Forest, Navy

const myColor = function(color){
    let guessNum = parseInt(Math.random()*color.length);
    //console.log(parseInt(Math.random()*color.length));
    return color[guessNum];
}

let http = require("http");
let servidor = http.createServer((req, res) => {

    //console.log("petición url: ", req.url);


    if (req.url.includes("colors")) {
        // servir la página de about-us
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
        res.write("<h1 style='color:white'>Bienvenido a la sección de Colores</h1>");
        let theColor = myColor(colors);
        res.write(`<p style="color:white; font-size:24px;"><strong>Tu color es: ${theColor}</strong></p>`)
        res.write("<a href='/' style='color:white'>Volver al inicio</a>")
        res.write(`<script>
        let body = document.querySelector("body");
        body.style.background = "${theColor}";
        </script>`)
        res.end();
        //console.log(myColor(colors));
        return;
    }

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
    res.write("<h1>Bienvenido a la base de datos de colores de The Mooners</h1>");
    res.write("<h3>Para obtener un color aleatorio puedes hacer una petición al endpoint <a href='/colors'><strong>/colors</strong></a></h3>")
    res.end();
});

servidor.listen(3000);