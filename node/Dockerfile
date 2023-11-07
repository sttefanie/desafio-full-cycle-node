# Usa uma imagem existente como base
FROM node:14

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala quaisquer dependências
RUN npm install

# Instala o wget e limpa o cache do APT
RUN apt-get clean && apt-get update && apt-get install -y wget

# Copia o restante dos arquivos do projeto
COPY . .

EXPOSE 3000

# Define o comando a ser executado
CMD ["node", "index.js"]
