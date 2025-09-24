import Image from "next/image"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
        {/* SEARCHBAR */}
        <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
            <Image src="/search.png" alt="" width={14} height={14}/>
            <input type="text" name="" placeholder="Search..." id="" className="w-[200px] p-2 bg-transparent outline-none"/>
        </div>
        {/* ICONS AND USER */}
        <div className="flex items-center gap-6 justify-end w-full">
            {/* Pesan */}
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                <Image src="/message.png" alt="" width={20} height={20} />
            </div>

            {/* Notifikasi */}
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                <Image src="/announcement.png" alt="" width={20} height={20} />
                <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
                1
                </div>
            </div>

            {/* User Info + Avatar */}
            <div className="flex items-center gap-2">
                <div className="flex flex-col text-right">
                <span className="text-xs leading-3 font-medium">Agung Septiana</span>
                <span className="text-[10px] text-gray-500">Admin</span>
                </div>
                <Image
                src="/avatar.png"
                alt="avatar"
                width={36}
                height={36}
                className="rounded-full"
                />
            </div>
        </div>

    </div>
  )
}

export default Navbar