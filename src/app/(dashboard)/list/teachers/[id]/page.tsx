import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import Performance from "@/components/Performance"
import Image from "next/image"
import Link from "next/link"

const SingleTeacherPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
        {/* left */}
        <div className="w-ful xl:w-2/3">
        
            {/* Top */}
            <div className="flex flex-col lg:flex-row gap-4">
                {/* User Info Card */}
                <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
                    <div className="w-1/3">
                        <Image src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?_gl=1*1lta9vs*_ga*MTc0NjgwOTQ0NC4xNzU5Mzc1MDc4*_ga_8JE65Q40S6*czE3NTkzNzUwNzgkbzEkZzEkdDE3NTkzNzUyMTMkajU1JGwwJGgw" alt="" width={144} height={144} className="w-36 h-36 rounded-full object-cover"/>
                    </div>
                    <div className="w-2/3 flex flex-col justify-between gap-4">
                        <h1 className="text-xl font-semibold">Agung Septiana</h1>
                        <p className="text-sm text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="flex items-center justify-between gap-2 text-xs flex-wrap font-medium">
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/blood.png" alt="" width={14} height={14} />
                                <span>A+</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/date.png" alt="" width={14} height={14} />
                                <span>October 2025</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/mail.png" alt="" width={14} height={14} />
                                <span>user@gmail.com</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/phone.png" alt="" width={14} height={14} />
                                <span>+1234 567</span> 
                            </div>
                        </div>
                    </div>
                </div>
                {/* Small Cards */}
                <div className="flex-1 flex justify-between flex-wrap gap-4">
                    {/* Card */}
                    <div className="bg-white p-4 rounded-md flex w-full gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                        <Image src="/singleAttendance.png" alt="" width={24} height={24} className="w-6 h-6" />
                        <div className="">
                            <h1 className="text-xl font-semibold">90%</h1>
                            <span className="text-sm text-gray-400">Attendance</span>
                        </div>
                    </div>
                    {/* Card */}
                    <div className="bg-white p-4 rounded-md flex w-full gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                        <Image src="/singleBranch.png" alt="" width={24} height={24} className="w-6 h-6" />
                        <div className="">
                            <h1 className="text-xl font-semibold">2</h1>
                            <span className="text-sm text-gray-400">Branches</span>
                        </div>
                    </div>
                    {/* Card */}
                    <div className="bg-white p-4 rounded-md flex w-full gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                        <Image src="/singleLesson.png" alt="" width={24} height={24} className="w-6 h-6" />
                        <div className="">
                            <h1 className="text-xl font-semibold">6</h1>
                            <span className="text-sm text-gray-400">Lessons</span>
                        </div>
                    </div>
                    {/* Card */}
                    <div className="bg-white p-4 rounded-md flex w-full gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                        <Image src="/singleClass.png" alt="" width={24} height={24} className="w-6 h-6" />
                        <div className="">
                            <h1 className="text-xl font-semibold">6</h1>
                            <span className="text-sm text-gray-400">Classes</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
                <h1>Teacher&apos;s Schedule</h1>
                <BigCalendar />
            </div>

            


        </div>
        {/* right */}
        <div className="w-ful xl:w-1/3 flex flex-col gap-4">
            <div className="bg-white p-4 rounded-md">
                <h1 className="text-xl font-semibold">Shortcuts</h1>
                <div className="mt-4 flex gap-4 text-xs flex-wrap text-gray-500">
                    <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">Teacher&apos;s Classes</Link>
                    <Link className="p-3 rounded-md bg-lamaPurpleLight" href="/">Teacher&apos;s Students</Link>
                    <Link className="p-3 rounded-md bg-lamaYellowLight" href="/">Teacher&apos;s Lessons</Link>
                    <Link className="p-3 rounded-md bg-pink-50" href="/">Teacher&apos;s Exams</Link>
                    <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">Teacher&apos;s Assignments</Link>
                </div>
            </div>
            <Performance />
            <Announcements />
        </div>
    </div>
  )
}

export default SingleTeacherPage