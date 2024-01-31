import { TailSpin } from "react-loader-spinner";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";
import { useEffect, useState } from "react";

function ListarCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function listarCategorias() {
        await buscar('/categorias', setCategorias)
    }

    useEffect(() => {
        listarCategorias();
    }, [categorias.length])

    return (
        <>
            {categorias.length === 0 && (
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <>
                            {categorias.map((categoria) => (
                                <>
                                    <CardCategoria key={categoria.id} categoria={categoria} />
                                </>
                            ))}
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarCategorias