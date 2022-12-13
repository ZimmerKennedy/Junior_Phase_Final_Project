const router = require('express').Router();
const { Campus, Student } = require('../db')

// GET /api/students

router.get('/', async(req,res,next) =>{
    try{
        const students = await Student.findAll({
            attributes: ['id','firstName','lastName','imageUrl']
        });
        res.json(students)
    } catch (error){
        next(error)
    };
});

// /api/studdent/:id
router.get('/:studentId', async(req,res,next) =>{
    try{
        const student = await Student.findByPk(req.params.studentId)
        res.json(student)
    } catch (error){
        next(error)
    }
})

module.exports = router