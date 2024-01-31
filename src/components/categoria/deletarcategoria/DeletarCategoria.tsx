import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";

function DeletarCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria)
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias")
    }

    async function deletarCategoria() {

        try {
            await deletar(`/categorias/${id}`)
            alert('Categoria excluída com sucesso!')

        }
        catch (error: any) {
            alert('Erro ao excluir categoria.')
        }
        retornar()
    }

    return (
        <div className='container w-1/3 mx-auto font-semibold'>
            <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-violet-700 text-white font-bold text-2xl'>Categoria</header>
                <p className='p-8 text-3xl bg-slate-800 text-slate-100 h-full'>{categoria.nome}</p>
                <div className="flex">
                    <button className='text-slate-950 bg-white-600 hover:bg-violet-600 w-full py-2'
                        onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-slate-600 hover:bg-violet-600 flex items-center justify-center'
                        onClick={deletarCategoria} >
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria