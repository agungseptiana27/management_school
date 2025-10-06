"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  username: z
  .string()
  .min(3, { message: 'Username must be at least 3 character long!' })
  .max(20, { message: 'Username must be at most 20 character long!' }),
  email: z.string().email({message:"Invalid email address!"}),
  password: z.string().min(8, {message:"Password must be at least 8 characters long!"}),
  firstName: z.string().min(1, {message:"First name is required!"}),
  lastName: z.string().min(1, {message:"Last name is required!"}),
  phone: z.string().min(1, {message:"phone is required!"}),
  address: z.string().min(1, {message:"Address is required!"}),
  birthday: z.string().min(1, {message:"Birthday is required!"}),
  sex: z.enum(["male", "female"], {message:"Sex is required!"}),
  img: z.instanceof(File, {message:"Image is required!"}),
});

const TeacherForm = ({type}: {type:"create" | "update"; data?: any}) => {

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return <form className='flex flex-col gap-8'>
    <h1></h1>
  </form>
}

export default TeacherForm