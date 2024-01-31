import image from "../../assets/Medical-Icons-First-Aid-Heart.svg"

function Home() {
    return (
        <div className="grid grid-cols-2 bg-rose-100 text-rose-950 w-screen">
            <div className="flex flex-col gap-6 items-center justify-center">
                <h1 className="text-5xl">Seja bem vinde!</h1>
                <p className="text-lg">Sua saúde em primeiro lugar!</p>
                <button className="rounded border-2 border-rose-950 w-1/5 py-2 hover:border-red-700 hover:text-red-700 font-semibold">Novo Produto</button>
            </div>
            <div id="imagem" className='flex justify-center py-8'>
                <img src={image}
                    alt="Logo Jogo"
                    className='w-2/3'
                />
            </div>

        </div>
    )
}

export default Home