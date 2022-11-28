import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type dialogType = {
    id: number
    name: string
}
const dialogsData: dialogType[] = [
    {id: 1, name: 'Semen'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Ksenia'},
    {id: 4, name: 'Alesha'},
]

export type messageType = {
    id: number
    message: string
}

const messagesData: messageType[] = [
    {id: 1, message: 'Эй алё чё такой вася'},
    {id: 2, message: 'Дароу! кадила?'},
    {id: 3, message: 'Сегодня не оч'},
    {id: 4, message: 'Люблю тортики'},
]

export type postType = {
    id: number
    post: string
    likesCount: number
}

const postsData: postType[] = [
    {id: 1, post: 'Hello! my name is Anne. And you?', likesCount: 2},
    {id: 2, post: 'it`s my first post', likesCount: 42},
]


ReactDOM.render(
    <App postsData={postsData} messagesData={messagesData} dialogsData={dialogsData}/>,
  document.getElementById('root')
);