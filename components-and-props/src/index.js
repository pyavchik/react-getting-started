import React from 'react';
import ReactDOM from 'react-dom';

// // The simplest way to define a component is to write a JavaScript function:
// const props = {
//     name: 'aleks'
// };
//
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
// ReactDOM.render(Welcome(props), document.getElementById('root'));

// // define a component with ES6 class:
// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }
//
// ReactDOM.render(<Welcome name="Sara"/>, document.getElementById('root'));

//////////////////////////////////////////////////////////////////////////////////////////////////////

// // Elements can also represent user-defined components:
// const element = <Welcome name="Sara Connor" />;
//
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
//
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

//////////////////////////////////////////////////////////////////////////////////////////////////////
// // App component renders Welcome many times:
//
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
//
// function App() {
//     return (
//         <div>
//             <Welcome name="Sara" />
//             <Welcome name="Cahal" />
//             <Welcome name="Edite" />
//         </div>
//     );
// }
//
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

//////////////////////////////////////////////////////////////////////////////////////////////////////

// // We can split components into smaller components:
//
// function formatDate(date) {
//     return date.toLocaleDateString();
// }
//
// function Comment(props) {
//     return (
//         <div className="Comment">
//             <div className="UserInfo">
//                 <img
//                     className="Avatar"
//                     src={props.author.avatarUrl}
//                     alt={props.author.name}
//                 />
//                 <div className="UserInfo-name">
//                     {props.author.name}
//                 </div>
//             </div>
//             <div className="Comment-text">{props.text}</div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }
//
// const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//         name: 'Aleksander',
//         avatarUrl: 'https://placekitten.com/g/64/64',
//     },
// };
// ReactDOM.render(
//     <Comment
//         date={comment.date}
//         text={comment.text}
//         author={comment.author}
//     />,
//     document.getElementById('root')
// );

//////////////////////////////////////////////////////////////////////////////////////////////////////

function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return (
        <img
            className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">{props.user.name}</div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Aleksander',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};
ReactDOM.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
    />,
    document.getElementById('root')
);

