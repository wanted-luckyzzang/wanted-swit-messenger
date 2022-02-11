export interface MeData {
  userId: number;
  userName: string | undefined;
  profileImage: string;
}

export interface MessageData extends MeData {
  content: string;
  date: string;
}
