# Square Cloud — https://squarecloud.app
# Referencia: https://docs.squarecloud.app/en/getting-started/config-file
#
# MAIN=index.html escolhe o runtime ESTATICO. npm run build copia esta
# configuracao para dist/, junto ao JavaScript e CSS compactados.
# O Three.js esta incluido no bundle; o servidor nao instala dependencias.
#
# Este ficheiro tem de ficar na RAIZ do zip. O runtime nunca o serve.

MAIN=index.html
MEMORY=512
VERSION=recommended
DISPLAY_NAME=pururu
DESCRIPTION=Sawatte, purun. A squishy jelly friend you can grab, throw, poke and squeeze. Three.js.
SUBDOMAIN=pururu
AUTORESTART=true
