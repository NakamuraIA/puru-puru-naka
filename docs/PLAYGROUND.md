# Cantinho e brincadeiras do pururu

Ideias aprovadas em 30/09/2026. Esta lista registra o escopo completo pedido pelo usuário.

## O que foi acrescentado

- Mais sabores: café, mel, matcha, pêssego, chocolate e coco, além dos seis atuais.
- Temas de fundo: banheiro original, cozinha, jardim e ateliê.
- Expressões: feliz, emburrado, surpreso, carinhoso, piscadinha e sono.
- Ações: pular, dançar, rodopiar, espirrar, cochilar e abraçar a companhia.
- Personalidade por sabor, afetando reações e movimentos de descanso.
- Sequências de interação: várias cutucadas deixam o pururu emburrado; carinho o acalma.
- Objetos: esponja para brincar e pular, bolhas para estourar e gelo para arrastar e empurrar.
- Modo dupla: dois pururus com colisão, interação direta e abraço.
- Modo foto: escolher uma pose, esconder a interface e baixar a imagem da cena.
- Memória neste navegador: total de plocs, sabor, fundo, som e idioma escolhidos.

Os nomes e a seleção inicial são decisões de implementação; o catálogo pode crescer depois.

## Etapas e critérios de conclusão

### 1. Memória e catálogo

- [x] Guardar o contador sem perder os plocs ao recarregar.
- [x] Tratar dados inválidos e navegador com armazenamento indisponível.
- [x] Restaurar o sabor e o tema sem contar uma interação durante a inicialização.
- [x] Acrescentar seis sabores e personalidades, nos cinco idiomas existentes.

### 2. Cantinho e reações

- [x] Mudar o fundo e a superfície da cena com quatro temas reconhecíveis.
- [x] Ter um painel Brincar acessível, com controles que cabem no celular.
- [x] Mostrar as novas expressões no rosto e executar as ações no corpo.
- [x] Reagir a cutucadas repetidas e a carinho, respeitando movimento reduzido.

### 3. Brincadeiras e fotos

- [x] Escolher bolhas, esponja e gelo no painel e interagir por toque ou mouse na cena.
- [x] Ativar/desativar um segundo pururu, com toque, colisão e abraço.
- [x] Escolher uma pose e gerar um PNG sem botões, com prévia e link para baixar.
- [x] Manter uma quantidade limitada de objetos e liberar os recursos removidos.

### 4. Conferência e publicação

- [x] Testar persistência, armazenamento inválido e primeira visita sem contador salvo.
- [x] Conferir os novos fluxos no navegador, incluindo celular e troca de idioma.
- [x] Verificar build, idiomas e isolamento do dist.
- [x] Atualizar a master e publicar somente o site gerado na release da Square Cloud.

## Organização do código

Estado persistente em `src/core/storage.js`; catálogos em `src/data/`; ações e
companhia em `src/slime/`; objetos e temas em `src/scene/`; painel e foto em
`src/ui/`. A composição continua em `src/app.js`. A física atual foi reaproveitada.

O contador é salvo neste navegador, sem conta ou sincronização entre aparelhos.
A origem do site e os arquivos compactados de produção continuam os mesmos.

## Fluxo de atualização

Desenvolver na master → conferir e salvar o código → `npm run release` →
release com conteúdo de dist na raiz → deploy automático da Square Cloud.

## Evidências da revisão

- `npm test`: 9 testes aprovados; imports resolvidos, cinco idiomas com 90 chaves
  e dist limitado aos sete arquivos de produção, sem fontes ou source maps.
- Persistência: plocs, café e jardim continuaram após recarregar; ações automáticas
  e restauração das preferências não somam plocs.
- Armazenamento: testes cobrem JSON inválido, valores fora do catálogo,
  armazenamento bloqueado, limite do contador e duas instâncias abertas.
- Celular: revisão em 403 × 900 e 320 × 720; som e painel dentro da tela.
- Brincadeiras: companhia, abraço, escolha de quem recebe a ação, bolha por toque,
  esponja e arraste real do gelo conferidos no navegador.
- Foto: PNG de 403 × 900 decodificado e inspecionado, com os dois pururus inteiros
  e sem interface. A captura mostra uma prévia e mantém um link para salvar.
- Física: geometria da companhia alinhada ao chão, buffers independentes e
  simulação verificada; tempo do loop conferido a 30 e 60 quadros por segundo.

O navegador de testes incorporado não devolveu um evento de download para o
link blob. O PNG foi verificado pela imagem carregada na própria página; salvar
pelo gerenciador de arquivos do celular continua sendo uma conferência manual.

## Publicação conferida

- Código: `812a3a2` na master; site gerado: `55f0aed` na release existente.
- A integração nativa da Square Cloud fez o deploy em
  https://pururunaka.squareweb.app/.
- JS `app-2005d449a6fa.js` e CSS `styles-db333ddf23b6.css` no domínio real
  são idênticos, byte por byte, aos arquivos de dist.
- `/src/app.js`, `/styles/responsive.css` e o caminho de source map retornam
  HTML de erro, sem o código. A Square Cloud responde esse HTML com HTTP 200.
- Na versão publicada, matcha, cozinha, companhia e um ploc foram restaurados
  após recarregar; abraço e troca para ateliê também foram conferidos. Nenhum
  erro ou aviso de console foi observado nesses fluxos.
