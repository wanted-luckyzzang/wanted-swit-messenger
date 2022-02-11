export interface MeData {
  userId: number;
  userName: string | null;
  profileImage: string | null;
}

export interface MessageData extends MeData {
  content: string;
  date: string;
}
