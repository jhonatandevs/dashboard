import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import { Pokemon } from '../../components/Pokemon';

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());
    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))
    // TODO: Manejo de errores
    // throw new Error('Este es un error que no deberia suceder')
    return pokemons;
}

export default async function PokemonsPage() {
    const pokemons = await getPokemons(151);
    const id = 10;
    return (
        <div className="flex flex-col">
            <span className="text-2xl my-2">Listado de POKEMONS <small>Estáticos</small></span>
            <div className="flex flex-wrap gap-10 items-center justify-center">
                {pokemons.map(({id}: SimplePokemon, index: number) => {
                    return (
                        <Pokemon id={id} key={index} />
                    )
                })}
            </div>
        </div>
    );
}