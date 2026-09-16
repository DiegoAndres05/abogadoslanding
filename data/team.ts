export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  phone: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Manuel Gonzales Guardela",
    role: "Cofundador",
    bio: "Estrategia legal con visión de negocio. Especializado en derecho corporativo, M&A e inversión extranjera.",
    phone: "+57 318 338 3714",
    image: "/team/manuel-gonzales.jpg",
  },
  {
    id: 2,
    name: "Kevin E. Tang Villanueva",
    role: "Cofundador",
    bio: "Soluciones jurídicas, tributarias y financieras integradas. Enfoque en planeación fiscal y estructuración de operaciones complejas.",
    phone: "+57 301 524 6127",
    image: "/team/kevin-tang.jpg",
  },
];
