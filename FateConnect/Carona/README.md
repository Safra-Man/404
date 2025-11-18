# Microsserviço de Caronas - FateConnect

Este é um dos microsserviços de back-end para o projeto FateConnect, focado no gerenciamento de caronas.
Ele é construído em .NET 8 na arquitetura Domain-Driven Design (DDD).

---

## Funcionalidades Principais

* **CRUD de Caronas:** Criação, Leitura, Atualização e Desativação (Soft Delete).

---

## Tecnologias Utilizadas

* **.NET 8** (SDK)
* **ASP.NET Core 8:** API RESTful.
* **Entity Framework Core 8:** ORM (com Npgsql para PostgreSQL).
* **PostgreSQL:** Banco de dados relacional.
* **Swashbuckle:** Documentação Swagger.
* **DotNetEnv:** Gerenciamento de variáveis de ambiente.
* **dotnet-ef:** Ferramenta de Migrations.

---

## Como Rodar o Projeto

Siga estes passos para configurar e executar a aplicação localmente.

### 1. Pré-requisitos

* [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
* [DBeaver](https://dbeaver.io/download/)

### 2. Clonar o Repositório

git clone [https://github.com/Safra-Man/404.git](https://github.com/Safra-Man/404.git)

### 3. Configurar as Variáveis de Ambiente

Este projeto usa um arquivo `.env` para carregar "segredos", como a string de conexão do banco. Portanto, solicite a um dev este arquivo.
Com o arquivo em mãos, cole-o na raiz da pasta Carona (FateConnect/Carona).

### 4. Restaurar Pacotes e Ferramentas

Estes comandos restauram os pacotes e as ferramentas locais listadas nos arquivos de projeto.
Com o terminal posicionado na raiz da pasta carona (FateConnect/Carona), execute esses comandos:

dotnet restore

dotnet tool restore

### 5. Executar a Aplicação
Ainda na pasta "Api", execute esse comando:

dotnet run

### 6. Acessar a API
Abra seu navegador e acesse a documentação do Swagger para testar os endpoints:
http://[localhost:5123/swagger](http://localhost:5240/swagger/index.html)
