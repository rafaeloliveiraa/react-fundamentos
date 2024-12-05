import { useState } from 'react';
import '../../app/globals.css'
import Pagina from "@/components/Pagina";
import { IconMinus, IconPlus } from '@tabler/icons-react';


export default function PaginaContador() {
    const [num, setNum] = useState(0)
    const [delta, setDelta] = useState(1)

    function decrementarDelta() {
        setDelta(delta - 1)
    }

    function incrementarDelta() {
        setDelta(delta + 1)
    }

    function decrementar() {
        setNum(num - delta)
    }

    function incrementar() {
        setNum(num + delta)
    }

    return (
        <Pagina titulo="Contador" subtitulo="Capítulo Estado">
            <div className='flex flex-col gap-5 justify-center items-center w-full h-full'>
                <div className='text-7xl font-black'>{num}</div>
                <div className='flex gap-5'>
                    <button onClick={decrementar} className='bg-blue-500 rounded-full p-4'>
                        <IconMinus size={30} />
                    </button>
                    <button onClick={incrementar} className='bg-blue-700 rounded-full p-4'>
                        <IconPlus size={30} />
                    </button>
                </div>

                <div className='flex gap-4'>

                    <button onClick={decrementarDelta} className=' flex justify-center items-center bg-purple-500 rounded-full w-9 h-9'>
                        <IconMinus size={16} />
                    </button>

                    <span>{delta}</span>

                    <button onClick={incrementarDelta} className=' flex justify-center items-center bg-purple-700 rounded-full w-9 h-9'>
                        <IconPlus size={16} />
                    </button>

                </div>
            </div>

        </Pagina>
    )
}