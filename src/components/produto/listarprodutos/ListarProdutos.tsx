import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import Produto from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import CardProduto from "../cardproduto/CardProduto";

function ListarProdutos() {

    const [produtos, setProdutos] = useState<Produto[]>([]);

    async function listarCategorias() {
        await buscar('/produtos', setProdutos)
    }

    useEffect(() => {
        listarCategorias();
    }, [produtos.length])

    return (
        <>
            {produtos.length === 0 && (
                <TailSpin
                    visible={true}
                    height="200"
                    width="auto"
                    color="red"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        <>
                            {produtos.map((produto) => (
                                <>
                                    <CardProduto key={produto.id} produto={produto} />
                                </>
                            ))}
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarProdutos