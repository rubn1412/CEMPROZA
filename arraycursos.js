const coursesData = [
  {
    id: 1,
    category: 'Oficios Técnicos',
    title: 'Asistente de Farmacia',
    image: "imagenes/AsistenteFarmacia.jpeg",    
    description: 'Fundamentos de farmacología, organización de farmacia y manejo básico de medicamentos.',
    content: `
      <ul>
        <li>Farmacología básica y clasificación</li>
        <li>Organización y procesos de farmacia</li>
        <li>Lectura de récipe y validación</li>
        <li>Medicamentos OTC / con prescripción</li>
      </ul>`,
    sedes: [
      { name: 'Sede Centro', href: "Sedes.html#centro", img: "imagenes/CENTRO.png" },
      { name: 'Sede 42', href: 'Sedes.html#principal', img:"imagenes/Principal.png"  },
      { name: 'Sede Oeste', href: 'Sedes.html#oeste', img: 'imagenes/Oeste.png' },
    ]
  },
  {
    id: 2,
    category: 'Oficios Técnicos',
    title: 'Primeros Auxilios y Emergencias Pre-hospitalaria',
    image: 'imagenes/primerosauxilios.jpeg',
    description: 'Actuación ante emergencias con evaluación de signos vitales, RCP y manejo de lesiones frecuentes.',
    content: `
      <ul>
        <li>Evaluación primaria y signos vitales</li>
        <li>RCP/RCPC y atragantamiento</li>
        <li>Hemorragias, quemaduras y fracturas</li>
        <li>Traslado de lesionados y simulacros</li>
      </ul>`,
    sedes: [
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
    ]
  },
  {
    id: 3,
    category: 'Belleza y Estética',
    title: 'Sistema de Uñas Básico',
    image: 'imagenes/uñasbasico.jpg', 
    description: 'Iniciación en anatomía de la uña, bioseguridad y sistemas de gel/polygel para salón.',
    content: `
      <ul>
        <li>Anatomía de la uña y bioseguridad</li>
        <li>Jelly tips, polygel y gel en natural</li>
        <li>Cover corrido y encapsulados</li>
        <li>Técnica de limado y decoraciones</li>
      </ul>`,
    sedes: [
      { name: 'Sede Centro', href: 'Sedes.html#centro', img: 'imagenes/CENTRO.png' },
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
    ]
  },
  {
    id: 4,
    category: 'Belleza y Estética',
    title: 'Sistema de Uñas Avanzado',
    image: 'imagenes/uñasavanzado.jpeg',
    description: 'Perfeccionamiento con técnica híbrida, soft gel, manicura rusa y estructuras profesionales.',
    content: `
      <ul>
        <li>Técnica híbrida y soft gel avanzado</li>
        <li>Manicura rusa y nivelación (capping)</li>
        <li>Estructuras: square y french 3D</li>
        <li>Dominio de limado y puntas</li>
      </ul>`,
    sedes: [
      { name: 'Sede Centro', href: 'Sedes.html#centro', img: 'imagenes/CENTRO.png' },
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
    ]
  },
  {
    id: 5,
    category: 'Oficios Técnicos',
    title: 'Refrigeración Residencial',
    image: 'imagenes/refrigeracion-residencial.jpg',
    description: 'Principios y componentes de refrigeración doméstica con prácticas de vacío, recarga y diagnóstico.',
    content: `
      <ul>
        <li>Elementos mecánicos y soldadura</li>
        <li>Tipos de refrigerantes y manometría</li>
        <li>Vacío, recarga y presión</li>
        <li>Electricidad básica e instalación</li>
      </ul>`,
    sedes: [
      { name: 'Sede Centro', href: 'Sedes.html#centro', img: 'imagenes/CENTRO.png' },
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
      { name: 'Sede Oeste', href: 'Sedes.html#oeste', img: 'imagenes/Oeste.png' },
    ]
  },
  {
    id: 6,
    category: 'Oficios Técnicos',
    title: 'Refrigeración Residencial Nivel II',
    image: 'imagenes/refrigeracion-residencial2.jpg',
    description: 'Transición a refrigeración comercial con electricidad avanzada, compresores y fallas.',
    content: `
      <ul>
        <li>Equipos comerciales: vitrinas y cavas</li>
        <li>Circuitos eléctricos avanzados</li>
        <li>Instalación, mantenimiento y carga</li>
        <li>Diagnóstico y reemplazo de compresores</li>
      </ul>`,
    sedes: [
      { name: 'Sede Centro', href: 'Sedes.html#centro', img: 'imagenes/CENTRO.png' },
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
      
    ]
  },
  {
    id: 7,
    category: 'Belleza y Estética',
    title: 'Cejas, Laminado de Cejas, Pestañas, Maquillaje y Depilación',
    image: 'imagenes/cejas.jpg',
    description: 'Técnicas integrales de cejas, pestañas, maquillaje y depilación con enfoque de visagismo.',
    content: `
      <ul>
        <li>Perfilado y depilación facial</li>
        <li>Laminado de cejas y pigmentos</li>
        <li>Pestañas por punto y corridas</li>
        <li>Maquillaje día/noche y depilación corporal</li>
      </ul>`,
    sedes: [
      { name: 'Sede Centro', href: 'Sedes.html#centro', img: 'imagenes/CENTRO.png' },
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
      { name: 'Sede Oeste', href: 'Sedes.html#oeste', img: 'imagenes/Oeste.png' },
    ]
  },
  {
    id: 8,
    category: 'Belleza y Estética',
    title: 'Peluquería',
    image: 'imagenes/peluqueria.jpg',
    description: 'Cortes, secados, enrulados y color con base en visagismo y manejo de herramientas.',
    content: `
      <ul>
        <li>Visagismo y estructura capilar</li>
        <li>Cortes, secados y planchado</li>
        <li>Técnicas de aplicación de tintes</li>
        <li>Tendencias y atención al cliente</li>
      </ul>`,
    sedes: [
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
      { name: 'Sede Oeste', href: 'Sedes.html#oeste', img: 'imagenes/Oeste.png' },
    ]
  },
  {
    id: 9,
    category: 'Oficios Técnicos',
    title: 'Corte y Confección',
    image: 'imagenes/corte.jpg',
    description: 'Patronaje y confección de prendas con ajustes y acabados para faldas, pantalones y blusas.',
    content: `
      <ul>
        <li>Conceptos y patronaje base</li>
        <li>Confección de fajas y faldas</li>
        <li>Moldes y variantes de pantalón</li>
        <li>Blusas: entretelas y escotes</li>
      </ul>`,
    sedes: [
      { name: 'Sede Centro', href: 'Sedes.html#centro', img: 'imagenes/CENTRO.png' },
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
      { name: 'Sede Oeste', href: 'Sedes.html#oeste', img: 'imagenes/Oeste.png' },
    ]
  },
  {
    id: 10,
    category: 'Belleza y Estética',
    title: 'Colorimetría',
    image: 'imagenes/colorimetria-cabello.webp',
    description: 'Diagnóstico y técnicas de coloración con estudio de estrella de Oswald, decoloración y reflejos.',
    content: `
      <ul>
        <li>Historia del color y estrella de Oswald</li>
        <li>Alturas/familias de tono y tricología</li>
        <li>Decoloración y regla del 11</li>
        <li>Reflejos, balayage y baby light</li>
      </ul>`,
    sedes: [
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
      { name: 'Sede Oeste', href: 'Sedes.html#oeste', img: 'imagenes/Oeste.png' },
    ]
  },
  {
    id: 11,
    category: 'Belleza y Estética',
    title: 'Barbería Nivel I',
    image: 'imagenes/barberia.jpg',
    description: 'Bases de barbería con visagismo, diagramación y ejecución de fades y cortes contemporáneos.',
    content: `
      <ul>
        <li>Instrumental y diagramación</li>
        <li>Técnicas de corte clásicas y modernas</li>
        <li>Fades: taper, low, mid, high</li>
        <li>Mantenimiento y atención al cliente</li>
      </ul>`,
    sedes: [
      { name: 'Sede Centro', href: 'Sedes.html#centro', img: 'imagenes/CENTRO.png' },
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
      { name: 'Sede Oeste', href: 'Sedes.html#oeste', img: 'imagenes/Oeste.png' },
    ]
  },
  {
    id: 12,
    category: 'Artes Culinarias',
    title: 'Repostería Comercial',
    image: 'imagenes/reposteria.jpeg',
    description: 'Elaboración de tortas, cremas, merengues y productos de pastelería para venta.',
    content: `
      <ul>
        <li>Batidos y merengues (FR/SZ/IT)</li>
        <li>Tortas base y variantes</li>
        <li>Ganache, cremas y buttercream</li>
        <li>Galletas, brownies y cupcakes</li>
      </ul>`,
    sedes: [
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
      { name: 'Sede Oeste', href: 'Sedes.html#oeste', img: 'imagenes/Oeste.png' },
    ]
  },
  {
    id: 13,
    category: 'Artes Culinarias',
    title: 'Decoración de Tortas',
    image: 'imagenes/decoraciontortas.jpg',
    description: 'Técnicas de acabado y decoración profesional con glasé, boquillas, fondant y plantillas.',
    content: `
      <ul>
        <li>Nivelación y alisado</li>
        <li>Glasé real y manejo de boquillas</li>
        <li>Merengue italiano y rice paper</li>
        <li>Fondant, colorimetría y fault line</li>
      </ul>`,
    sedes: [
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
      { name: 'Sede Oeste', href: 'Sedes.html#oeste', img: 'imagenes/Oeste.png' },
    ]
  },
  {
    id: 14,
    category: 'Artes Culinarias',
    title: 'Mini Chef',
    image: 'imagenes/minichef.jpg',
    description: 'Iniciación culinaria para niños con recetas sencillas, creativas y seguras.',
    content: `
      <ul>
        <li>Tortas básicas (vainilla y marmoleada)</li>
        <li>Mini pizzas y tequeños</li>
        <li>Donas, galletas y tartaletas</li>
        <li>Suspiritos y presentación simple</li>
      </ul>`,
    sedes: [
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
    ]
  },
  {
    id: 15,
    category: 'Industria Automotriz',
    title: 'Electroauto y Fuel Injection',
    image: 'imagenes/electroauto.avif',
    description: 'Electricidad vehicular, lectura de planos y sistemas de inyección con diagnóstico por códigos.',
    content: `
      <ul>
        <li>Instrumentos y acumuladores</li>
        <li>Luces, encendido, carga y arranque</li>
        <li>Lectura de planos y códigos de falla</li>
        <li>Sensores/actuadores y emisiones</li>
      </ul>`,
    sedes: [
      { name: 'Sede Centro', href: 'Sedes.html#centro', img: 'imagenes/CENTRO.png' },
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
      { name: 'Sede Oeste', href: 'Sedes.html#oeste', img: 'imagenes/Oeste.png' },
    ]
  },
  {
    id: 16,
    category: 'Artes Culinarias',
    title: 'Panadería y Pasapalos I',
    image: 'imagenes/pasapalos.webp',
    description: 'Elaboración de panes y pasapalos con técnicas de amasado, fermentación y glaseado.',
    content: `
      <ul>
        <li>Amasado (V/Bertinet) y fermentación</li>
        <li>Panes: francés, piñita, hamburguesa</li>
        <li>Golfeados, donas y glaseados</li>
        <li>Tequeños, pasteles y pan de jamón</li>
      </ul>`,
    sedes: [
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
    ]
  },
  {
    id: 17,
    category: 'Artes Culinarias',
    title: 'Panadería Artesanal y Mesas Dulces',
    image: 'imagenes/panaderia.jpg',
    description: 'Producción de panes rústicos y variedad de dulces tradicionales para mesa.',
    content: `
      <ul>
        <li>Panes rústicos y de sándwich</li>
        <li>Dulcería tradicional (catalinas y más)</li>
        <li>Alfajores, pasta seca y tartaletas</li>
        <li>Roles de canela y polvorosas</li>
      </ul>`,
    sedes: [
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
    ]
  },
  {
    id: 18,
    category: 'Artes Culinarias',
    title: 'Tortas Frías y Comerciales',
    image: 'imagenes/tortasfrias.jpeg',
    description: 'Postres y tortas frías con bizcocho, almíbar, rellenos y acabados profesionales.',
    content: `
      <ul>
        <li>Batidos livianos y bizcochos</li>
        <li>Almíbar y rellenos (crema pastelera)</li>
        <li>Merengue suizo y chantilly</li>
        <li>Tres leches, marquesas y trifles</li>
      </ul>`,
    sedes: [
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
    ]
  },
  {
    id: 19,
    category: 'Oficios Técnicos',
    title: 'Electricidad Residencial, Comercial, Industrial y Controles Eléctricos',
    image: 'imagenes/Electricidad.webp',
    description: 'Fundamentos eléctricos con lectura de planos, cableado y controles industriales.',
    content: `
      <ul>
        <li>Ley de Ohm e instrumentos</li>
        <li>CA mono/trifásica y CC</li>
        <li>Cableado, simbología y planos</li>
        <li>Controles, contactores y motores</li>
      </ul>`,
    sedes: [
      { name: 'Sede Centro', href: 'Sedes.html#centro', img: 'imagenes/CENTRO.png' },
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
    ]
  },
  {
    id: 20,
    category: 'Industria Automotriz',
    title: 'Electricidad en Motos de Baja Cilindrada',
    image: 'imagenes/electricidad.motos.jpg',
    description: 'Electricidad básica aplicada a motocicletas con diagnóstico de sistemas esenciales.',
    content: `
      <ul>
        <li>Instrumentos y seguridad eléctrica</li>
        <li>Acumuladores y sistema de luces</li>
        <li>Carga, arranque y encendido</li>
        <li>Switches, comandos y pruebas</li>
      </ul>`,
    sedes: [
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
    ]
  },
  {
    id: 21,
    category: 'Oficios Técnicos',
    title: 'Oratoria: Desenvolvimiento en Público, Medios y Redes',
    image: 'imagenes/oratoria.jpg',
    description: 'Técnicas de voz, modulación y expresión para presentaciones en público y medios.',
    content: `
      <ul>
        <li>Bases de oratoria y voz</li>
        <li>Modulación, narración y locución</li>
        <li>Psicología de la comunicación</li>
        <li>Aplicación en medios y redes</li>
      </ul>`,
    sedes: [
      { name: 'Sede Centro', href: 'Sedes.html#centro', img: 'imagenes/CENTRO.png' },
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
    ]
  },
  {
    id: 22,
    category: 'Oficios Técnicos',
    title: 'Asistente Dental',
    image: 'imagenes/asistentedental.jpeg',
    description: 'Funciones del asistente dental con bioseguridad, instrumental y nociones clínicas básicas.',
    content: `
      <ul>
        <li>Rol del asistente e higienista</li>
        <li>Odontograma y patologías orales</li>
        <li>Instrumental por especialidad</li>
        <li>Esterilización y bioseguridad</li>
      </ul>`,
    sedes: [
      { name: 'Sede Centro', href: 'Sedes.html#centro', img: 'imagenes/CENTRO.png' },
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
      { name: 'Sede Oeste', href: 'Sedes.html#oeste', img: 'imagenes/Oeste.png' },
    ]
  },
  {
    id: 23,
    category: 'Belleza y Estética',
    title: 'Masoterapia Nivel I',
    image: 'imagenes/masoterapia.webp',
    description: 'Masajes básicos con evaluación del paciente y aplicación de técnicas de relajación y drenaje.',
    content: `
      <ul>
        <li>Anatomía y valoración clínica</li>
        <li>Masaje facial-craneal y relajante</li>
        <li>Drenaje linfático y descontracturante</li>
        <li>Técnicas turca, tailandesa y reductiva</li>
      </ul>`,
    sedes: [
      { name: 'Sede Centro', href: 'Sedes.html#centro', img: 'imagenes/CENTRO.png' },
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
      { name: 'Sede Oeste', href: 'Sedes.html#oeste', img: 'imagenes/Oeste.png' },
    ]
  },
  {
    id: 24,
    category: 'Belleza y Estética',
    title: 'Taller Extensiones de Pestañas (Básico - Avanzado)',
    image: 'imagenes/pestañas.jpg',
    description: 'Aplicación de pestañas clásicas, híbridas y volumen con diseño y cuidados adecuados.',
    content: `
      <ul>
        <li>1x1, híbridas y volumen ruso</li>
        <li>Curvaturas, grosores y medidas</li>
        <li>Adhesivos, pinzas y mapping</li>
        <li>Diseño por tipo de ojos y cuidados</li>
      </ul>`,
    sedes: [
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
    ]
  },
  {
    id: 25,
    category: 'Oficios Técnicos',
    title: 'Asistente Administrativo, Contable, RRHH y Tributario',
    image: 'imagenes/administrativo.jpeg',
    description: 'Gestión administrativa, nómina y fundamentos contables con marco tributario básico.',
    content: `
      <ul>
        <li>Documentos y funciones administrativas</li>
        <li>Nómina, vacaciones y prestaciones</li>
        <li>Principios contables y libros legales</li>
        <li>ISLR/IVA: contribuyentes y bases</li>
      </ul>`,
    sedes: [
      { name: 'Sede Centro', href: 'Sedes.html#centro', img: 'imagenes/CENTRO.png' },
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
      { name: 'Sede Oeste', href: 'Sedes.html#oeste', img: 'imagenes/Oeste.png' },
    ]
  },
  {
    id: 26,
    category: 'Oficios Técnicos',
    title: 'Inglés para Niños',
    image: 'imagenes/niños.avif',
    description: 'Vocabulario básico y expresiones cotidianas con dinámicas adaptadas a edades tempranas.',
    content: `
      <ul>
        <li>Abecedario, colores y familia</li>
        <li>Cuerpo, casa y ropa</li>
        <li>Números, hora y clima</li>
        <li>Saludos, frutas, animales y verbos</li>
      </ul>`,
    sedes: [
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
    ]
  },
  {
    id: 27,
    category: 'Belleza y Estética',
    title: 'Masoterapia, Maderoterapia, Drenaje Linfático y Kinesiotape',
    image: 'imagenes/maderoterapia.png',
    description: 'Integración de masoterapia con maderoterapia y drenaje para fines estéticos y terapéuticos.',
    content: `
      <ul>
        <li>Ética, anatomía y anamnesis</li>
        <li>Maderoterapia facial y corporal</li>
        <li>Drenaje linfático manual</li>
        <li>Fundamentos de kinesiotape</li>
      </ul>`,
    sedes: [
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
    ]
  },
  {
    id: 28,
    category: 'Belleza y Estética',
    title: 'Taller Laciados y Alisados',
    image: 'imagenes/lasiados.jpg',
    description: 'Técnicas de alisado con selección de productos, sellado y atención personalizada.',
    content: `
      <ul>
        <li>Visagismo y tricología capilar</li>
        <li>Tipos de productos y herramientas</li>
        <li>Técnicas de aplicación</li>
        <li>Sellado y acabados profesionales</li>
      </ul>`,
    sedes: [
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
    ]
  },
  {
    id: 29,
    category: 'Oficios Técnicos',
    title: 'Decoración de Globos y Globoflexia',
    image: 'imagenes/globoflexia.jpg',
    description: 'Montaje decorativo con globos: calibrado, columnas, tejidos y bouquets para eventos.',
    content: `
      <ul>
        <li>Calibrado, inflado y estructurado</li>
        <li>Columnas trenzadas y aplanadas</li>
        <li>Tejidos orgánicos y globoflexia</li>
        <li>Bouquets, costos y montaje final</li>
      </ul>`,
    sedes: [
      { name: 'Sede Centro', href: 'Sedes.html#centro', img: 'imagenes/CENTRO.png' },
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
      { name: 'Sede Oeste', href: 'Sedes.html#oeste', img: 'imagenes/Oeste.png' },
    ]
  },
  {
    id: 30,
    category: 'Industria Automotriz',
    title: 'Refrigeración Automotriz',
    image: 'imagenes/refrigeracion-automotriz.jpg',
    description: 'Aires acondicionados automotrices con componentes, circuitos y mantenimiento.',
    content: `
      <ul>
        <li>Teoría del A/A automotriz</li>
        <li>Refrigerantes y componentes</li>
        <li>Planos y circuitos eléctricos</li>
        <li>Instalación y mantenimiento</li>
      </ul>`,
    sedes: [
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
    ]
  },
  {
    id: 31,
    category: 'Tecnologías Digitales',
    title: 'Marketing Digital',
    image: 'imagenes/marketing.jpeg',
    description: 'Estrategia y contenidos con optimización de inversión, ads e inteligencia artificial.',
    content: `
      <ul>
        <li>Estrategia y planeación de marketing</li>
        <li>Contenido, buyer persona e inbound</li>
        <li>Optimización de gasto e inversión</li>
        <li>Ads, IA y WhatsApp Business</li>
      </ul>`,
    sedes: [
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
      { name: 'Sede Oeste', href: 'Sedes.html#oeste', img: 'imagenes/Oeste.png' },
    ]
  },
  {
    id: 32,
    category: 'Tecnologías Digitales',
    title: 'Community Manager',
    image: 'imagenes/community.jpg',
    description: 'Gestión integral de redes sociales con planificación, KPIs, crisis y pauta básica.',
    content: `
      <ul>
        <li>Plan de contenidos y calendario</li>
        <li>Métricas clave (KPIs) y reporting</li>
        <li>Gestión de crisis y soporte al cliente</li>
        <li>Publicidad básica en plataformas</li>
      </ul>`,
    sedes: [
      { name: 'Sede Centro', href: 'Sedes.html#centro', img: 'imagenes/CENTRO.png' },
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
      { name: 'Sede Oeste', href: 'Sedes.html#oeste', img: 'imagenes/Oeste.png' },
    ]
  },
  {
    id: 33,
    category: 'Belleza y Estética',
    title: 'Cosmetología y Estética Facial',
    image: 'imagenes/cosmetologia.jpg',
    description: 'Diagnóstico facial con protocolos de cabina y aparatología cosmética aplicada.',
    content: `
      <ul>
        <li>Historia clínica y protocolos</li>
        <li>Cosméticos y peeling químico</li>
        <li>Microdermo, RF y electroporación</li>
        <li>Máscara LED e hidrodermoabrasión</li>
      </ul>`,
    sedes: [
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
    ]
  },
  {
    id: 34,
    category: 'Oficios Técnicos',
    title: 'Locución',
    image: 'imagenes/locucion.png',
    description: 'Fundamentos de locución con modulación, guion y práctica de producción radial.',
    content: `
      <ul>
        <li>Historia y tipos de locución</li>
        <li>Lectura modulada y ejercicios</li>
        <li>Guion y producción de noticias</li>
        <li>Marco legal de radiodifusión</li>
      </ul>`,
    sedes: [
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
    ]
  },
  {
    id: 35,
    category: 'Belleza y Estética',
    title: 'Quiropedia',
    image: 'imagenes/quiropedia.jpg',
    description: 'Atención podológica básica con manejo de instrumental, drill y bioseguridad.',
    content: `
      <ul>
        <li>Anatomía de uña y pie</li>
        <li>Patologías y anamnesis</li>
        <li>Formones, corte y deslaminación</li>
        <li>Manejo de drill y bioseguridad</li>
      </ul>`,
    sedes: [
      { name: 'Sede Centro', href: 'Sedes.html#centro', img: 'imagenes/CENTRO.png' },
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
      { name: 'Sede Oeste', href: 'Sedes.html#oeste', img: 'imagenes/Oeste.png' },
    ]
  },
  {
    id: 36,
    category: 'Oficios Técnicos',
    title: 'Pre Universitario de Enfermería',
    image: 'imagenes/enfermeria.jpg',
    description: 'Introducción a cuidados de enfermería con bioética, curaciones y soporte vital básico.',
    content: `
      <ul>
        <li>Bioética y legalidades</li>
        <li>Constantes vitales y PAE</li>
        <li>Asepsia, curaciones y RCP</li>
        <li>Movilización y farmacología básica</li>
      </ul>`,
    sedes: [
      { name: 'Sede Centro', href: 'Sedes.html#centro', img: 'imagenes/CENTRO.png' },
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
    ]
  },
  {
    id: 37,
    category: 'Belleza y Estética',
    title: 'Trenzado y Aplicación de Extensiones (2 en 1)',
    image: 'imagenes/extensiones.jpg',
    description: 'Trenzas y extensiones con técnicas variadas para peinados profesionales.',
    content: `
      <ul>
        <li>Trenzas francesa, holandesa y espiga</li>
        <li>Peinados y trenza de raíz</li>
        <li>Extensiones: kanekalon y crochet</li>
        <li>Estilos bohemios y finalización</li>
      </ul>`,
    sedes: [
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
    ]
  },
  {
    id: 38,
    category: 'Belleza y Estética',
    title: 'Quiropedia Nivel II',
    image: 'imagenes/quiropedia2.jpg',
    description: 'Profundización en diagnóstico podológico, manejo de uñas encarnadas y micosis.',
    content: `
      <ul>
        <li>Semiología y diagnóstico</li>
        <li>Uñas encarnadas e infectadas</li>
        <li>Micosis y tratamientos</li>
        <li>Reflexología y bioseguridad</li>
      </ul>`,
    sedes: [
      { name: 'Sede Centro', href: 'Sedes.html#centro', img: 'imagenes/CENTRO.png' },
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
    ]
  },
  {
    id: 39,
    category: 'Artes Culinarias',
    title: 'Cocina Básica',
    image: 'imagenes/cocina.jpg',
    description: 'Técnicas esenciales de higiene, cortes, fondos, salsas y cremas base.',
    content: `
      <ul>
        <li>Higiene y manipulación segura</li>
        <li>Cortes básicos y fondos</li>
        <li>Fumet, bisques y cremas</li>
        <li>Roux, bechamel y derivadas</li>
      </ul>`,
    sedes: [
      { name: 'Sede 42', href: 'Sedes.html#principal', img: 'imagenes/Principal.png' },
    ]
  },
  {
    id: 40,
    category:'Oficios Técnicos',
    title: 'Herrería y Soldadura',
    image: 'imagenes/herreria.jpg',
    description: 'Fundamentos y bases indispensables de la herrería y soldadura.',
    content: `
      <ul>
        <li>Seguridad laboral</li>
        <li>Soldadura de Reparación</li>
        <li>Soldadura con Electrodo</li>
        <li>Proyecto de Ejecucion</li>
      </ul>`,
    sedes: [
      { name: 'Sede Oeste', href: 'Sedes.html#oeste', img: 'imagenes/Oeste.png' },
    ]
  },
  {
    id: 41,
    category:'Oficios Técnicos',
    title: 'Gerencia Empresarial',
    image: 'imagenes/gerencia.jpg',
    description: 'Analisis del entorno empresarial, toma de decisiones, planificación.',
    content: `
      <ul>
        <li>Organización y Estructura</li>
        <li>Estilos de Liderazgo </li>
        <li>Trabajo en Equipo</li>
        <li>Estrategias de Crecimiento</li>
      </ul>`,
    sedes: [
      { name: 'Sede Oeste', href: 'Sedes.html#oeste', img: 'imagenes/Oeste.png' },
    ]
  },
];



function createCourseCard(course) {
    const card = document.createElement('div');
    card.classList.add('course-card');
    card.innerHTML = `
        <div class="course-image" style="background-image: url('${course.image}');"></div>
        <div class="course-content">
            <span class="course-category">${course.category}</span>
            <h3 class="course-title">${course.title}</h3>
            <div class="course-info">
            </div>
            <p class="course-description">${course.description}</p>
            <div class="course-footer">
                <button class="enroll-btn details-btn" data-course-id="${course.id}">Más Información</button>
            </div>
        </div>
    `;
    return card;
}