import Pagina from '@/components/Pagina'

export default function TestePagina() {
    
    function executar() {
        console.log('O botão foi pressionado!')
    }

    return (
        <Pagina titulo="Minha Página" subtitulo="Estou na pasta pages">
            <button onClick={executar}
            className='botao'>
                Teste
            </button>
            
        </Pagina>
    )
}