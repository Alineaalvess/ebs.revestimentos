
import { Product, ContactInfo } from './types';

export const COMPANY_NAME = "EBS REVESTIMENTOS";

export const CONTACT: ContactInfo = {
  phone: "(11) 94715-9836 / 94715-9885",
  whatsapp: "5511947159836",
  email: "comercial@ebsrevest.com.br",
  address: "São Paulo, SP | Atendemos todo o Brasil"
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Revestimento em Borracha ",
    description: "Ideal para sistemas de tintagem, oferecendo alta resistência e fabricado em variados tipo, Nitrílica (NBR), EPDM (para tintas UV) ou Silicone.",
    image: "/assets/borracha.png",
    tag: "Alta Resistência"
  },
  {
    id: 2,
    name: "Cromo Duro Espelhado ",
    description: "Máxima durabilidade e resistência à abrasão para processos de alta velocidade e compressão constante, trazendo qualidade e nitidez para imagem impressa.",
    image: "/assets/cromoliso.png",
    tag: "Precisão"
  },
  {
    id: 3,
    name: "Revestimento em Rilsan®",
    description: "Matéria prima especial a base de poliamida, geralmete utilizado em sistemas de distribuição, intermediários e dosadores com alta resitência ao desgaste e químicos.",
    image: "/assets/rilsan.png",
    tag: "Especialidades"
  },
  {
    id: 4,
    name: "Cromo Duro Jateado ou Fosco",
    description: " Revestimento essencial na impressão offset no sistema de entintagem e molha. Eles são projetados para oferecer alta resistência mecânica, combinada com uma superfície que facilita o controle de fluidos.",
    image: "/assets/cromojateado.png",
    tag: "Performance"
  }
];

export const HERO_IMAGE = "/assets/capa.webp" alt="Capa";
