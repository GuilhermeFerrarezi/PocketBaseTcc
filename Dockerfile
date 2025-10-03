FROM alpine:latest

# Instala dependências mínimas
RUN apk add --no-cache ca-certificates tzdata unzip

# Cria a pasta da aplicação
WORKDIR /app

# Copia tudo para dentro do container
COPY . .

# Dá permissão de execução para o binário do PocketBase
RUN chmod +x /app/pocketbase

# Expõe a porta (Railway define via ${PORT})
EXPOSE 8080

# Comando para rodar o PocketBase (usa sh -c para expandir ${PORT})
CMD sh -c "./pocketbase serve"

