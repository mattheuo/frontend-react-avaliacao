# --- Estágio de Desenvolvimento e Build ---
FROM node:20-alpine AS build

WORKDIR /app

# Copia os arquivos de dependências primeiro (aproveita o cache do Docker)
COPY package*.json ./

RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Cria a versão de produção do React
RUN npm run build

# --- Estágio de Produção ---
FROM nginx:alpine

# Copia os arquivos buildados do estágio anterior para o diretório do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 80 para o tráfego web
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]