export default function Cabecalho(props: any) {
    return (
        <div className={`
            flex flex-col 
            justify-center 
            items-center
            h-24
            bg-purple-500
            rounded-lg
        `}>
            <h1 className={`
                text-3xl
                font-black
                `}>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
        </div>
    )
}