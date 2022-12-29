import Link from "next/link"

import Image from "next/image"
import styles from "../styles/Cards.module.css"

interface Pokemon {
    name: string
    id: string
}

export default function Card({name, id}: Pokemon) {
    return (
        <div className={styles.card}>
            <Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                width="180"
                height="180"
                alt={`Pokemon ${name} image`}
            />
            <p className={styles.id}>#{id}</p>
            <h3 className={styles.title}>{name}</h3> 
            <Link href={`/pokemon/${id}`} className={styles.btn}>Detalhes</Link>
        </div>
    )
}