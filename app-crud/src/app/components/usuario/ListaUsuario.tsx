import usuarios from "@/app/data/constants/usuarios";

export default function ListaUsuario() {
  return <div className="flex flex-col">{usuarios.map()}</div>;
}
