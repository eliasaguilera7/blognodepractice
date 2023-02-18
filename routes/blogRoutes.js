const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');
//const app = express();
//app.use(express.urlencoded({ extended: true }));


// Define paths to three JSX files
router.get('/create', blogController.blog_create);
router.get('/blogs/:id', blogController.blogs_individual);
router.delete('/blogs/:id', blogController.blogs_delete);
router.get('/add-blog' , blogController.blog_add);
router.get("/", blogController.blog_home);
router.post('/blogs', blogController.blogs_post);

module.exports = router;
  