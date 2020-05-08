import React, {Component} from 'react';
import './message.css';

interface Props {
  img: string,
  author: string,
  text: string,
  date: string,
  time: string
}

export class Message extends Component<Props> {
  public render() {
    const {
      img,
      author,
      text,
      date,
      time
    } = this.props;

    return (
      <div className="message">
        <img src={img} alt={author} className="message__img"/>

        <div className="message__text-column">
          <p className="message__author">{author}</p>
          <p className="message__text">{text}</p>
        </div>

        <p className="message__time">{date}<br/>{time}</p>
      </div>
    )
  }
}