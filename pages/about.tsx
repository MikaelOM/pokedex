import style from "../styles/About.module.css"
import Image from "next/image"

export default function aboutPage() {
    return (
        <div className={style.about_page_container}>
            <h1>Sobre o Projeto</h1>
            <p> O projeto foi desenvolvido para aprender os principais conceitos de Next js.</p>
            <Image 
                src="/images/charizard.png" 
                width="300"
                height="300"
                alt="Charizard"
            />
        </div>
    )
}