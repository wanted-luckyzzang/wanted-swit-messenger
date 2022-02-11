export interface MeData {
  userId: number;
  userName: string | undefined;
  profileImage: string | ArrayBuffer | null;
}

export interface MessageData extends MeData {
  content: string;
  date: string;
}
