import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"
import Menu from "./Menu"
import Rodape from "./Rodape"

export default function Pagina(props: any) {
    const ano = new Date().getFullYear()
    return (
        <div className="flex gap-4 p-4 h-screen">
            <Menu/>
            <div className="flex flex-col flex-1 gap-4">
                <Cabecalho 
                titulo={props.titulo}
                subtitulo={props.subtitulo}
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