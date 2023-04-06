import Image from 'next/image'

import { 
    pokemonProperties, 
    PropertiesPokemonSpecific,
    pokemonType,
    propertiesPokemonPage
} from '../../utils/types'
import styles from '../../styles/PokemonPage.module.css'

export const getStaticPaths = async() => {

    const maxPokemons = 51 
    const api = 'https://pokeapi.co/api/v2/pokemon/'
  
    const res = await fetch(`${api}?limit=${maxPokemons}`)
    const data = await res.json()

    const paths = data.results.map(( pokemon: pokemonProperties, index: number) => {
        return {
            params: {pokemonId: (index + 1).toString()},
        }
    })
    
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context: propertiesPokemonPage) => {    
    const id = context.params.pokemonId
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await res.json()

    return {
        props: { pokemon: data }
    }

}
export default function Pokemon( { pokemon }: PropertiesPokemonSpecific){
    return (
        <div className={styles.pokemon_container}>
            <Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width="200"
                height="200"
                alt={`${pokemon.name} Image`}
            />
            <h1 className={styles.title}>{pokemon.name}</h1>
            <div className={styles.type_container}>
                    <h4>Type:</h4>
                    <div className={styles.types_items_container}>
                        {pokemon.types.map((item: pokemonType, index: number) => (
                            <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>
                        ))}
                    </div>
            </div>
            <div className={styles.data_container}>
                <div className={styles.id_container}>
                    <h4>ID:</h4>
                    <p>#{pokemon.id}</p>
                </div>
                <div className={styles.data_height}>
                    <h4>Altura:</h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div className={styles.data_weight}>
                    <h4>Peso:</h4>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
        </div>
    )
}