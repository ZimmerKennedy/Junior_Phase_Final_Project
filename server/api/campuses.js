const router = require('express').Router();
const { Campus } = require('../db')

// GET /api/campus

router.get('/', async(req,res,next) =>{
    try{
        const allCampus = await Campus.findAll({
            attributes: ['id','name','imageUrl']
        });
        res.json(allCampus)
    } catch (error){
        next(error)
    };
});

// GET /api/campus/:campusId
router.get('/:campusId', async(req,res,next) =>{
    try{
        const campus = await Campus.findByPk(req.params.campusId)
        res.json(campus)
    } catch (error){
        next(error)
    }
})

module.exports = router