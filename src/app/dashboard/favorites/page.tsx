
import { SimplePokemon } from '@/pokemons/interfaces/simple-pokemon';
import { Pokemon } from '../../../components/Pokemon';
import { PokemonsResponse } from '@/pokemons/interfaces/pokemons-response';


export const metadata = {
 title: 'Favorites',
 description: 'fav description',
};



export default async function PokemonsPage() {

    const id = 10;
    return (
        <div className="flex flex-col">
            <span className="text-2xl my-2">FAVORITES<small> Estáticos</small></span>
            <div className="flex flex-wrap gap-10 items-center justify-center">
                {/* {pokemons.map(({id}: SimplePokemon, index: number) => {
                    return (
                        <Pokemon id={id} key={index} />
                    )
                })} */}
            </div>
        </div>
    );
}