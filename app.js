const express = require("express");
let app = express();
let fs = require("fs");
app.set('view engine', "ejs");
app.use("/assets", express.static("assets"));

app.get("/", function(req, res) {
    res.render("home", {baseUrl:baseUrl});
});

app.get("/jewellery", function(req, res) {
    res.render("jewellery", {baseUrl:baseUrl});
});

app.get("/contact", function(req, res) {
    res.render("contact", {baseUrl:baseUrl});
});

app.get("/jewellery/engagement_rings", function(req, res) {
    fs.readFile("assets/engagement_rings.json", function(err, data) {
        if(err)
            throw err;
        let rings = JSON.parse(data);
        res.render("engagement_rings", {baseUrl:baseUrl, rings:rings.rings});
    });    

app.get("/jewellery/design_rings", function(req, res) {
     fs.readFile("assets/design_rings.json", function(err, data) {
        if(err)
            throw err;
        let rings = JSON.parse(data);
        res.render("design_rings", {baseUrl:baseUrl, rings:rings.rings});
        });  
    }); 

app.get("/jewellery/solitaire_rings", function(req, res) {
    fs.readFile("assets/solitaire_rings.json", function(err, data) {
        if(err)
            throw err;
        let rings = JSON.parse(data);
        res.render("solitaire_rings", {baseUrl:baseUrl, rings:rings.rings});
        });  
    });    
});
app.listen(process.env.PORT || 3000, () => console.log("anna's app is running smoothly"));