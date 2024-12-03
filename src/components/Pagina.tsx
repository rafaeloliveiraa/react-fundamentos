import AreaLateral from "./AreaLateral"
import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"
import Rodape from "./Rodape"

interface PaginaProps {
    titulo: string
    subtitulo: string
    children: string
}

export default function Pagina(props: PaginaProps) {
    const ano = new Date().getFullYear()
    return (
        <div className="flex h-screen text-white">
            <AreaLateral />
            <div className="flex flex-col flex-1">
                <Cabecalho 
                titulo={props.titulo}
                subtitulo={props.subtitulo}
                className="h-16 bg-zinc-800"
                />
                <Conteudo>
                    {props.children}
                </Conteudo>
                <Rodape
                textoEsquerda="Feito com ❤️ por Rafael"
                textoDireita={`Desenvolvido em ${ano}`}
                />
            </div>

        </div>
    )
}