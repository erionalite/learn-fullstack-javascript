import express from 'express';
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("hello Express")
})
export default router;