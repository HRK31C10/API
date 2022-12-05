## Criação de API simples com CRUD

* Criar frase
* Listar frase
* Atualizar frase
* Deletar frase

# Para instalar as dependências rode o comando
`npm install`

# Crie o banco de dados abaixo:
Create table `frases`(
    `id` int(11) not null,
    `autor` varchar(100) not null,
    `txt` text not null
)

# Para rodar o projeto rode o comando
`npm run start`