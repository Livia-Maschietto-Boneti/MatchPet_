# API REST do MatchPet

O backend agora disponibiliza uma API REST em `http://localhost:8080/api/pets`.

## Rotas

| Método | Rota | Ação |
|---|---|---|
| GET | `/api/pets` | Lista os pets por nome |
| GET | `/api/pets/{id}` | Busca um pet |
| POST | `/api/pets` | Cadastra um pet |
| PUT | `/api/pets/{id}` | Atualiza um pet |
| DELETE | `/api/pets/{id}` | Exclui um pet |

## Exemplo de cadastro

```json
{
  "name": "Amora",
  "species": "Cachorro",
  "breed": "Vira-lata",
  "age": 2,
  "size": "Médio",
  "sex": "Fêmea",
  "city": "Maringá",
  "state": "PR",
  "image": "https://exemplo.com/amora.jpg",
  "description": "Carinhosa e brincalhona.",
  "shelter": "ONG Exemplo",
  "status": "Pronta para adoção",
  "ageGroup": "adulto",
  "traits": ["Carinhosa", "Vacinada"]
}
```

## Como executar

1. Configure `MONGODB_URI` se o MongoDB não estiver em `mongodb://localhost:27017/matchpet`.
2. Execute `./mvnw spring-boot:run` (Windows: `mvnw.cmd spring-boot:run`).
3. Teste `GET http://localhost:8080/api/pets`.

O modo CLI foi desativado por padrão para que o processo permaneça executando como servidor HTTP. A classe `MatchPetCli` foi mantida no projeto.

A API aceita chamadas de origens locais comuns do Live Server (`localhost:5500`, `127.0.0.1:5500`) e `localhost:3000`. Se o frontend usar outra porta, ajuste a anotação `@CrossOrigin` do `PetController`.

Nesta primeira etapa, o campo `image` recebe uma URL. O upload de arquivos locais será tratado em uma etapa seguinte.
