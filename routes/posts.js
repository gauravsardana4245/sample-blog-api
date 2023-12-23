const express = require('express');
const router = express.Router();
const { getAllPosts, getPostById, createPost, updatePost, deletePost } = require('../controllers/postController');
const { authenticate } = require('../middleware/authMiddleware');

router.get('/get-all-posts', getAllPosts);
router.get('/get-post-by-id', getPostById);
router.post('/create-post', authenticate, createPost);
router.put('/update-post', authenticate, updatePost);
router.delete('/delete-post', authenticate, deletePost);

module.exports = router;
