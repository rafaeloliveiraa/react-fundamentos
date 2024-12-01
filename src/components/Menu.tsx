import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <div className={`
            flex justify-start
            flex-col
            items-center
            bg-zinc-700
            rounded-lg
            text-3xl
            w-52
            p-2
            gap-2
        
        `}>
            <MenuItem texto ="Página #1" url="/fundamentos/pagina"/>
            <MenuItem texto ="Página #2" url="/pagina" />
        </div>
    )
}