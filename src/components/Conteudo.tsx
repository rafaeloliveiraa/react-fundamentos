interface ConteudoProps {
    children: any
}
export default function Conteudo(props: ConteudoProps) {
    console.log(props)
    return (
        <div className={`
            flex
            items-start
            flex-1
            text-3xl
            bg-zinc-900
            p-4
        `}>
            {props.children}
        </div>
    )
}