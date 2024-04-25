Api destinada para o fornecimento de dados e comunicação com os sistemas da humanizei.

Versão: 0.0.1

Esta api contem os seguints scripts, que devem ser comandados pelo comando npm run <script> sendo descritos abaixo:

-- RUN COMANDS -- 
dev : rodará a api em ambiente de desenvolvimento com as configurações que contiverem no arquivo .env

prod: Rodará a api em produção, criando um servico no pm2, que puxará as configurações do arquivo ecosystem.config.js

-- DATABASE COMANDS --

migrations: Fazerá que o prisma gerencie migrações do banco de dados, onde criará, aplicará e/ou desfazerá alterações no banco de dados

generate: gerará o código fonte para o prisma client, com base nos modelos de dados definidos no arquivo .schema.prisma

pull: O prisma cria os modelos no arquivo .schema.prisma atráves do banco de dados

seed: populará o banco de dados a partir de um arquivo de seeds do prisma

build: Cria o deploy para mandar para produção.



# Para instalar a api basta rodar um dos dois comandos abaixo:

1 - yarn ou npm


