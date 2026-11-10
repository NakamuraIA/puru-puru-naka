# Aurora e ajustes mobile

Correções integradas de `pururu-aurora-corrigido.zip` em 01/10/2026.

## Sabor Aurora

O material transmite mais luz e aplica as cores em todo o corpo, incluindo o
topo. O brilho branco foi reduzido para não encobrir o arco-íris. O rosto e
as expressões continuam no mesmo shader.

## Qualidade da cena

A resolução máxima continua em DPR 2, com antialiasing, reflexos,
transmissão, materiais e a mesma quantidade de vértices. A física mantém
o passo de 1/240 s. Não há redução automática de qualidade.

## Trabalho evitado

- As normais da malha usam os buffers diretamente, com o mesmo cálculo
  ponderado pela área dos triângulos usado pelo Three.js. Os testes comparam
  os resultados em malhas deformadas de detalhe 10, 20 e 26.
- Frames sem passo de física e poses de foto não recalculam a geometria.
- Ao levantar o dedo, o ponteiro deixa de fazer raycasting a cada frame.
- A lista de personagens, as chaves da paleta e a lista de interseções são
  reutilizadas; o painel fechado não atualiza seu DOM a cada ploc.
- A página oculta cancela o loop. Ao voltar, o relógio recomeça sem tentar
  recuperar o tempo ausente. Interações e pulos pendentes são cancelados.
- Eventos de resize são agrupados por frame; dimensões repetidas não
  repintam o cenário nem realocam os buffers de renderização.
- Os recursos temporários da geração do ambiente de iluminação são liberados.

## Controles e layout

O término da pinça, o cancelamento do toque e a perda da captura do ponteiro
liberam a interação. Os botões de som e Brincar têm pelo menos 44 px de altura.
Os selects em dispositivos de toque usam fonte de 16 px, e o seletor de idioma
ocupa a altura do controle. As bordas respeitam as áreas seguras da tela.

O painel e os controles de foto usam a altura dinâmica da viewport e permitem
rolagem interna. Telas baixas em retrato têm título compacto; em paisagem baixa,
o texto introdutório e as dicas cedem espaço à cena. A barra de sabores mantém
rolagem horizontal.

## Verificação

```sh
npm test
node tools/benchmark-normals.mjs
```

Em 01/10/2026, `npm test` passou nos 12 testes, incluindo paridade das normais,
pausa e retomada do loop, eventos de toque, pinça e perda de captura. Os
controles e o layout foram inspecionados no navegador em 320 × 568,
390 × 844 e 844 × 390, com ponteiro de toque emulado. Não houve overflow
horizontal; som e Brincar permaneceram dentro da tela. O painel curto permite
rolagem interna.

A Aurora foi comparada visualmente com a versão anterior: cores em todo o
corpo, transparência e rosto preservado. Companhia, gelo e PNG de 390 × 844
foram conferidos; a prévia carregou por inteiro e o console não mostrou erros.

No benchmark de 4 412 vértices, o cálculo original levou cerca de 0,80 ms e o
novo cerca de 0,095 ms, pela mediana de sete rodadas. Esse ganho é específico
do cálculo de normais no computador de teste.

O benchmark mede apenas o cálculo de normais no Node do computador utilizado.
Ele não mede FPS, GPU, bateria ou temperatura de um celular. A validação de
Safari/iOS, gestos nativos e desempenho sustentado em aparelhos físicos ainda
precisa ser feita nesses aparelhos.

## Publicação em 01/10/2026

- Código integrado: `7ab4bca`; dist publicado na release existente: `01de85a`.
- A integração nativa da Square Cloud fez o deploy em
  https://pururunaka.squareweb.app/.
- JS `app-5f26ce16becc.js` e CSS `styles-7fafa85f05ed.css` correspondem ao
  build local byte por byte. Código-fonte e source map continuam retornando
  HTML de erro.
- Após recarregar o site, Aurora e os dois plocs já salvos foram restaurados.
  O navegador havia reutilizado o HTML anterior; um recarregamento normal
  carregou o novo bundle. O visual corrigido foi inspecionado no domínio real,
  sem erros ou avisos no console.
