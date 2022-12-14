const router = require('express').Router();
const {Student } = require('../db')

// GET /api/students

router.get('/', async (req, res, next) => {
    try {
        const students = await Student.findAll({
            attributes: ['id', 'firstName', 'lastName', 'imageUrl', 'email']
        });
        res.json(students)
    } catch (error) {
        next(error)
    };
});


// POST /api/students

router.post('/', async (req, res, next) => {
    try {
        console.log(`hi im req.body from api/students.js`, req.body)
        res.status(201).send(await Student.create(req.body))
    } catch (error) {
        next(error);
    }
});

// /api/studdent/:id
router.get('/:studentId', async (req, res, next) => {
    try {
        const student = await Student.findByPk(req.params.studentId)
        res.json(student)
    } catch (error) {
        next(error)
    }
})

// delete/api/student/:id
router.delete('/:studentId', async (req, res, next) => {
    try {
        const student = await Student.findByPk(req.params.studentId);
        await student.destroy();
        res.send(student);
    } catch (error) {
        next(error);
    }
})

// put/api/student/:id
router.put('/:studentId', async (req, res, next) => {
    try {
        const student = await Student.findByPk(req.params.studentId);
        res.send(await student.update(req.body));
    } catch (error) {
        next(error);
    }
})
module.exports = router