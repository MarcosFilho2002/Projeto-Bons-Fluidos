# Projeto Bons Fluídos
## Repositório para o projeto da matéria Certificadora de Competência Identitária.

## 🛠 Ferramentas utilizadas para codificar, compilar e executar o projeto:
![Static Badge](https://img.shields.io/badge/Node-v16.20.0-brightgreen)  https://nodejs.org/download/release/v16.20.2/node-v16.20.2-win-x64.zip
<br>
![Static Badge](https://img.shields.io/badge/VScode-v1.84-blue)  https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user

## 🛠 Ferramentas para criar e hospedar a base de dados:
![Static Badge](https://img.shields.io/badge/MongoDB-v6.0.3-darkgreen)  https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-6.0.11.zip
<br>
![Static Badge](https://img.shields.io/badge/MongoDB%20Compass-v1.40.4-darkgreen)  https://downloads.mongodb.com/compass/mongodb-compass-1.40.4-win32-x64.exe

## 📚 Bibliotecas utilizadas para desenvolvimento:
![Static Badge](https://img.shields.io/badge/Express-v4.18.2-yellow)  https://expressjs.com
<br>
![Static Badge](https://img.shields.io/badge/ExpressHandlebars-v6.0.6-darkred)  https://github.com/handlebars-lang/handlebars.js
<br>
![Static Badge](https://img.shields.io/badge/Jsonwebtoken-v8.5.1-purple)  https://jwt.io
<br>
![Static Badge](https://img.shields.io/badge/Mongodb-v4.12.1-darkgreen)  https://mongodb.github.io/node-mongodb-native
<br>
![Static Badge](https://img.shields.io/badge/Nodemon-v2.0.20-orange)  https://nodemon.io

# Passos para rodar o projeto localmente:
1. Clone o projeto para uma pasta em sua máquina.
2. Abra um terminal dentro da pasta do projeto.
3. Certifique-se de ter todas as ferramentas necessárias para compilar e rodar o projeto.
4. Digite o comando "npm install".
5. Após a instalação das dependências, digite "npm start" para rodar o projeto.
6. O servidor inciará na porta:3000.
7. Abra um navegador e acesse <http://localhost:3000>.
8. Para interromper a excecução do projeto, no terminal, use o comando "ctrl+c".

## Usuários:
### Admin:
#### email: admin@admin
#### senha: 123
### Padrão:
#### email: user@user
#### senha: 123

# Passos para testar o sistema:
### Grupo 07
### O objetivo do sistema desenvolvido é gerenciar palestras, podendo-se vizualizar, agendar e desagendar.
#### Roteiro de Teste: Funcionalidade de Login
#### Objetivo: Verificar se o sistema de login funciona corretamente, permitindo que os usuários acessem suas contas de forma segura.
Pré-condições:
O sistema está online e acessível.

1. Teste de Login com Credenciais Válidas:
Ação: Acesse a página de login.
Ação: Insira um nome de usuário válido.
Ação: Insira uma senha válida.
Verificação: Confirme se o login é bem-sucedido.
Resultado Esperado: O usuário é redirecionado para a página principal.
2. Teste de Login com Credenciais Inválidas:
Ação: Acesse a página de login.
Ação: Insira um nome de usuário inválido.
Ação: Insira uma senha inválida.
Verificação: Confirme se uma mensagem de erro apropriada é exibida.
Resultado Esperado: O sistema não permite o login e exibe uma mensagem de erro.
3. Teste de Logout:
Ação: Faça login no sistema.
Ação: Localize e clique no botão de logout.
Verificação: Confirme se o usuário é desconectado com sucesso.
Resultado Esperado: O usuário é redirecionado para a página inicial.

#### Roteiro de Teste: Inclusão, vizualização e exclusão de Palestra
#### Objetivo: Verificar se a funcionalidade de inclusão de palestras no sistema está operando corretamente, permitindo que novas palestras sejam adicionadas.
Pré-condições:
O sistema está online e acessível.
O usuário possui as permissões adequadas para adicionar uma palestra.

1. Teste de Adição Básica de Palestra:
Ação: Realize o login com um usuário admin válido.
Ação: Acesse a área de agenda pelo botão de agenda de palestras.
Ação: Preencha os campos obrigatórios, como título, data, hora e local da palestra.
Verificação: Confirme se a palestra é adicionada com sucesso.
Resultado Esperado: A palestra é incluída no sistema e suas informações são exibidas corretamente.

2. Teste de vizualização de Palestra:
Ação: Realize o login com um usuário válido.
Verificação: Confirme se a palestra é adicionada com sucesso.
Resultado Esperado: A palestra e suas informações são exibidas.

3. Teste de Remoção de Palestra:
Ação: Realize o login com um usuário admin válido.
Ação: Acesse a área de agenda pelo botão de agenda de palestras.
Ação: Selecione uma palestra para remover pelo X no card da palestra.
Verificação: Confirme se a palestra é removida com sucesso.
Resultado Esperado: A palestra selecionada não é mais exibida no sistema após a remoção.