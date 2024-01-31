import { Link } from "react-router-dom"
import Produto from "../../../models/Produto"

interface CardProdutoProps {
    produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {
    return (
        <div className='flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg '>
            <header className='py-2 px-6 bg-rose-950 text-rose-50 font-semibold text-lg text-center'>
                {produto.nome}
            </header>
            <div className="flex justify-center flex-col items-center gap-3 p-6 text-lg bg-rose-50 text-rose-950 h-full font-semibold">                               
                <img src={produto.foto} alt='Imagem do produto ${produto.nome}' className="w-28"/>
                <p className=''>{produto.categoria?.nome}</p>
                <p className=''>R$ {produto.preco}</p>
                
            </div>


            <div className="flex bg-rose-700 justify-center font-semibold">
                <Link to={`/editarproduto/${produto.id}`} className="flex justify-center text-rose-950 bg-white border-white border-solid px-4 py-2 hover:bg-rose-200 w-full">
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${produto.id}`} className="rounded text-white border-white border-solid px-4 py-2 hover:bg-rose-950
         w-full flex justify-center">
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardProduto