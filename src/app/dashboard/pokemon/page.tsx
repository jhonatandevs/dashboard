interface Props{
  id:string;
}
export default function PokemonPage({id}:Props) {
  console.log(id)
  return (
    <div>
      <h1>DetailPage</h1>
    </div>
  );
}