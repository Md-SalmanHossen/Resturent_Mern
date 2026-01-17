import User from "./../models/user.model.js";

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

    const user=await User.create({
      name,
      email,
      password
    });

    res.status(201).json({
      success:true,
      message:'User created successfully',
      user
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};


