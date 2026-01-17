
import User from './../models/user.model.js';



export const signup=async(req ,res)=>{
   try {

      const {name,email,password}=req.body;
      if(!name ,!email,!password){
         return res.status(400).json({
            success:false,
            message:'Please fill all the fields'
         });
      }

      const existsUser=await User.findOne({email}).populate('-password');
      if(existsUser){
         return res.status(400).json({
            success:false,
            message:'User already exists',
         });
      }

      

   } catch (error) {
      res.status(500).json({
         success:false,
         error:error.message
      })
   }
}