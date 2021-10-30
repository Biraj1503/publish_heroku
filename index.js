const express = require('express')
const app = express()

app.set('views engin','ejs')

app.get('/concat',(req,res,next)=>{
	res.json({
		message:"Concat page"
	})
})

app.get('/about',(req,res,next)=>{
	res.json({
		message:"About page"
	})
})
app.get('/',(req,res,next)=>{
	res.render('home.ejs')
})

app.get('*',(re,res,next)=>{
	res.json({
		message:"404 Not Found"
	})
})
const PORT = process.env.PORT || 8000
app.listen(PORT,()=>console.log(`Server Is Ready To Now PORT ${PORT}`))
