FROM alpine:latest

# Instala dependências mínimas
RUN apk add --no-cache ca-certificates tzdata

# Cria a pasta da aplicação
WORKDIR /app

# Copia tudo para dentro do container
COPY . .

# Expõe a porta (Railway define via ${PORT})
EXPOSE 8080

# Comando para rodar o PocketBase
CMD ["./pocketbase", "serve", "--http=0.0.0.0:${PORT}"]

RUN chmod +x /app/pocketbase