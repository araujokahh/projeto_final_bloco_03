import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-emerald-600 text-white'>

                <div className="container flex justify-between text-lg">

                    <Link to='/home' className="text-2xl font-bold">FarmaJava</Link>

                    <div className='flex gap-4'>
                        <Link to='/categoria' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar categoria</Link>


                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar

