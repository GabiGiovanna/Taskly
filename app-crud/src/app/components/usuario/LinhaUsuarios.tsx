import { Usuario } from "@/core/model/Usuarios";
import Image from "next/image";

export interface LinhaUsuarioProps {
  usuario: Usuario;
}

export default function LinhaUsuario(props: LinhaUsuarioProps) {
  return (
    <div className="flex bg-zinc-900 p-4 rounded-md">
      <Image
        src="https://i.pinimg.com/originals/ee/5f/3f/ee5f3fdeb24e18352077aad969ef5960.png"
        width={50}
        height={50}
        className="rounded-full"
        alt="avatar"
      />
      <div className="flex flex-col">
        <span>{props.usuario.nome}</span>
        <span className="text-sm text-zinc-400">{props.usuario.email}</span>
      </div>
    </div>
  );
}
