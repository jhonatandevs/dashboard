import React from 'react'
import { SimplePokemon } from '../pokemons/interfaces/simple-pokemon';
import Image from 'next/image';
import Link from 'next/link';
import { IoHeart } from 'react-icons/io5';

interface Props {
  id: string
}
const getPokemon = async (id = '1'): Promise<SimplePokemon> => {
  const data: any = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json());
  const pokemon = {
    id: data.id,
    image: data.sprites.other.dream_world.front_default || '',
    name: data.name
  }
  return pokemon;
}
interface ImageProps{
  src:string,
  width:number,
  quality?:number
}

export const Pokemon = async ({ id }: Props) => {
  const pokemon = await getPokemon(id);
  return (
    <>
      <div className="mx-auto right-0 mt-2 w-60">
        <div className="bg-white rounded overflow-hidden shadow-lg">
          <div className="text-center p-6 bg-gray-800 border-b">
            <Image priority={false} src={pokemon.image!} className="h-28 w-28 text-white rounded-full mx-auto" width={40} height={40} alt={`image-card-${pokemon.name}`}></Image>
            <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{pokemon.name}</p>
            <p className="text-sm text-gray-100">{pokemon.id}</p>
            <div className="mt-5">
              <Link href={`pokemon/${id}`}
                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              >
                Detail
              </Link>
            </div>
          </div>
          <div className="border-b">
            <Link href="/account/campaigns" className="px-4 py-2 hover:bg-gray-100 flex">

              <div className="text-red-500">
            <IoHeart/>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  Favorito
                </p>
                <p className="text-xs text-gray-500">View your campaigns</p>
              </div>

            </Link>
            
          </div>
        </div>
      </div>
    </>
  )
}
