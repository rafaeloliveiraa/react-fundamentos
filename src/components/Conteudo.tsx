export default function Conteudo(props: any) {
    console.log(props)
    return (
        <div className={`
            flex
            items-start
            flex-1
            text-3xl
            rounded-lg
            bg-emerald-500
            p-4
        `}>
            {props.children}
        </div>
    )
}