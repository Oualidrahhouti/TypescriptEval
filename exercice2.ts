export interface Administrateur {
  nom: string;
  email: string;
  ip: string;
  dt_connexion: Date;
  login: string;
  password: string;
}

type IpNom = Pick<Administrateur, "ip"> & Partial<Pick<Administrateur, "nom">>;

export interface UtilisateurAnonyme extends IpNom {}
