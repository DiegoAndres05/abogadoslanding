export interface TeamMember {
  id: string;
  name: string;
  role: string;
  education: string[];
  experience: string;
  leadershipAreas: string[];
  publicProcurementExperience?: string;
  phone: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "manuel-gonzales",
    name: "Manuel Gonzales Guardela",
    role: "Cofundador",
    education: [],
    experience: "",
    leadershipAreas: ["corporativo", "contratacion-publica"],
    publicProcurementExperience: "",
    phone: "+57 318 338 3714",
    image: "/team/manuel-gonzales.jpg",
  },
  {
    id: "kevin-tang",
    name: "Kevin E. Tang Villanueva",
    role: "Cofundador",
    education: [],
    experience: "",
    leadershipAreas: ["tributario"],
    phone: "+57 301 524 6127",
    image: "/team/kevin-tang.jpg",
  },
];
