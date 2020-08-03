const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    noCache:true
} )



server.listen(5000, function(){
    console.log("server  is running")
})



server.get('/', function(req, res){
    return res.render("portifolio")
})


server.get('/videos', function(req,  res){
    return res.render("videos")
})


server.use(express.static("public/css"))
server.use(express.static("public/js"))
server.use(express.static("public/img"))

