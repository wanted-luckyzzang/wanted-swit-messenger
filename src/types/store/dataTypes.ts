export interface MeData {
  userId: number;
  userName: string | undefined;
  profileImage: string | undefined;
}

export interface MessageData extends MeData {
  content: string;
  date: string;
}
