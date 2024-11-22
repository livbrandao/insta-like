# Insta-Like  

Este é um projeto desenvolvido durante a **Imersão Dev Back-end** com o Alura, onde aprendemos a criar APIs e configurar servidores locais utilizando **Node.js** com o suporte do **Gemini**, a inteligência artificial do Google.  

O objetivo deste repositório é consolidar os conhecimentos adquiridos no curso e implementar uma API funcional, simulando funcionalidades de uma rede social simplificada.  

## 🚀 Funcionalidades  

- **Gerenciamento de Postagens:**  
  - Criação de postagens.  
  - Listagem de postagens.
  - Atualização de postagens. 

## 🌐 Hospedagem  

Este projeto foi implantado no **Google Cloud** e pode ser acessado publicamente.  

### URL da API:  
[https://insta-like-879917577056.southamerica-east1.run.app/posts](https://insta-like-879917577056.southamerica-east1.run.app/posts)  

Você pode utilizar ferramentas como Postman ou cURL para consumir os endpoints hospedados.  

## 🛠️ Tecnologias Utilizadas  

- **JavaScript**: Linguagem principal utilizada no desenvolvimento.
- **Node.js**: Configuração de servidores e manipulação do back-end.  
- **Express**: Framework minimalista para criação de APIs em Node.js.  
- **JSON Server** (ou qualquer outro banco de dados mockado usado no projeto).  
- **Gemini**: Inteligência artificial do Google para suporte ao desenvolvimento.  
- **Google Cloud Run**: Hospedagem do servidor.  

## 📂 Estrutura do Projeto   

/src  
  ├── controllers  
  ├── routes  
  ├── models  
  └── app.js  
/db  
  └── db.json  


- **`/src`**: Contém os arquivos principais da aplicação, incluindo rotas, controladores e modelos.  
- **`/db`**: Armazena os dados mockados em formato JSON.  

## 🚀 Como Executar  

1. Clone o repositório:  
   ```bash 
   git clone https://github.com/livbrandao/insta-like.git
   cd insta-like
   ```

2. Instale as dependências:
 ```bash
npm install
```

3. Inicie o servidor local:
 ```bash
npm run dev
```

4. O servidor estará disponível em:
 ```bash
http://localhost:3000
```

📝 Endpoints da API

Postagens
- GET /posts: Lista todas as postagens.
- POST /upload: Cria uma nova postagem.
- PUT / upload: Atualiza uma postagem existente.


🧑‍💻 Desenvolvido por
Livia Brandao
