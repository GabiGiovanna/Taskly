import usuarios from "@/app/data/constants/usuarios";
import LinhaUsuario from "./LinhaUsuarios";
import { Usuario } from "@/core/model/Usuarios";

export default function ListaUsuario() {
  return (
    <div className="flex flex-col gap-2">
      {usuarios.map((usuario: Usuario) => {
        return <LinhaUsuario key={usuario.id} usuario={usuario} />;
      })}
    </div>
  );
}
