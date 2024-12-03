interface RodapeProps {
    textoEsquerda: string
    textoDireita: string
}

export default function Rodape(props: RodapeProps) {
    return (
        <div className={`
            flex justify-between
            items-center
            px-10
            text-base
            h-16
            border-t 
            text-zinc-500
            bg-zinc-900
            border-zinc-800
        `}>

        <span>{props.textoEsquerda}</span> 
        <span>{props.textoDireita}</span>  
        
        </div>

    )
}