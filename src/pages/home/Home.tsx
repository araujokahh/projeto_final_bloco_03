

function Home() {
    return (
        <>
        
            <div className=" bg-emerald-600 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            FarmaJava!
                        </h2>
                        <p className='text-xl'>
                            Medicamento barato é aqui!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                {/* Nova Categoria */}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/yjyy0thaz/ChatGPT%20Image%202%20de%20jun.%20de%202025,%2018_48_34.png?updatedAt=1748900954873"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home