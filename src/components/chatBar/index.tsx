import React, {Component} from 'react';
import './chatBar.css';

interface Props {
  chatId: string,
  logoSrc: string,
  chatTitle: string,
  date: string,
  author: string,
  message: string,
  active: string | null,
  onClick: (id: string) => void
};

export class ChatBar extends Component<Props> {
  public render() {
    const {
      logoSrc,
      chatTitle,
      date,
      author,
      message,
      onClick,
      chatId,
      active
    } = this.props;

    return (
      <div onClick={(event) => onClick(chatId)} className={chatId === active ? "chat-bar chat-bar_active" : "chat-bar"}>
        <img src={logoSrc} alt={author} className="chat-bar__icon"/>

        <div className="chat-bar__column">
          <div className="chat-bar__row">
            <h2 className="chat-bar__title">{chatTitle}</h2>
            <p className="chat-bar__date">{date}</p>
          </div>

          <div className="chat-bar__row">
            <h2 className="chat-bar__author">{author}:</h2>
            <p className="chat-bar__text">{message}</p>
          </div> 
        </div>
      </div>
    )
  }
}