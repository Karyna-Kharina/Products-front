import React from "react";

const FormatDate = (date) => date.toLocaleDateString();

const Avatar = (props) => <img
    className="Avatar"
    src={props.user.avatarUrl}
    alt={props.user.name}
/>;

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://i.pinimg.com/originals/cc/39/05/cc3905eccbf93a323036e7b3c02c0c7a.jpg',
    },
};

const UserInfo = (props) => {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
};

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {FormatDate(props.date)}
            </div>
        </div>
    );
}

export default function () {
    return (
        <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author}/>
    )
}