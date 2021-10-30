const express = require('express')
const app = express()
const MONGDB_URI = 'mongodb+srv://SM:studentmanagment@newproject.92n8k.mongodb.net/students'
app.set('views engin','ejs')

app.get('/concat',(req,res,next)=>{
	res.json({
		address:"Braishal,Bangladesh",
		Home:"Paterhat,Mehendigonj"
	})
})

app.get('/about',(req,res,next)=>{
	res.json({
		name:"Biraj Kumar Biswas",
		email:"toshebamail@gmail.com",
		age:27
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
mongoose.connect(MONGDB_URI,
		{useNewUrlParser:true},
		()=>{
			app.listen(PORT,()=>{
				console.log(`Server Is Running PORT ${PORT}`)
				console.log('Database Is Running Now')
			})
		}

) 
