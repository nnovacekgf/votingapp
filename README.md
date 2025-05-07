# Contador de Votos

Sistema interativo para contagem de votos em eleições sindicais ou outras votações organizacionais.

## Funcionalidades

- Upload de arquivo `.json` com cooperativas.
- Votação interativa com contagem automática.
- Visualização de votos "Favoráveis" e "Contrários".
- Estilo clean e responsivo.

## Como usar

1. Faça upload de um arquivo `.json` com a seguinte estrutura:

```json
[
  { "id": 1, "nome": "Cooperativa Exemplo", "filiacao": "Categoria A" },
  { "id": 2, "nome": "Outra Cooperativa", "filiacao": "Categoria B" }
]
```

2. Clique nos botões **Favorável** ou **Contrária** para computar votos.

3. O sistema atualiza automaticamente a contagem.

## Publicação

- Suba os arquivos no GitHub.
- Conecte o repositório ao Vercel.
- O Vercel identificará como projeto Vite.

Pronto para uso! 🎉