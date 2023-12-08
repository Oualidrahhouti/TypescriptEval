export interface Administrateur {
  nom: string;
  email: string;
  ip: string;
  dt_connexion: Date;
  login: string;
  password: string;
}

export type UtilisateurAnonyme = {
  nom?: string;
  ip: string;
} & Pick<Administrateur, "ip">;
