import React, {Component} from 'react';
import { chats, users } from '../../assets/chatData';
import './chat.css';
import { ChatList } from '../chatList';
import { Screen } from '../messageScreen';

interface State {
  active: string | null
}

export class Chat extends Component<{}, State> {
  public state = {
    active: null,
  }

  public handleActiveChat = (chatId: string) => {
    this.setState({ active: chatId });
  }

  public render() {
    return (
      <main className="chat">
        <ChatList
          active={this.state.active}
          onClick={this.handleActiveChat}
          chats={chats}
          users={users}
        />
        <Screen
          active={this.state.active}
          chats={chats}
          users={users}
        />
      </main>
    )
  }
}