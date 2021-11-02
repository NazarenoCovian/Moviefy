const express = require(`express`);
const router = express.Router();
const {Favorite} = require("../models")

router.get("/",(req,res)=>{
    const {userId} = req.query
    
    Favorite.findAll(
        {
            where:{
                userId:userId
            }
        }
    )
    .then(fav=>res.status(200).send(fav))

})

router.post("/", (req,res)=>{
    const {userId,movieId,title,year,poster_path,vote_average,adult,overview}= req.body
  Favorite.create({
    userId: userId,
    movieId: movieId,
    title:title,
    year:year,
    poster_path:poster_path,
    vote_average:vote_average,
    adult:adult,
    overview:overview

  }).then(data=>{
      console.log(data)
      res.status(200).send(data)
  })
})

router.delete("/",(req,res)=>{
    const {userId,movieId}=req.body
    Favorite.destroy({
        where:{movieId:movieId,userId:userId}
    }).then(data=>{
        
        res.status(200).json(data)
    })
})

module.exports = router;