import { FirstAid, ShoppingCart, UserCircle } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <div className="px-6 py-4 text-lg bg-rose-950 text-rose-50 font-semibold w-screen">
                <div className="flex justify-between">

                    <Link to={'/'} className="flex gap-5 text-2xl"> <FirstAid size={34}></FirstAid> Farmácia Primavera</Link>
                    <input className="border w-1/3 rounded px-2 py-1 font-normal text-black" type="text" placeholder="Pesquisar" />
                    <div className="flex gap-4">
                        <div className="cursor-pointer hover:underline">Produtos</div>
                        <Link to={`/categorias`} className="hover:underline">Categorias</Link>
                        <Link to={`/cadastrarcategoria`} className="hover:underline">Nova Categoria</Link>
                        <UserCircle size={30} className="cursor-pointer">Perfil</UserCircle>
                        <ShoppingCart size={30} className="cursor-pointer">Carrinho</ShoppingCart>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar