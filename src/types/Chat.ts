interface Message {
  id: string,
  authorId: string,
  date: string,
  time: string,
  text: string
};

export interface Chat {
  id: string,
  title: string,
  icon: string,
  messages: Message[],
  lastMessage: string,
  lastDate: string,
  lastAuthor: string
};