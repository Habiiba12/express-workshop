const express = require('express');

const app = express();
// app.get("/",function(reg,res){
//     res.send("hello world");
// });

// app.get("/student",function(reg,res){
//     res.send("hlkjhlkjh student");
// });

// app.get("/node",function(reg,res){
//     res.send("hello student");
// });
const formidable = require('express-formidable');
const fs = require("fs");

app.use(express.static("public"));
app.use(formidable());
app.post('/create-post', function (req, res) {
    const filePath = __dirname + "/data/posts.json";
    const postContent = fs.readFileSync(filePath);
    const posts = JSON.parse(postContent);
    posts[Date.now()] = req.fields.blogpost;

    fs.writeFileSync(filePath, JSON.stringify(posts));

    
        res.send(200,posts);
   
    // console.log(req.fields);
});
app.listen(3000, function () {
    console.log("server is up on port 3000");
});


