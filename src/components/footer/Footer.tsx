import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center  bg-emerald-600 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            FarmaJava | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/karina-camargo-araujo/" target="_blank">
                            <LinkedinLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/araujokahh" target="_blank">
                            <InstagramLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://github.com/araujokahh" target="_blank">
                            <GithubLogoIcon size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer