import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"
import Menu from "./Menu"
import Rodape from "./Rodape"

export default function Pagina(props: any) {
    const ano = new Date().getFullYear()
    return (
        <div className={`
            flex flex-col
            gap-4
            p-4
            h-screen
        `}>
            <Cabecalho 
                titulo={props.titulo}
                subtitulo={props.subtitulo}
            />
            
            <div className={`flex flex-1 gap-4`}>
            <Menu/>
                <Conteudo>
                    {props.children}
                </Conteudo>
            </div>
            <Rodape
            textoEsquerda="Feito com ❤️ por Rafael"
            textoDireita={`Desenvolvido em ${ano}`}
        />
        </div>
    )
}