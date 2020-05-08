import React, {Component} from 'react';
import './messageScreen.css';
import { Message } from '../message';

import { Chat } from '../../types/Chat';
import { User } from '../../types/User';

interface Props {
  chats: Chat[],
  users: User[],
  active: string | null
}

export class Screen extends Component<Props> {
  public getUsers() {
    const { chats, users, active} = this.props;
    const activeChat = chats.find(item => {
      return item.id === active
    });

    let usersArray:User[] = [];
    
    activeChat?.messages.forEach(item => {
      users.forEach(el => {
        if (el.id === item.authorId) {
          usersArray.push(el);
        }
      })
    });

    return usersArray
  }

  public render() {
    const { chats, users, active} = this.props;
    const activeChat = chats.find(item => {
      return item.id === active
    });

    return (
      <div className="screen">
        {activeChat !== undefined ? activeChat.messages.map((item, index) => {
          const user = users.find(el => {
            return el.id === item.authorId
          });

          return (
            <Message
              key={item.id}
              img={user!.image}
              author={user!.name}
              text={item.text}
              time={item.time}
              date={item.date}
            />
          )
        }) : <h2 className="screen__placeholder">Выберите чат из списка слева</h2>
        }
      </div>
    )
  }
}