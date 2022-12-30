
export interface IEducacion {
    logo: string;
    institucion: string;
    programa: string;
    fechas: string;
    duracion?: string
    credencial?: string
  }

  export interface IHabilidad {
    logo: string;
    nombre: string;
  }

  export interface IContacto {
    logo: string;
    nombre: string;
    nombreLink: string;
    url: string;
  }

  export interface ILinkModel {
    link: string;
    icon: string;
  }