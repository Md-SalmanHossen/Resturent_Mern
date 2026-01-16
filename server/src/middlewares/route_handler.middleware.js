
const routeHandler=(req ,res,next)=>{
   try {
      res.status(404).json({
         success:false,
         message:'Route not found'
      });
   } catch (error) {
      res.status(500).json({
         success:false,
         error:error.message
      });
   }
}
export default routeHandler;