FROM alpine:latest

RUN apk add --no-cache ca-certificates tzdata

WORKDIR /app

# Copia todos os arquivos do projeto para dentro da imagem
COPY . .

# Garante que o binário pocketbase seja executável
RUN chmod +x /app/pocketbase

EXPOSE 8080

CMD ["./pocketbase", "serve", "--http=0.0.0.0:8080"]
