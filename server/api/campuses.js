const router = require('express').Router();
const { Campus } = require('../db')

// GET /api/campus

router.get('/', async (req, res, next) => {
    try {
        const allCampus = await Campus.findAll({
            attributes: ['id', 'name', 'imageUrl', 'address', 'description']
        });
        res.json(allCampus)
    } catch (error) {
        next(error)
    };
});

// POST /api/campus

router.post('/', async (req, res, next) => {
    try {
        console.log(`hi im req`, req.body)
        res.status(201).send(await Campus.create(req.body))
    } catch (error) {
        next(error);
    }
});

// GET /api/campus/:campusId
router.get('/:campusId', async (req, res, next) => {
    try {
        const campus = await Campus.findByPk(req.params.campusId)
        res.json(campus)
    } catch (error) {
        next(error)
    }
})

// DELETE /api/campus/:campusId

router.delete('/:campusId', async (req, res, next) => {
    try {
        const campus = await Campus.findByPk(req.params.campusId);
        await campus.destroy();
        res.send(campus);
    } catch (error) {
        next(error);
    }
})

// EDIT /api/campus/:campusId

router.put('/:campusId', async(req,res,next) =>{
    try{
        const campus = await Campus.findByPk(req.params.campusId);
        res.send(await campus.update(req.body));
    } catch (error){
        next(error);
    }
})

module.exports = router