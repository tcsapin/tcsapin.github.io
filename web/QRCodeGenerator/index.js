import express from "express";
import bodyParser from "body-parser";
import qr from "qr-image";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { request } from "http";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let dataURL = "";

function urlQRCode(req, res, next) {
  const img = req.body["qr-code"];
  const wURL = req.body["webURL"];
  console.log(img);
  console.log(wURL);

  const increment = 0;  
  console.log("increment: " + increment)

  const newFileName = __dirname + "/views/qr_img"+ `_url_${wURL}_${increment}` + ".png";
  console.log(newFileName)
  
  if(wURL != undefined && !fs.existsSync(newFileName))
  {
    var qr_img = qr.image(wURL);
    console.log(wURL);
  
    while(wURL != undefined && fs.existsSync(newFileName))
    {
    increment++;
    console.log("increment: " + increment)
    newFileName = __dirname + "/views/qr_img"+`_url_${wURL}_${increment}`+".png";
    }

    qr_img.pipe(fs.createWriteStream(newFileName));

    var img_string = qr.imageSync(wURL);
    console.log(req.body.wURL);

    fs.writeFile("URL_"+ wURL + ".txt", wURL, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
    fs.readFile("URL_"+ wURL + ".txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  }
  
  next();
}

app.use(urlQRCode);
app.use(express.static(__dirname+'/views'));

app.get("/", (req, res) => {
  
  res.render(__dirname + "/views/index.ejs", {dataURL: ""});
});

app.post("/generate-qr", (req, res) => {
  fs.readFile('URL.txt', "utf8", (err, data) => {
    if (err) throw err;
    console.log("data: " + data);
    dataURL = data.toString;
    res.render(__dirname + "/views/qr_code.ejs", {dataURL: data});
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
