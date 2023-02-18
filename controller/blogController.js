const { rawListeners } = require('../models/blogs');
const Blog = require('../models/blogs');



 const blog_create = (req, res) =>{
 res.render('create');
 }

 const blogs_post = (req, res) =>{
 console.log('AT LEAST IT GOT HERE! BLOGS' + req.title)

   const blog = new Blog(req.body);
  /* let blog = new Blog({title:"This is the Second blog",
   snippet:"I am getting good using Node",
   body:"Hell Yeah!"});*/

    console.log('LETS SEE IF THERE IS SOMETHING HERE. ' + blog)
    blog.save();
    Blog.find()
    .then((result) => 
    {console.log(result)
     res.redirect('/')})
     .catch((err) => console.log(err));  
 }

 const blogs_individual = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then(result => {
      res.render('details', {blog: result});
    })
    .catch(err => console.log(err))
 }

 const blogs_delete = (req, res) =>{
    const id = req.params.id;
  
    Blog.findOneAndDelete(id)
    .then(result => {
      res.json({ resdirect: '/blogs' })
    })
    .catch((err) => console.log(err))
 }

 const blog_add = (req, res) => {
    const blog = new Blog ({
        title:"This is the Second blog",
        snippet:"I am getting good using Node",
        body:"Hell Yeah!"
      });
    blog.save()
    .then((result) => {
    res.send(result)
    })
    .catch((err) => {
      console.log(err);
    }); }

    const blog_home = (req, res) => {
        Blog.find()
        .then((result) => {
          console.log(result);
          res.render('home', {result, blog: result})})
         .catch((err) => console.log("******"+err+"*********"));   
    }


 module.exports = {
    blog_create,
    blogs_post,
    blogs_individual,
    blogs_delete,
    blog_add,
    blog_home
 }

