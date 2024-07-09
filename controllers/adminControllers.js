const raiz = (req,res)=>{
res.redirect("/login");
}
const index = (req,res)=>{
try{
const usuario = req.query.usuario;
res.render('index',{usuario});
}catch(error){
	res.status(500).send('error en el servidor');
}
}
const login = (req,res)=>{
try{
res.render('login');
}catch(error){
	res.status(500).send('error en el servidor');
}
} 
const tables = (req,res)=>{
try{
res.render('tables');
}catch(error){
	res.status(500).send('error en el servidor');
}
}
const user = (req,res)=>{
try{
res.render('user');
}catch(error){
	res.status(500).send('error en el servidor');
}
}
const loginPost = async(re,res)=>{
const {username,password} = req.body;
if(nombre == username && contra == password){
res.json({message:true});
}else{
res.json({message:false});
}
}
const register = (req,res)=>{
res.render("register");
}
module.exports = {
	raiz,
	index,
	login,
	tables,
	user,
	loginPost,
	register
}