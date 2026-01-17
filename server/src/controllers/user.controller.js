import User from "./../models/user.model.js";
import generateToken from './../utils/generate_token.utils';

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if ((!name, !email, !password)) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    const existsUser = await User.findOne({ email }).populate("-password");
    if (existsUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const userLogin = async (req, res) => {
  try {
    const {email,password}=req.body;
    if(!email || !password){
      return res.status(400).json({
         success:false,
         message:'All fields are require'
      });
    }

    const user=await User.findOne({email});
    if(!user){
      return res.status(404).json({
         success:false,
         message:'user not found'
      });
    }

    const token=generateToken(res,{id:user._id,role:user.isAdmin?'admin':'user'});
    
    res.status(201).json({
      success:true,
      message:'User login successfully',
      token:token,
      user:{
         name:name,
         email:email,
      },
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Server error: ${error.message}`,
    });
  }
};

export const adminLogin = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Server error: ${error.message}`,
    });
  }
};

export const logout = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Server error: ${error.message}`,
    });
  }
};

export const getProfile = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Server error: ${error.message}`,
    });
  }
};

export const isAuth = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Server error: ${error.message}`,
    });
  }
};
