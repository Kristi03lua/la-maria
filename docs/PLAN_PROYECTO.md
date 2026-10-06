# Plan del proyecto: La-María

Sitio web Front-End para presentar la pastelería, su catálogo y promociones, y facilitar cotizaciones por WhatsApp. La propuesta está dividida en 10 fases. El orden es progresivo; se puede ajustar según las entregas de la asignatura.

## Fases

### Fase 1. Análisis y alcance
- Revisar la especificación `LA-MARIAA.txt` y confirmar público, objetivos y contenido.
- Separar los productos de precio fijo de los especiales bajo cotización.
- **Entrega:** lista de requisitos y alcance aprobados.

### Fase 2. Preparación del proyecto
- Tecnología elegida: HTML, CSS y JavaScript nativos, sin dependencias ni proceso de compilación.
- Crear el documento de entrada, estilos y punto de inicio de JavaScript.
- **Entrega:** proyecto organizado y listo para abrir en el navegador y comenzar a construir.

### Fase 3. Identidad visual y diseño
- Aplicar la paleta y las tipografías propuestas mediante tokens CSS reutilizables.
- Definir reglas tipográficas, anchos de contenido y adaptación para móvil y escritorio.
- **Entrega:** guía visual y diseño responsivo de referencia.

### Fase 4. Estructura y navegación
- Construir encabezado, navegación, pie de página y secciones semánticas con destinos únicos.
- Incluir salto al contenido, foco visible y adaptación de navegación para móvil.
- **Entrega:** estructura común funcional y adaptable.

### Fase 5. Inicio y Nosotros
- Presentar la propuesta de valor con fotografía de portada y llamada a WhatsApp.
- Mostrar productos destacados con sus precios del catálogo y presentar la identidad y valores del negocio.
- **Entrega:** secciones Inicio y Nosotros.

### Fase 6. Catálogo, promociones y WhatsApp
- Mostrar los 15 productos organizados por categoría, con precios y cantidades/unidades claras.
- Agregar las tres promociones descritas en la especificación y su consulta por WhatsApp.
- Generar mensajes codificados para WhatsApp: flujo estándar con producto, precio, cantidad y fecha; flujo especial sin precio fijo y con datos para cotizar.
- **Entrega:** catálogo y promociones con enlaces de WhatsApp probados.

### Fase 7. Galería
- Organizar fotografías ilustrativas de productos y acabados por categoría, con pies de foto.
- Añadir textos alternativos descriptivos, respaldo JPEG y carga diferida fuera de la primera pantalla.
- **Entrega:** galería optimizada y accesible.

### Fase 8. Contacto, preguntas frecuentes y políticas
- Mostrar teléfono, WhatsApp, correo, ubicación de referencia, horarios y redes sociales.
- Incluir las seis preguntas frecuentes y políticas de anticipación, anticipos, pagos, cambios y cancelaciones.
- Preparar mapa del Centro de Tehuacán y formulario que abre WhatsApp; el sitio no guarda los datos.
- **Entrega:** información de contacto y servicio completa.

### Fase 9. Pruebas y ajustes
- Validado en navegador local: destinos internos, filtros del catálogo, 15 productos, 3 promociones y formatos de mensajes para pedidos y cotizaciones.
- Validado: seis FAQ desplegables, etiquetas del formulario, envío de prueba interceptado (sin enviar WhatsApp), textos alternativos, carga diferida y mapa con título accesible.
- Validado en 390, 768 y 1440 px: sin desbordamiento horizontal y cuadrículas adaptables; teclado inicia en el enlace para saltar al contenido.
- Imágenes dentro de los límites de peso. Contrastes medidos superiores a 4.5:1; el hero se ajustó para alcanzar 5.14:1 sobre una imagen clara.
- Regla propuesta para el proyecto: el anticipo no es reembolsable en cancelaciones entre 48 horas y 5 días antes del evento.
- Pendiente antes de publicar: calle y número exactos y enlaces oficiales de redes sociales. Por ahora se muestra Centro de Tehuacán como zona de referencia y las redes como placeholders.
- **Entrega:** pruebas funcionales y de accesibilidad básica registradas; corrección de contraste aplicada.

### Fase 10. Publicación y presentación
- Preparar la versión final, publicarla en el servicio indicado por la asignatura y comprobar los enlaces publicados.
- Reunir capturas, instrucciones de ejecución y explicación de las decisiones del proyecto.
- **Entrega:** sitio publicado y material listo para presentar.

## Estructura de carpetas sugerida

```text
la-maria/
├── LA-MARIAA.txt             # Especificación original; se conserva sin cambios
├── docs/
│   └── PLAN_PROYECTO.md      # Fases y organización del proyecto
├── public/
│   └── images/
│       ├── productos/
│       ├── promociones/
│       └── galeria/
└── src/
    ├── components/           # Elementos reutilizables: navegación, botones y tarjetas
    ├── data/                 # Productos, promociones, preguntas y datos del negocio
    ├── sections/             # Inicio, Nosotros, Productos, Galería, Contacto, etc.
    ├── styles/               # Estilos globales, identidad visual y adaptación responsiva
    └── utils/                # Funciones compartidas, incluida la generación de enlaces WhatsApp
```

La carpeta `src/` es una convención para el código fuente y no obliga a usar un framework. Si la asignatura exige otra estructura, se puede adaptar sin cambiar las fases. Mantén el número de WhatsApp en un solo lugar dentro de los datos del negocio, en vez de repetirlo en cada botón.
