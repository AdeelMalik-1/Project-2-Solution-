const express = require('express');
const router = express.Router();
const userdata = require('../models/api-model');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
destionation : (req, file,cb)=>{
    cb(null, 'uploads');
},
filname : (req, file, cb)=>{
    const newFileName = Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
}
});

const fileFilter = (req, file, cb)=>{
    if(file.mimetype.startsWith('image/')){
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed'), false);
    }
}

const upload = multer({
    storage : storage,
    limits : 1024 * 1024 * 3,
    fileFilter : fileFilter,
})

// Get all users
router.get("/", async (req, res)=>{
    try {
        const students = await userdata.find();
        if(!students)return res.status(404).json({message : "Database is empty"});
        res.json(students);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
});

// Get single user
router.get('/single/:id', async (req, res)=>{
    try {
         const singleStudent = await userdata.findById(req.params.id);
         if(!singleStudent) {
         res.status(404).json("Student not found");
         }
    res.json(singleStudent);
    } catch (error) {
          res.status(500).json({message : error.message});  
    }  
})

// Add new user
router.post('/add-student', upload.single('picture'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(422).json({ message: "Image is required" });
        }

        // Assign file path first
        req.body.picture = req.file.path;

        // Then create instance
        const addStudent = new userdata(req.body);

        const saveStudent = await addStudent.save();
        res.json(saveStudent);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update user
router.put('/update-student/:id', async (req, res)=>{
    try {
        const updateStudent = await userdata.findByIdAndUpdate(req.params.id, req.body, {new : true});
        if(!updateStudent){
            res.status(404).json({message : "User not found"});
        }
        res.json(updateStudent);
    } catch (error) {
        res.status(400).json({message : error.message});  
    }
})

// Delete user
router.delete('/delete-student/:id', async (req, res)=>{
    try {
        const deleteStudent = await userdata.findByIdAndDelete(req.params.id);
        if(!deleteStudent){
            res.status(404).json({message : "User not found"});
        }
        res.json({message : "User deleted successfully"});
    } catch (error) {
        res.status(400).json({message : error.message});
    }
});

module.exports = router;