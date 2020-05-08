import React, {Component} from 'react';
import './chatList.css';
import { ChatBar } from '../chatBar';

import { Chat } from '../../types/Chat';
import { User } from '../../types/User';

interface Props {
  chats: Chat[],
  users: User[],
  active: string | null,
  onClick: (id: string) => void
};

export class ChatList extends Component<Props> {
  public sortAndGetLastMessage(array: Chat[]) {
    const { users } = this.props;

    array.map(item => {
      item.lastMessage = item.messages[item.messages.length - 1].text;
      item.lastDate = item.messages[item.messages.length - 1].date;

      users.forEach(el => {
        if (el.id ===  item.messages[item.messages.length - 1].authorId) {
          item.lastAuthor = el.name
        }
      });

      return item
    })
      
    const newArray = array.sort((a, b) => {
      const aDate = a.lastDate.split('/').reverse().join('-');
      const bDate = b.lastDate.split('/').reverse().join('-');

      return Date.parse(bDate) - Date.parse(aDate)
    });

    return newArray
  }

  public render() {
    const { chats, onClick, active } = this.props;
    
    return (
      <nav className="chat-list">
        {this.sortAndGetLastMessage(chats).map(item => {
          return (<ChatBar
            chatId={item.id}
            key={item.id}
            onClick={onClick}
            logoSrc={item.icon}
            chatTitle={item.title}
            date={item.lastDate}
            author={item.lastAuthor}
            message={item.lastMessage}
            active={active}
          />)
        })}
      </nav>
    )
  }
}