import Image from "next/image"
import { IoBrowsersOutline, IoCalculator, IoLogoReact } from "react-icons/io5";
import SidebarMenuItem from "./SidebarMenuItem";
const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40} />,
        title: 'Dashboard',
        subtite: 'visualizacion'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={40} />,
        title: 'Counter',
        subtite: 'Contador Client Side'
    },
]
export const Sidebar = () => {
    return (
        <div id="menu"
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll"
            style={{ width: '400px' }}
        >
            <div id="logo" className="my-4 px-6">
                <h1 className="text-lg md:text-2xl font-bold text-white flex">
                    <IoLogoReact className="mr-2" />
                    <span>Dash</span>
                    <span className="text-blue-500">8</span>.
                </h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>

                        <Image
                            className="rounded-full w-8 h-8"
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                            alt={'profile-image'}
                            width={50}
                            height={50} />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Jhonatan Zuniga
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
                {menuItems.map((item, index) => {
                    return (
                        <SidebarMenuItem
                            key={index + item.title}
                            title={item.title}
                            subtitle={item.subtite}
                            icon={item.icon}
                            path={item.path}
                        />
                    )
                })}


            </div>
        </div>
    )
}
