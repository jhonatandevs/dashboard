import { SimplePokemon } from '@/pokemons';
import { createSlice } from '@reduxjs/toolkit'

interface PokemonsState{
  [key:string]:SimplePokemon
}
const initialState = {
'1':{id:'1',name:'bulbasaur'}
}

const PokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {}
});

export const {} = PokemonsSlice.actions

export default PokemonsSlice.reducer