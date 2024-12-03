import { IconBrandReact } from "@tabler/icons-react";

export default function Logo() {
    return (
        <div className="flex items-center px-5 font-black h-16 gap-2.5 bg-purple-700">
            <span><IconBrandReact size={30} stroke={1}/></span>
            <span className="text-2xl">React</span>
        </div>
    )
}