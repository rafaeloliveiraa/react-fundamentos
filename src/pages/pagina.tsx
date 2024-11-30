import '../app/globals.css'
import Pagina from '@/components/Pagina'

export default function TestePagina() {
    const ano = new Date().getFullYear()
    return (
        <Pagina titulo="Minha Página" subtitulo="Estou na pasta pages">
            <button className='bg-blue-500 p-2 rounded-md'>
                Teste
            </button>
        </Pagina>
    )
}