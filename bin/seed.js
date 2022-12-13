#!/usr/bin/env node

const {db, Student, Campus} = require('../server/db')

const seed = async () => {
    await db.sync({force:true})

    const harvard = await Campus.create({
        name: 'Harvard', 
        imageUrl:'https://images.unsplash.com/photo-1622397333309-3056849bc70b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        address:'Cambridge, MA',
        description:'Harvard University is a private institution that was founded in 1636. It has a total undergraduate enrollment of 7,153 (fall 2021), its setting is urban, and the campus size is 5,076 acres. It utilizes a semester-based academic calendar.',
    })

    const mit = await Campus.create({
        name:'Massachusetts Institute of Technology',
        imageUrl:'https://images.unsplash.com/photo-1537888692311-8a7fb3e9f374?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        address:'Cambridge, MA',
        description:'Massachusetts Institute of Technology (MIT), privately controlled coeducational institution of higher learning famous for its scientific and technological training and research. It was chartered by the state of Massachusetts in 1861 and became a land-grant college in 1863.'
    })

    const student1 = await Student.create({
        firstName:'Galaxy',
        lastName:'Mazekin',
        email:'galaxyMazekin@gmail.com',
        imageUrl:'',
        schoolId: harvard.id
    })
    const student2 = await Student.create({
        firstName:'Wednesday',
        lastName:'Addams',
        email:'wednesdayAdams@gmail.com',
        imageUrl:'',
        schoolId: mit.id
    })

    db.close()
    console.log(`
    
        Seeding Successful!
        Time to Blog!
    `)
}

seed().catch(err =>{
    db.close()
    console.log(`
        Error Seeding
        ${err.message}
        ${err.stack}
    `)
})
