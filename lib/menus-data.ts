export interface MenuStepItem {
  step: string;
  label: string;
  title: string;
  highlights: string[];
  badge?: string;
}

export interface MenuImage {
  src: string;
  caption: string;
}

export interface MenuData {
  id: string;
  tagline: string;
  title: string;
  highlight: string;
  pdfUrl: string;
  images: MenuImage[];
  steps: MenuStepItem[];
  incluyeServicio: string[];
}

export const MENUS_DATA: Record<string, MenuData> = {
  "criollo-clasico": {
    id: "criollo-clasico",
    tagline: "TRADICIONAL",
    title: "Criollo Clásico",
    highlight: "Asado a la cruz · Vacío a la leña · Pechito de cerdo · Pollo a las brasas",
    pdfUrl: "/Menus/MENU%20CRIOLLO%20CLASICO_EL%20BANQUETE.pdf",
    images: [
      {
        src: "/Fotos/criollo-c2.jpg",
        caption: "Asado a la cruz y leña de quebracho",
      },
      {
        src: "/Fotos/criollo-c1.jpg",
        caption: "Ambientación y vajilla de campo",
      },
    ],
    steps: [
      {
        step: "01",
        label: "LA RECEPCIÓN",
        title: "Bocados Criollos & Bruschettas",
        highlights: [
          "Empanadas criollas de carne fritas al disco",
          "Brusquetas de berenjenas ahumadas y tostaditos",
          "Croquetas de morcilla y cebolla caramelizada",
        ],
      },
      {
        step: "02",
        label: "PLATO PRINCIPAL",
        title: "Parrilla & Brasas al Fuego",
        badge: "Guarniciones: 3 a elección",
        highlights: [
          "Asado a la cruz y vacío a la leña de quebracho",
          "Pechito de cerdo y pollo crocante a las brasas",
          "Chorizos y morcillas bombón de puro cerdo",
        ],
      },
      {
        step: "03",
        label: "POSTRE & MESA DULCE",
        title: "Crumble Tibio & Patisserie",
        highlights: [
          "Crumble de manzana tibio con crema americana",
          "Mesa dulce en petit fours y minicakes",
          "Servicio de café de especialidad e infusiones",
        ],
      },
    ],
    incluyeServicio: [
      "Canilla libre x 8 hs",
      "Vajilla y cristalería completa",
      "Mantelería a elección",
      "Maitre, mozos y brigada de cocina",
    ],
  },

  "criollo-premium": {
    id: "criollo-premium",
    tagline: "DISTINGUIDO",
    title: "Criollo Premium",
    highlight: "Costillar a la leña · Vacío al asador · Mollejas y provoletta · Variedad de islas",
    pdfUrl: "/Menus/MENU%20CRIOLLO%20PREMIUM_EL%20BANQUETE.pdf",
    images: [
      {
        src: "/Fotos/fiambres.jpg",
        caption: "Costillar y vacío al asador criollo",
      },
      {
        src: "/Fotos/asado.jpg",
        caption: "Cocción lenta a fuego vivo de leña",
      },
    ],
    steps: [
      {
        step: "01",
        label: "LA RECEPCIÓN",
        title: "Isla Campestre & 10 Bocados",
        highlights: [
          "Isla campestre: tablas de fiambres, quesos y panes rústicos",
          "Bocados calientes: solomillo braseado y buñuelos de boniato",
          "Bocados fríos: lengüitas en salvado y bruschettas capresse",
        ],
      },
      {
        step: "02",
        label: "PLATO PRINCIPAL",
        title: "Cortes al Asador & Parrilla",
        badge: "Ensaladas: 3 a elección",
        highlights: [
          "Costillar a la leña, vacío al asador y bondiola ahumada",
          "Exclusivo novios: mollejas doradas al limón y provoletta",
          "Matambre a la pizza y chinchulines crocantes",
        ],
      },
      {
        step: "03",
        label: "POSTRE & MESA DULCE",
        title: "Postre al Plato & Gran Mesa Dulce",
        badge: "Postre: Elegir 1 opción",
        highlights: [
          "Key lime, copa cream oreo o pai de manzana y nueces",
          "Buffet dulce con minicakes (Red Velvet, Matilda, Cheesecake)",
          "Variedad de shots dulces y cafetería",
        ],
      },
      {
        step: "04",
        label: "FIN DE FIESTA",
        title: "Pizzas Artesanales & Trasnoche",
        highlights: [
          "Variedad de pizzas artesanales al corte recién horneadas",
          "Opciones de hamburguesas de ternera y papas con cheddar",
        ],
      },
    ],
    incluyeServicio: [
      "Canilla libre x 8 hs",
      "Cristalería y vajilla de categoría",
      "Mantelería color a elección",
      "Personal de salón, cocina y Maitre",
    ],
  },

  "finger-food-clasico": {
    id: "finger-food-clasico",
    tagline: "CÓCTEL",
    title: "Finger Food Clásico",
    highlight: "Pernil braseado 15 hs · Cazuela de ravioles · Bocados gourmet en bandeja",
    pdfUrl: "/Menus/MENU%20FINGER%20FOOD%20CLASICO_EL%20BANQUETE.pdf",
    images: [
      {
        src: "/Fotos/fingerfood-c1.jpg",
        caption: "Pernil braseado 15 horas fileteado a la vista",
      },
      {
        src: "/Fotos/fingerfood-c2.jpg",
        caption: "Servicio dinámico de bandejeo gourmet",
      },
    ],
    steps: [
      {
        step: "01",
        label: "LA RECEPCIÓN",
        title: "Cocktail Dinámico en Bandeja",
        highlights: [
          "Brusquettas de jamón crudo con rúcula y oliva",
          "Pinchos fried chicken con salsa barbacoa casera",
          "Brochettes de solomillo en reducción de Malbec",
        ],
      },
      {
        step: "02",
        label: "PLATO PRINCIPAL",
        title: "Pernil en Isla & Cazuela Caliente",
        highlights: [
          "Pernil de cerdo (15 hs de cocción) fileteado a la vista",
          "Figacitas de manteca y salsas artesanales",
          "Cazuela de ravioles de ricota servida en bandeja",
        ],
      },
      {
        step: "03",
        label: "POSTRE & MESA DULCE",
        title: "Pirámide Helada & Mesa Dulce",
        highlights: [
          "Pirámide de crema helada sobre brownie y coulis",
          "Selección de minicakes en petit fours",
          "Café de especialidad e infusiones",
        ],
      },
    ],
    incluyeServicio: [
      "Canilla libre x 8 hs",
      "Vajilla y cristalería",
      "Mantelería a elección",
      "Maitre, mozos y cocina",
    ],
  },

  "finger-food-gourmet": {
    id: "finger-food-gourmet",
    tagline: "ALTA COCINA",
    title: "Finger Food Gourmet",
    highlight: "3 Islas gourmet a elección · Gravlax de trucha · Risotto Funghi · Pernil flambeado",
    pdfUrl: "/Menus/MENU%20FINGER%20FOOD%20GOURMET_EL%20BANQUETE.pdf",
    images: [
      {
        src: "/Fotos/fingerfood-g1.jpg",
        caption: "Estaciones culinarias y bocados de autor",
      },
      {
        src: "/Fotos/fingerfood-g2.jpg",
        caption: "Bruschettas artesanales y variedad de mar",
      },
    ],
    steps: [
      {
        step: "01",
        label: "LA RECEPCIÓN",
        title: "Bocados de Alta Cocina",
        highlights: [
          "Gravlax de trucha sobre crocante con ralladura de lima",
          "Arancini di riso con crema de queso azul y frutos secos",
          "Brochette de lomo sobre emulsión de hongos patagónicos",
        ],
      },
      {
        step: "02",
        label: "PLATO PRINCIPAL",
        title: "3 Islas Gastronómicas en Vivo",
        badge: "3 islas a elección",
        highlights: [
          "Ojo de bife braseado en salsa española y papas parmentier",
          "Risotto Funghi con reducción de Malbec",
          "Pernil flambeado y fileteado frente a los invitados",
        ],
      },
      {
        step: "03",
        label: "POSTRE & MESA DULCE",
        title: "Postre al Plato & Gran Patisserie",
        badge: "Postre: Elegir 1 opción",
        highlights: [
          "Postre individual (Key lime, mousse con Campari, cheesecake)",
          "Mesa dulce con 8 variedades de minicakes de autor",
          "Shots dulces y cafetería",
        ],
      },
      {
        step: "04",
        label: "FIN DE FIESTA",
        title: "Pizzas & Trasnoche Gourmet",
        highlights: [
          "Pizzas artesanales horneadas al corte",
          "Hamburguesas de ternera con barbacoa y papas con cheddar",
        ],
      },
    ],
    incluyeServicio: [
      "Canilla libre x 8 hs",
      "Cristalería y vajilla formal",
      "Mantelería a elección",
      "Personal de salón, cocina y Maitre",
    ],
  },

  "formal-al-plato": {
    id: "formal-al-plato",
    tagline: "PREMIUM",
    title: "Formal al Plato",
    highlight: "Servicio al plato en mesa · Islas temáticas a elección · Ojo de bife en croute",
    pdfUrl: "/Menus/MENU%20FORMAL%20AL%20PLATO_EL%20BANQUETE.pdf",
    images: [
      {
        src: "/Fotos/formal-1.jpg",
        caption: "Servicio formal de gala emplatado en mesa",
      },
      {
        src: "/Fotos/formal-2.jpg",
        caption: "Patisserie de autor y gran buffet dulce",
      },
    ],
    steps: [
      {
        step: "01",
        label: "LA RECEPCIÓN",
        title: "Bocados de Gala & Gran Isla",
        badge: "Elegir 1 isla temática",
        highlights: [
          "Ceviche de lenguado cítrico y pinchos de langostinos",
          "Isla temática a elección (Risotto, Pernil 12hs, Pastas o Mexicana)",
          "Pañuelitos de ternera braseada con alioli ahumado",
        ],
      },
      {
        step: "02",
        label: "PLATO PRINCIPAL",
        title: "Servicio de Gala al Plato",
        badge: "Plato principal: 1 a elección",
        highlights: [
          "Ojo de bife en croute de hierbas con demi-glace",
          "Bondiola braseada con puré toffee y emulsión de morrones",
          "Crepes de ricota y rúcula / Menú infantil incluido",
        ],
      },
      {
        step: "03",
        label: "POSTRE & MESA DULCE",
        title: "Postre Gourmet & Gran Buffet",
        badge: "Postre: Elegir 1 opción",
        highlights: [
          "Postre de autor emplatado de manera individual",
          "Mesa dulce con minicakes (Red Velvet, Matilda, Carrot cake)",
          "Variedad de shots artesanales y cafetería",
        ],
      },
      {
        step: "04",
        label: "FIN DE FIESTA",
        title: "Fin de Fiesta Artesanal",
        highlights: [
          "Pizzas artesanales recién horneadas al corte",
          "Hamburguesas gourmet y medialunas tibias rellenas",
        ],
      },
    ],
    incluyeServicio: [
      "Canilla libre x 8 hs",
      "Vajilla formal de gala",
      "Mantelería a elección",
      "Servicio de salón con Maitre",
    ],
  },
};

export const MENUS_LIST = Object.values(MENUS_DATA);

export interface CorporateMenuItem {
  num: string;
  tagline: string;
  title: string;
  description: string;
  image: string;
}

export const CORPORATE_MENUS: CorporateMenuItem[] = [
  {
    num: "01",
    tagline: "JORNADAS & PAUSAS",
    title: "Coffee Break",
    description:
      "Una pausa práctica y distendida para acompañar reuniones, capacitaciones y jornadas de trabajo. Opciones dulces y saladas, infusiones y bebidas, adaptadas a la duración y dinámica de cada encuentro.",
    image: "/Fotos/postre-01.jpg",
  },
  {
    num: "02",
    tagline: "ENCUENTROS MATUTINOS",
    title: "Desayuno de Trabajo",
    description:
      "Una propuesta completa para comenzar reuniones, presentaciones o encuentros corporativos. Combinamos cafetería, jugos y una selección de opciones dulces y saladas, con un servicio ágil y cuidado.",
    image: "/Fotos/bruschettas-01.jpg",
  },
  {
    num: "03",
    tagline: "DINÁMICO & SOCIAL",
    title: "Menús Finger Food",
    description:
      "Variedad de pequeñas preparaciones frías y calientes pensadas para comer de manera cómoda y dinámica, sin necesidad de un servicio formal de mesa. Ideal para reuniones, lanzamientos, celebraciones y eventos corporativos.",
    image: "/Fotos/fingerfood-01.jpg",
  },
  {
    num: "04",
    tagline: "NETWORKING & ALTA GAMA",
    title: "Cocktail",
    description:
      "Una propuesta más completa y sofisticada, con bocados fríos y calientes servidos durante el evento. Permite que los invitados circulen e interactúen mientras disfrutan de un servicio gastronómico continuo.",
    image: "/Fotos/sushi-01.jpg",
  },
  {
    num: "05",
    tagline: "EQUIPOS & NEGOCIOS",
    title: "Almuerzos",
    description:
      "Menús especialmente diseñados para almuerzos empresariales, reuniones de equipos, jornadas de trabajo y encuentros con clientes. Diferentes alternativas de menú y modalidad de servicio según cada ocasión.",
    image: "/Fotos/parrilla-01.jpg",
  },
  {
    num: "06",
    tagline: "GALA & INSTITUCIONAL",
    title: "Cenas Formales",
    description:
      "Una experiencia gastronómica de estilo formal, con servicio de mesa y menú desarrollado en diferentes pasos. Ideal para cenas institucionales, agasajos, aniversarios y eventos empresariales que requieren una presentación más elegante.",
    image: "/Fotos/formal-1.jpg",
  },
];
