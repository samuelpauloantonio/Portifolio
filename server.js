const express = require("express")
const nunjucks = require("nunjucks")
const videos = require("./public/js/data_video")

const server = express()

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    noCache:true
} )



server.listen(5000, function(){
    console.log("server  is running")
})



server.get('/', function(req , res){
    return res.render("portifolio")
})


server.get('/videos', function(req,  res){
    return res.render("videos", {videos})
})



server.get("/video_single", function(req, res){
    const id  = req.query.id
    const  video = videos.find(function(video){
        if(video.id = id){
            return true
        }
           
    })

    if(!video){
        return  res.send("video Not_found")
    }
   
    return res.render("video_single", {video})


})



server.use(express.static("public/css"))
server.use(express.static("public/js"))
server.use(express.static("public/img"))

