# pururu

Brinquedo interativo de "ぷるる" (pururu) — uma geleia que você pode pegar, jogar,
cutucar e apertar. Agora também tem companhia, objetos e diferentes cantinhos.

O projeto começou como um único arquivo de 1 664 linhas e foi separado em
ES modules e folhas de CSS por seção. A aparência da geleia e o solver de física
foram preservados como base para as novas brincadeiras.

> A interface tem cinco idiomas. Este README é em português.

## Brincar

- **12 sabores**: os seis originais, café, mel, matcha, pêssego, chocolate e coco.
  A barra de sabores rola para os lados no celular.
- **Cantinho**: botão **Brincar → Cantinho**, com banheiro, cozinha, jardim e ateliê.
- **Brincadeiras**: seis expressões, pulo, dança, giro, espirro, cochilo e carinho.
  Cutucadas repetidas deixam o pururu emburrado; carinho o acalma.
- **Companhia**: um segundo pururu, que também pode ser tocado e arrastado.
  Escolha Pururu ou Amigo em Brincadeiras para direcionar uma ação; o abraço
  fica disponível quando a companhia está presente.
- **Objetos**: toque na esponja para pular até ela, arraste o gelo e toque nas
  bolhas para estourar. **Mais bolhas** repõe um grupo de até oito.
- **Foto**: escolha uma pose e use **Salvar foto**. O PNG contém somente a cena;
  a prévia e o link **Baixar foto** ficam disponíveis até a próxima captura.
- **Memória**: o total de plocs, sabor, tema, companhia e objeto ficam em
  `localStorage`, junto das preferências existentes de idioma e som. Recarregar
  preserva os dados; limpar os dados do site apaga esse progresso. Não há conta
  nem sincronização entre aparelhos. Se o armazenamento estiver bloqueado, o
  brinquedo funciona com estado apenas durante a visita.

O catálogo, as etapas e as evidências estão em [docs/PLAYGROUND.md](docs/PLAYGROUND.md).
As otimizações e verificações para celulares estão em [docs/MOBILE.md](docs/MOBILE.md).

---

## Correr

```bash
npx pururu
```

Isto instala o pacote e arranca um servidor em `http://127.0.0.1:8099`. Usa `npx pururu --open` para abrir o browser automaticamente, ou `PORT=3000 npx pururu` para mudar a porta.

Clonar e desenvolver localmente também funciona, sem build (ES modules não correm em `file://`):

```bash
npm install
npm start          # ou: npm run dev  (abre o browser)
```

No desenvolvimento e no pacote `npx`, o Three.js vem de CDN via **importmap**
(three `0.170.0`). Na versão de produção ele é incluído no bundle, na mesma
versão. As fontes tipográficas continuam vindo do Google Fonts.

### Versão de produção

```bash
npm run build      # valida o projeto e gera dist/
npm run preview    # gera novamente e abre a versão compactada no navegador
npm test           # build + persistência, física e isolamento da publicação
```

Continue editando `src/`, `styles/` e `index.html`. `dist/` é gerado e não deve
ser editado nem adicionado ao Git da branch de código. O build limpa apenas
essa pasta, depois de compilar os arquivos com sucesso.

O resultado contém um JavaScript e um CSS compactados, com nomes derivados do
conteúdo para evitar cache antigo, além do HTML, da página 404 e das licenças.
Não contém `src/`, `styles/`, ferramentas de desenvolvimento, configuração de
hospedagem ou source maps. `npm run check:dist` verifica isso antes de publicar.
O preview também retorna 404 para código-fonte e configuração.

O JavaScript que roda no navegador continua inspecionável. Esse build reduz
a exposição da estrutura original; segredos devem ficar fora do frontend.

---

## Estrutura

```
index.html              importmap + marcação. Sem CSS nem JS inline.
                         O texto visível vem de data-i18n, não de texto fixo.

styles/                 9 folhas, uma por seção da interface
  tokens.css              variáveis de cor, tipo, espaçamento
  base.css                reset, canvas, utilitários .glass e .sr-only
  header.css              topo: marca, idioma, contador, botão de som
  hint.css                dicas de gestos
  copy.css                título e lead
  flavors.css             seletor de sabor
  fx.css                  corações, "z" de sono, aviso sem WebGL
  responsive.css          media queries + prefers-reduced-motion
  playground.css          painel Brincar, fotos e barra de sabores ampliada

src/
  main.js                 ponto de entrada: chama boot()
  app.js                  raiz de composição + frame loop

  i18n/                   traduções (ver secção "Idiomas")
  index.js                motor: detecção, persistência, aplicação no DOM
  locales/                ja.js, pt-BR.js, en.js, es.js, zh.js
  playground.js           traduções das novas brincadeiras

  core/                   infra partilhada, sem nenhuma cena
    stage.js                renderer, scene, camera, luzes, environment
    loop.js                 driver de requestAnimationFrame
    palette.js              cores animadas (current → target)
    math.js                 clamp, smoothstep, smin, smoothTo
    media.js                matchMedia + lookups do DOM
    storage.js              preferências locais e total de plocs

  data/
    flavors.js              os 12 sabores
    themes.js               os 4 temas de fundo e bancada
    playground.js           expressões, ações, objetos e personalidades

  slime/                  a criatura
    constants.js            constantes de física/feel, num sítio só
    state.js                o estado mutável partilhado
    geometry.js             malha + todos os buffers de simulação
    material.js             MeshPhysicalMaterial + o GLSL do rosto
    index.js                junta geometria + material + bolhas
    physics.js              solver mass-spring (step, poke, stroke, hop, push)
    normals.js              normais equivalentes calculadas direto nos buffers
    expression.js           olhos, piscadas, sono, olhar
    actions.js              ações finitas e reação a carinho/cutucadas
    creature.js             cria uma criatura com estado independente
    company.js              companhia, colisão e abraço

  scene/                  cenário e objetos
    counter.js              mármore (Reflector + shader de veios)
    wall.js                 parede pintada em canvas + blur
    shadows.js              sombras e poça de luz
    droplets.js             gotas de água (pool de 30)
    camera.js               enquadramento e limites da área de jogo
    themes.js               seleção e persistência do cantinho
    theme-wall.js           fundos procedurais dos novos temas
    toys.js                 esponja, gelo e bolhas interativas

  interaction/            input
    raycast.js              raycasting + escolha do vértice
    grab.js                 arrastar / apertar / atirar
    pointer.js              todos os eventos (pointer, wheel, teclado)

  ui/
    counter.js              contador "ぷるん"
    flavors.js              botões de sabor
    fx.js                   corações e "z" de sono
    hint.js                 barra de dicas (incl. a variante de toque)
    langs.js                selector de idioma
    playground.js           painel, abas e escolha de quem recebe a ação
    photo.js                poses e captura da cena em PNG

  audio/
    sfx.js                  som sintetizado (sem ficheiros de áudio)

bin/
  pururu.mjs                servidor + CLI: `npx pururu`

tools/
  check-imports.mjs        confirma que todos os imports resolvem (dev only)
  check-i18n.mjs           confirma que nenhum idioma está incompleto (dev only)
  build.mjs               gera o site de produção com esbuild
  check-dist.mjs          bloqueia fontes, mapas e arquivos inesperados no deploy
  deploy.mjs              publicação manual a partir de dist/
  publish-dist.mjs        publica dist/ na release ligada a Square Cloud
  benchmark-normals.mjs   mede apenas o custo de CPU do cálculo de normais

tests/
  production.test.mjs     isolamento do preview e da branch de publicação
  playground.test.mjs     armazenamento, geometria e tempo do loop
  mobile.test.mjs         normais, pausa do loop e limpeza dos gestos de toque

.github/workflows/
  production.yml          valida o build e gera a branch de publicação
  pages.yml               publica dist/ no GitHub Pages
```

---

## Idiomas

Cinco idiomas: **日本語**, **Português (Brasil)**, **English**, **Español**, **中文**.

O idioma é detectado a partir do browser na primeira visita, guardado em
`localStorage` e comutável pelo selector no canto superior direito. O
`<html lang>` é actualizado em cada troca, para leitores de ecrã e para a
indexação de motores de busca.

### Como o texto está ligado

Nada de texto fixo no HTML. Cada string aponta para uma chave:

```html
<!-- no index.html -->
<h1><span data-i18n="copy.h1Lead">さわって、</span>
    <br><span class="puru" data-i18n="copy.h1Accent">ぷるん。</span></h1>

<!-- atributos: data-i18n-attr="attr:chave" -->
<canvas id="gl" data-i18n-attr="aria-label:a11y.canvas" aria-label="…">
```

E cada locale é um objecto simples de chaves → texto:

```js
// src/i18n/locales/pt-BR.js
export default {
  'copy.h1Lead': 'Toque nele,',
  'copy.h1Accent': 'e faça ploc.',
  'copy.line1': 'Pegue, jogue, cutuque.',
  // … inclui também as chaves de src/i18n/playground.js
};
```

O japonês é a referência: é o texto original e o *fallback* de todas as
chaves. O nome da personagem, 「ぷるる」, mantém-se em todos os idiomas — é um
nome próprio, não uma palavra a traduzir.

### Acrescentar um idioma

1. Copie `src/i18n/locales/pt-BR.js` para o novo código (ex. `fr.js`) e traduza.
   Traduza também o novo dicionário em `src/i18n/playground.js` e os nomes em
   `src/data/flavors.js` e `src/data/themes.js`.
2. Regista em `LANGS`, em `src/i18n/index.js`:

```js
export const LANGS = [
  { code: 'ja', label: '日本語', short: 'JA', dict: ja },
  { code: 'pt-BR', label: 'Português (Brasil)', short: 'PT', dict: ptBR },
  { code: 'fr', label: 'Français', short: 'FR', dict: fr },   // ← novo
  // …
];
```

Pronto. O selector, a detecção e o `lang` passam a funcionar sozinhos.

### Wording diferente em toque

"Clique" não faz sentido num ecrã de telemóvel. As variantes de toque usam o
prefixo `hint.touch.*` e são escolhidas em `src/ui/hint.js`:

```js
['tap', (isCoarse) => (isCoarse ? 'hint.touch.tap' : 'hint.tap')],
```

### Não esquecer de traduzir tudo

`npm run check` corre `tools/check-i18n.mjs`, que falha se:

- algum idioma não tiver exactamente as mesmas chaves que o japonês;
- alguma tradução estiver vazia;
- o HTML ou um controle do painel usar uma chave que não existe;
- um sabor ou tema não tiver nome em algum dos idiomas.

Isto é o que impede traduções em falta aparecerem em produção — o
`npm run check` tem de passar antes de publicar.

---

## Publicar na GitHub Pages

O site é estático: `dist/` é servido como está, sem backend, banco de dados ou
variáveis de ambiente. Qualquer hospedagem de arquivos estáticos serve — e o
GitHub Pages vem incluído nos repositórios públicos, sem domínio próprio e sem
custo. O endereço fica no formato `https://<usuario>.github.io/<repositorio>/`:

```
https://nakamuraia.github.io/puru-puru-naka/
```

### Configurar (uma vez)

1. **Settings → General → Danger Zone → Change visibility → Public.** Na conta
   gratuita, o Pages só publica repositório público.
2. **Settings → Pages → Source: GitHub Actions.**
3. Faça o push da `master`. O workflow `Pages` roda `npm test`, publica `dist/`
   e mostra o endereço no resumo da execução.

Depois disso, todo push na `master` publica. Para publicar sem mexer no código,
use **Actions → Pages → Run workflow**.

### O que muda em relação ao deploy antigo

- O artefato vai do workflow direto para o Pages: `dist/` continua fora do Git
  e a `release` fica livre para o que existir depois.
- Os caminhos já são relativos (`./assets/...`), então funcionam em subpasta. O
  `404.html` usa `./` para voltar à raiz do projeto, não à raiz do domínio.
- O Pages não roda Jekyll nesse modo: os arquivos são publicados como estão.
- O `Cache-Control` imutável dos arquivos com hash passa a ser definido pelo
  Pages, não pelo `bin/pururu.mjs`.

## Deploy na Square Cloud (legado)

> Estes scripts ficam no repositório e continuam válidos se houver conta ativa,
> mas a publicação de referência passou a ser a do GitHub Pages, acima.

O projeto usa o [runtime estático da Square Cloud](https://docs.squarecloud.app/en/articles/getting-started-with-html).
Os arquivos publicados são os gerados em `dist/`, com `index.html` na raiz.
O servidor de produção não instala dependências e o Three.js já vem no bundle.

### Branchs

| Branch | Papel | Deploy |
|---|---|---|
| `master` | código de desenvolvimento, build e testes | validação automática |
| `release` | conteúdo de `dist/` na raiz | **automático**, pela integração atual da Square Cloud |

A Square Cloud continua acompanhando a `release`. O comando `npm run release`
gera e testa o site, depois publica apenas os arquivos prontos nessa branch.
O histórico é preservado e o envio não usa force push. Na primeira migração,
o código anterior da `release` precisa estar preservado na `master`.

### Publicar uma atualização

Trabalhe na `master`, salve as alterações e publique:

```bash
git switch master
git add .
git commit -m "Minha atualização"
git push origin master
npm run release
```

`npm run release` faz build → testes → push na `release`. A integração nativa
da Square Cloud recebe esse push e faz o deploy. `npm run deploy` é um atalho
para o mesmo comando. Se o build ou os testes falharem, o envio é interrompido.

A `release` contém os arquivos gerados: não edite nela nem faça merge direto
da `master` para ela. Para desfazer uma alteração, reverta o commit de código
na `master` e execute `npm run release` novamente.

Também é possível publicar pelo GitHub: **Actions → Production build → Run
workflow → master**. Esse workflow gera e testa o site antes de atualizar a
`release`, usando o token temporário do GitHub. Não precisa de chave da Square
Cloud. Pushes normais na `master` fazem somente a validação.

Na primeira publicação, confirme no site que `/src/app.js`,
`/styles/responsive.css` e arquivos `.map` mostram a página de erro, sem entregar
o código. No deploy verificado, a Square Cloud retorna essa página HTML com
status HTTP 200; confira o conteúdo da resposta, além do status.

Um [commit de arquivos pela API](https://docs.squarecloud.app/en/api-reference/endpoint/apps/commit)
extrai o ZIP no destino e não promete limpar arquivos ausentes dele. Se
pastas antigas como `src/`, `styles/`, `bin/` ou `tools/` permanecerem na
aplicação, a migração precisa retirar essas pastas após o backup. Não basta
deixar de referenciá-las no HTML. Essa checagem é do deploy real; os testes
locais não confirmam o estado da Square Cloud.

O GitHub precisa permitir que o workflow escreva na `release`. Regras de
proteção que bloqueiem o token de Actions nessa branch precisam ser ajustadas
no repositório; nenhuma configuração remota é alterada pelos scripts locais.

### Alternativa: CLI da Square Cloud

Sem GitHub ligado, controlas tudo tu a partir da CLI:

```bash
npm install -g @squarecloud/cli
squarecloud auth login     # abre o browser e aprova
npm run deploy:new         # build + upload de uma aplicação nova, a partir de dist/
```

O subdomínio é o configurado em `squarecloud.app`.

Depois, para cada alteração:

```bash
npm run deploy:update -- APP_ID    # build + commit da aplicação existente
npm run deploy:update -- --dry-run # confere o build sem enviar arquivos
npm run logs               # = squarecloud app logs
```

`deploy:new` cria uma aplicação nova; `deploy:update` atualiza a existente e
mantém seu ID e domínio. Informe o
ID por argumento, por `SQUARECLOUD_APP_ID` ou pela linha `ID=` da configuração.
O script valida o build e executa a CLI dentro de `dist/`; não envia a raiz do
projeto. Na CLI, `--path` é o destino remoto, não a pasta local para publicar.

### Os dois ficheiros de configuração

**`squarecloud.app`** — fica na raiz do projeto como fonte da configuração.
O build **não** o inclui em `dist/`, para ele não ser publicado junto ao site;
os scripts de deploy copiam o arquivo para a raiz de `dist/` só no envio:

```
MAIN=index.html          # MAIN apontado para .html = runtime estático
MEMORY=512               # mínimo para um site
VERSION=recommended
DISPLAY_NAME=pururu
SUBDOMAIN=pururu         # → pururu.squareweb.app
```

Se a CLI acrescentar uma linha `ID=` durante `deploy:new`, o script copia esse
ID para a configuração do projeto, para ele sobreviver à próxima geração de
`dist/`. Também é possível passar o ID explicitamente em cada atualização.

**`squarecloud.ignore`** — bloqueia publicação direta da raiz de
desenvolvimento pela CLI. Use os comandos npm acima, que trabalham dentro de
`dist/`, ou a `release`. Esse arquivo não substitui o build e não deve ser
usado para filtrar uma branch de código na integração GitHub App.

### Preview e pacote npm

`npm run preview` usa `bin/pururu.mjs --dist` para servir somente os arquivos
gerados localmente. `npm start`, `npm run dev` e `npx pururu` continuam usando
os módulos originais para desenvolvimento. O pacote npm mantém a distribuição
atual; `dist/` e ferramentas de build não são incluídos nele.

### Diagnóstico

Os erros mais comuns, todos nomeados nos logs:

| Código | Causa |
|---|---|
| `MISSING_CONFIG` | `squarecloud.app` não está na raiz do zip |
| `INVALID_SUBDOMAIN` | o subdomínio já está em uso — muda `SUBDOMAIN` |
| `INSUFFICIENT_MEMORY` | `MEMORY` abaixo de 512 |
| `INVALID_VERSION` | tem de ser `recommended` ou `latest`, nunca um número |
| timeout na porta 80 | a app não está a escutar (ver runtime Node acima) |

Docs: [guia de sites](https://docs.squarecloud.app/en/services/sites) ·
[ficheiro de configuração](https://docs.squarecloud.app/en/getting-started/config-file) ·
[app não arranca](https://docs.squarecloud.app/en/platform/troubleshooting/app-wont-start)

---

O problema do monólito original eram 9 blocos a partilhar ~20 variáveis globais. Dividir isso com `import` naïvo criaria importações circulares, por isso a regra adoptada foi:

> **O estado partilhado é criado num sítio e passado como argumento. Não há estado global.**

```
createWorld(geometry)  →  world { body, grab, pinch, bounds, events, sq… }
                              │
      ┌───────────────────────┼───────────────────────┐
      ▼                       ▼                       ▼
createPhysics()      createExpression()        createGrab()
 (step/poke/hop)     (face, blink, sleep)      (drag & throw)
```

`app.js` é o único ficheiro que conhece todos os outros: constrói as peças e passa-as umas às outras. Qualquer módulo pode ser testado isoladamente se lhe deres as dependências de que precisa.

Os `three.Vector3` usados como estado são sempre **mutados no lugar** (`grab.target.set(…)`), nunca substituídos — é isso que mantém o solver sem alocações por frame.

---

## Onde se mexe no "feel"

Quase tudo o que faz a geleia *sinto-se* está num único ficheiro:

```js
// src/slime/constants.js
export const GRAVITY    = -26;   // cai mais depressa
export const K_SPRING   = 300;   // volta ao formato
export const C_DAMP     = 3.2;   // mais = menos bamboleio
export const K_FOLLOW   = 75;    // segue o dedo enquanto agarras
export const FIXED_STEP = 1/240; // passo fixo da física
```

- **Bater mais/menos** → `K_SPRING`, `K_NEIGHBOR` e `C_DAMP` em `constants.js`
- **Olhar mais lento ou rápido** → `fr = 22` e as taxas de `smoothTo` em `expression.js`
- **Sabores novos** → acrescente uma entrada em `src/data/flavors.js` e a
  personalidade correspondente em `src/data/playground.js`; a barra é automática.

O `FIXED_STEP` a 240 Hz com no máximo 10 sub-passos por frame é o que mantém a simulação estável e independente da taxa de quadros.

---

## Notas

- **Acessibilidade**: `prefers-reduced-motion` desliga o parallax, a respiração e as animações. O teclado funciona (setas, Enter, Espaço, 1–6).
- **Som**: opt-in, com a preferência guardada em `localStorage`. É sintetizado na hora (`sfx.js`), não há ficheiros de áudio.
- **Performance**: a malha é um icosaedro de detalhe 20 (touch) ou 26 (rato) com vértices fundidos — 7 292 vértices com vizinhança pré-calculada em `Uint32Array`, para o solver não alocar por frame.
- **Verificação**: `npm test` confere imports, traduções, build, armazenamento,
  física e publicação. A revisão no navegador inclui telas de 320 e 403 pixels,
  troca de idioma, companhia, objetos e PNG; detalhes em `docs/PLAYGROUND.md`.
