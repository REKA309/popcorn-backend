const express = require('express');
const PictureModal = require('../Modal/Picture.modal');
const PictureRouter = express.Router();
// GET REQUEST WITH LEAD ACTOR NAME
PictureRouter.get('/actorpicture/:leadActor', async function (req, res) {
  try {
   const {leadActor}=req.params;
   console.log(leadActor)
   const actorPicture=await PictureModal.find({leadActor:leadActor})
   if (actorPicture.length===0) {
    return res.status(404).json({ error: 'No pictures found for the requested actor' });
  }
   res.status(200).json(actorPicture)
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve lead Actor' });
  }
});
// GET REQUEST WITH DIRECTOR 
PictureRouter.get('/directorpicture/:directorName', async function (req, res) {
    try {
      const { directorName } = req.params;
      
      const directorPicture = await PictureModal.find({ directorName: directorName });
      if (directorPicture.length===0) {
        return res.status(404).json({ error: 'No pictures found for the requested director' });
      }
  
      res.status(200).json(directorPicture);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to retrieve director' });
    }
  });
  
// GET REQUEST WITH GENRE
PictureRouter.get('/genrepicture/:genre', async function (req, res) {
    try {
     const {genre}=req.params;
     const genrePicture=await PictureModal.find({genre:genre})
     if (genrePicture.length===0) {
        return res.status(404).json({ error: 'No pictures found for the requested genre' });
      }
     res.status(200).json(genrePicture)
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve genre' });
    }
  });
// GET REQUEST WITH LANGUAGE
PictureRouter.get('/languagepicture/:language', async function (req, res) {
    try {
      const { language } = req.params;
     
  
      const languagePicture = await PictureModal.find({ language: language });
  
      if (languagePicture.length === 0) {
        return res.status(404).json({ error: 'No pictures found for the requested language' });
      }
      res.status(200).json(languagePicture);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to retrieve picture' });
    }
  });
  
module.exports = PictureRouter;
