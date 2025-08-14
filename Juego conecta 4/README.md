# 🔴🟡 Conecta Cuatro

Un juego clásico de Conecta Cuatro implementado con HTML, CSS y JavaScript vanilla. Dos jugadores se alternan para intentar conectar cuatro fichas de su color en línea (horizontal, vertical o diagonal).

## 🎮 Características

### Funcionalidades Principales
- **Tablero 7x6**: Tablero clásico con 7 columnas y 6 filas
- **Dos jugadores**: Fichas rojas y amarillas que se alternan
- **Sistema de turnos**: El jugador rojo siempre comienza la primera partida, luego se alternan
- **Detección automática de victorias**: Detecta 4 fichas conectadas en cualquier dirección
- **Animaciones**: Efectos visuales al colocar fichas y al ganar
- **Contador de puntuación**: Lleva registro de partidas ganadas por cada jugador
- **Detección de empates**: Reconoce cuando el tablero está lleno sin ganador

### Controles del Juego
- **Reiniciar Partida**: Limpia el tablero actual y comienza una nueva partida
- **Resetear Marcador**: Reinicia el contador de victorias a 0-0

## 🚀 Cómo Jugar

1. **Objetivo**: Ser el primero en conectar 4 fichas de tu color en línea
2. **Turnos**: Los jugadores se alternan colocando fichas
3. **Colocación**: Haz clic en cualquier columna para soltar tu ficha
4. **Gravedad**: Las fichas caen hasta la posición más baja disponible
5. **Victoria**: Conecta 4 fichas horizontal, vertical o diagonalmente
6. **Empate**: Si el tablero se llena sin ganador, es empate

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura del juego
- **CSS3**: Estilos, animaciones y diseño responsivo
- **JavaScript ES6+**: Lógica del juego y interactividad

## 📁 Estructura del Proyecto

```
Juego conecta 4/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos y animaciones
├── script.js           # Lógica del juego
└── README.md           # Documentación del proyecto
```

## 🎯 Funcionalidades Técnicas

### Algoritmo de Detección de Victoria
- Verifica 4 direcciones desde cada ficha colocada:
  - Horizontal (izquierda-derecha)
  - Vertical (arriba-abajo)
  - Diagonal ascendente (\)
  - Diagonal descendente (/)

### Sistema de Puntuación
- Contador persistente durante la sesión
- Alternancia automática del jugador inicial
- Reseteo completo del marcador

### Animaciones CSS
- Efecto de caída de fichas
- Pulsación de fichas ganadoras
- Transiciones suaves en botones
- Efectos hover interactivos

## 🎨 Diseño

- **Diseño responsivo**: Se adapta a diferentes tamaños de pantalla
- **Colores intuitivos**: Rojo y amarillo para fácil identificación
- **Interfaz moderna**: Gradientes y sombras para un look profesional
- **Feedback visual**: Indicadores claros del turno actual y estado del juego

## 📱 Compatibilidad

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móviles

## 🚀 Instalación y Uso

1. **Descarga**: Clona o descarga los archivos del proyecto
2. **Apertura**: Abre `index.html` en tu navegador web
3. **¡Juega!**: No requiere instalación adicional

```bash
# Si tienes git instalado
git clone [url-del-repositorio]
cd "Juego conecta 4"
# Abre index.html en tu navegador
```

## 🎮 Reglas del Juego

### Mecánicas Básicas
- Cada jugador tiene un color asignado (rojo o amarillo)
- Los turnos se alternan automáticamente
- Solo se puede colocar una ficha por turno
- Las fichas caen por gravedad hasta la posición más baja

### Condiciones de Victoria
- **4 en línea horizontal**: Cuatro fichas consecutivas en la misma fila
- **4 en línea vertical**: Cuatro fichas consecutivas en la misma columna
- **4 en diagonal**: Cuatro fichas consecutivas en diagonal

### Sistema de Partidas
- La primera partida siempre la inicia el jugador rojo
- En partidas subsecuentes, el jugador inicial se alterna
- El marcador se mantiene hasta que se resetee manualmente

## 🔧 Personalización

El código está estructurado para facilitar modificaciones:

- **Colores**: Modifica las variables CSS para cambiar la paleta
- **Tamaño del tablero**: Ajusta `ROWS` y `COLS` en `script.js`
- **Animaciones**: Personaliza las animaciones en `styles.css`
- **Sonidos**: Agrega efectos de sonido en las funciones preparadas

## 📈 Posibles Mejoras

- [ ] Modo de juego contra IA
- [ ] Efectos de sonido
- [ ] Guardado de estadísticas en localStorage
- [ ] Modo multijugador online
- [ ] Temas personalizables
- [ ] Torneos y rankings

## 👨‍💻 Desarrollo

Este proyecto fue desarrollado como una implementación completa del clásico juego Conecta Cuatro, enfocándose en:

- **Código limpio y mantenible**
- **Experiencia de usuario intuitiva**
- **Diseño responsivo y moderno**
- **Rendimiento optimizado**

---

¡Disfruta jugando Conecta Cuatro! 🎉