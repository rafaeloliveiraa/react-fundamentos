interface ValorProps {
    texto: string
}

export default function Valor(props: ValorProps) {
    return (
        <div className="bg-yellow-800 text-8xl font-black p-4 rounded-md">
            {props.texto}
        </div>
    )
}