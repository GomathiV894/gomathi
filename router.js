const router=require('express').Router();

const{Create,view}=require('./controller');

router.post("/Create",Create);
router.get("/view",view);

module.exports=router;