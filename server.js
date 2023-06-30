const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const jwt = require('jsonwebtoken');
const fs = require('fs');
const usersPath ='./packets/users.json';
const musicPath = './packets/music.json';
const newsPath = './packets/news.json';
app.use(express.json());
let TOKEN = '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611';

app.listen(port, () => console.log(`http://localhost:${port}`));

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

function authenticateToken(req, res, next) {
  const token = req.headers['authorization']
  if (token == null) { return res.sendStatus(401)}
  jwt.verify(token, TOKEN, (err, user) => {
    if (err) {return res.sendStatus(403)}
    req.user = user
    next()
  })
}

function generateAccessToken(usr,psw){
  const content = fs.readFileSync(usersPath, "utf8");
  const users = JSON.parse(content);
  let user = null;
  for(let i=0; i<users.length; i++){
    if(users[i].username==usr){
      user=users[i];
      break;
    }
  }
  if (user!==null && user.password==psw)
    return jwt.sign({'username':usr}, TOKEN, {expiresIn:'3600s'})
  else return '_';
}

app.post('/login', function login(req,res){
  let token=generateAccessToken(req.body.username,req.body.password)
  if (token!=='_')
  {
    res.json(token);
  }
  else
    res.sendStatus(403);
})

app.post('/sign-up', function login(req,res){
  const content = fs.readFileSync(usersPath, "utf8");
  const users = JSON.parse(content);
  let user = null;
  let i=0;
  for(i=0; i<users.length; i++){
    if(users[i].username==req.body.username){
      user=users[i];
      break;
    }
  }
  if (i==users.length){
    console.log(req.body);
    let newuser={username:req.body.username, password:req.body.password, email:req.body.email};
    users.push(newuser);
    let data = JSON.stringify(users);
    fs.writeFileSync(usersPath, data);
    let token=generateAccessToken(req.body.username,req.body.password)
    res.json(token);

  }
  else
    res.sendStatus(403);
})

app.get('/music', (req,res)=>{
  const content = fs.readFileSync(musicPath, "utf8");
  const music = JSON.parse(content);
  res.send(music);
})

app.post('/news-page/:id',(req,res)=>{
  const page=req.params.id;
  const amount=req.body.amount;
  const content = fs.readFileSync(newsPath, "utf8");
  const news = JSON.parse(content);
  let result=[];
  for (let i=(page-1)*amount; i<page*amount; i++){ 
    result.push(news[i]);
  }
  res.send({res:result, all:news.length});
})

app.get('/news-main',(req,res)=>{
  const content = fs.readFileSync(newsPath, "utf8");
  const news = JSON.parse(content);
  res.send(news[0]);
})