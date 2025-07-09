# ✅ Taskly

🧠 Um gerenciador de tarefas minimalista desenvolvido com [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/) + [Prisma ORM](https://www.prisma.io/).  
Ideal para praticar os conceitos de **CRUD**, **rotas full-stack**, e integração com banco de dados.  
💡 Inspirado no tutorial de [Matheus Fraga (DevFraga)](https://www.youtube.com/watch?v=mikoTbhH_Qg)

---

## 🚀 Tecnologias Utilizadas

- ⚛️ Next.js
- 🧪 TypeScript
- 🔄 Prisma ORM
- 🐘 PostgreSQL ou SQLite (escolha na `.env`)
- 💅 Tailwind CSS (opcional)
- ☁️ Deploy-ready (Vercel ou outro)

---

## ✨ Funcionalidades

- ✅ Criar tarefas
- 📋 Listar tarefas
- 🖊️ Editar tarefas
- 🗑️ Deletar tarefas

---

## 🧰 Como rodar o projeto localmente

```bash
# 1️⃣ Clone o repositório
git clone https://github.com/seu-usuario/taskly.git

# 2️⃣ Acesse a pasta do projeto
cd taskly

# 3️⃣ Instale as dependências
npm install

# 4️⃣ Configure o banco de dados
npx prisma migrate dev --name init

# 5️⃣ Inicie o servidor de desenvolvimento
npm run dev
