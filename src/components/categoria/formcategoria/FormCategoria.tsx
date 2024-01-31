import { useState, useEffect, ChangeEvent } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormCategoria() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria)
    }

    function retornar() {
        navigate("/categorias")
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria)
                alert('Categoria atualizada')
            } catch (error: any) {
                alert('Erro ao atualizar categoria')
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria)
                alert('Categoria cadastrada com sucesso!')
            } catch (error: any) {
                alert('Erro ao cadastrar categoria')

            }
        }
        setIsLoading(false)
        retornar()
    }


    return (
        <div className="container flex flex-col items-center justify-center mx-auto font-semibold">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Categoria' : 'Atualizar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria} >
                <div className="flex flex-col gap-2">
                    <label>Descrição da categoria</label>
                    <input
                        id="descricao"
                        type="text"
                        placeholder="Descrição"
                        name="nome"
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-rose-50 bg-rose-400 hover:bg-rose-950 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {isLoading ?
                        <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                        />
                        :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    }
                </button>
            </form>
        </div>
    )
}

export default FormCategoria