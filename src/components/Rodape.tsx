export default function Rodape(props: any) {
    return (
        <div className={`
            flex justify-between
            items-center
            px-10
            text-xl
            rounded-lg
            h-16
            bg-cyan-600
        `}>

        <span>{props.textoEsquerda}</span> 
        <span>{props.textoDireita}</span>  
        
        </div>

    )
}