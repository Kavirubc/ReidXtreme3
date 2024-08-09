import connectDB from "../lib/connectDB";
import Register from "../../register/register";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req: any) {
    const { teamName, teamEmail, teamLeaderName, teamLeaderEmail, teamleaderscontactNumber, university, teamMember1, teamMember1email, teamMember1contactNumber, teamMember2, teamMember2email, teamMember2contactNumber, teamMember3, teamMember3email, teamMember3contactNumber } = await req.json();

    try {
        await connectDB();
        await Register.create({ teamName, teamEmail, teamLeaderName, teamLeaderEmail, teamleaderscontactNumber, university, teamMember1, teamMember1email, teamMember1contactNumber, teamMember2, teamMember2email, teamMember2contactNumber, teamMember3, teamMember3email, teamMember3contactNumber });

        return NextResponse.json({
            msg: ["Team Registration Successful."],
            success: true,
        });
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(error.errors[e].message);
            }
            console.log(errorList);
            return NextResponse.json({ msg: errorList });
        } else {
            return NextResponse.json({ msg: ["Error. Try Again!."] });
        }
    }
}