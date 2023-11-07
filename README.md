# Cartão Fidelidade Barbearia

![GitHub repo size](https://img.shields.io/github/repo-size/raylanderguimaraes/loyalty-barbershop?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/raylanderguimaraes/loyalty-barbershop?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/raylanderguimaraes/loyalty-barbershop?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/github/issues/raylanderguimaraes/loyalty-barbershop?style=for-the-badge)
![GitHub open pull requests](https://img.shields.io/github/issues-pr-raw/raylanderguimaraes/loyalty-barbershop?style=for-the-badge)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Raylander%20Guimarães%20Ramos-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/raylander-guimar%C3%A3es-ramos-3ab363222/)

<img src="./imagens_layout/Captura de tela 2023-11-06 095041.png">
<img src="./imagens_layout/Captura de tela 2023-11-07 151157.png">

O app em desenvolvimento se trata de um cartão fidelidade digital, pensando em resolver o problema de uma barbearia, no qual faz seu controle de corte grátis dos clientes que acumulam carimbos em seus cartões físicos na barbearia, ao juntar 10 cortes o cliente ganha um corte grátis.
A idéia é construir uma aplicação no qual o dono da barbearia consiga fazer o controle desses cartões de forma digital, onde ele terá acesso a cadastrar novos clientes, editar suas informações e quantidade de cortes e excluir os clientes;
O cliente por sua vez terá acesso ao seu cartão pessoal podendo conferir alí quantos cortes já tem acumulado e quantos faltam para receber o bônus do programa de fidelidade;

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Estruturar backend API REST
- [x] Criar Lógica de Login e Autenticação
- [ ] Desenvolver Versão Mobile
- [ ] Integrar Versão Mobile com Backend

### Construído com

- [![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [![Node.js](https://img.shields.io/badge/Node.js-14.x-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
- [![MySQL](https://img.shields.io/badge/MySQL-8.x-4479A1?style=for-the-badge&logo=mysql)](https://dev.mysql.com/doc/)
- [![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express)](https://expressjs.com/)

<!-- GETTING STARTED -->

## Getting Started

Para consguir iniciar o projeto é necessário ter o Node e o nmp instalados em sua máquina.

### Pré-requisitos

Tendo o node instalado utilize o comando abaixo para instalar a versão mais recente e estável o npm.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Instalação

- Instruções para Backend, siga os passos estando no diretório backend.

1. Clone o repositório
   ```sh
   git clone https://github.com/raylanderguimaraes/loyalty-barbershop.git
   ```
2. Instale os pacotes NPM
   ```sh
   npm install
   ```
3. Crie suas variáveis de ambiente
   ```env
   PORT=
   MYSQL_HOST=
   MYSQL_USER=
   MYSQL_PASSWORD=
   MYSQL_DB=
   SECRET=
   ```
4. Rode em ambiente de desenvolvimento
   ```
   npm run dev
   ```
