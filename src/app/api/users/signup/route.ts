// // import { connect } from "@/dbConfig/dbConfig";
// // import User from "@/models/userModel";
// // import { NextRequest, NextResponse } from "next/server";
// // import bcryptjs from "bcryptjs";
// // import {sendEmail} from "@/helpers/mailer"


// // connect();

// // export async function POST(request: NextRequest) {
// //   try {

// //     const reqBody=await request.json();
// //     const {username,email,password}=reqBody;
// //     console.log(reqBody);

// //     //check if user already exists 

// //     const user= await User.findOne({email})
// //     if(user){
// //         return NextResponse.json({error:"user already exists"},{status:400})
// //     }


// //         //hash password
// //         const salt = await bcryptjs.genSalt(10)
// //         const hashedPassword = await bcryptjs.hash(password, salt)

// // // create a new user 
// // const newUSer=new User({
// //     username,
// //     email,
// //     password:hashedPassword
// // })

// // const savedUser=await newUSer.save();
// // console.log(savedUser)


// // //send verification email
// // await sendEmail({email,emailType:"VERIFY",
// //   userId:savedUser._id
// // })

// // return NextResponse.json({ message:"user created succesfully",
// //     success:true,savedUser
// //  });


 
// //   } catch (error: any) {
// //     return NextResponse.json({ error: error.message }, { status: 500 });
// //     console.log("problem in signing up")
// //   }
// // }


// import { connect } from "@/dbConfig/dbConfig";
// import User from "@/models/userModel";
// import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";
// import { sendEmail } from "@/helpers/mailer";

// connect();

// export async function POST(request: NextRequest) {
//   try {
//     const reqBody = await request.json();
//     const { username, email, password } = reqBody;
//     console.log(reqBody);

//     // Check if user already exists
//     const user = await User.findOne({ email });
//     if (user) {
//       return NextResponse.json({ error: "User already exists" }, { status: 400 });
//     }

//     // Hash password
//     const salt = await bcryptjs.genSalt(10);
//     const hashedPassword = await bcryptjs.hash(password, salt);

//     // Create a new user
//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     const savedUser = await newUser.save();
//     console.log(savedUser);

//     // Send verification email
//     await sendEmail({
//       email,
//       emailType: "VERIFY",
//       userId: savedUser._id,
//     });

//     return NextResponse.json({
//       message: "User created successfully",
//       success: true,
//       savedUser,
//     });
//   } catch (error: any) {
//     console.error("Error in signup route:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }


import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";


connect()
export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody
        console.log(reqBody);
        //check if user already exists
        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }
        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
        const savedUser = await newUser.save()
        console.log(savedUser);

        //send verification email

        await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
        
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}