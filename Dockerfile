# Use a imagem Node.js
FROM node:18 as build

# Copie o arquivo package.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Instale o Prisma CLI globalmente
RUN npm install prisma --global

# Gere os arquivos do Prisma

# Copie o restante do código-fonte para o diretório de trabalho
COPY . .

RUN npx prisma migrate deploy

RUN npx prisma generate
# Compile o código TypeScript
RUN npm run build

EXPOSE 8080

# Defina o comando padrão para iniciar o aplicativo
CMD [ "npm", "run", "start:prod" ]
