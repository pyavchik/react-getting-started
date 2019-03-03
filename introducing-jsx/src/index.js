import React from 'react';
import ReactDOM from 'react-dom';

const formatName = user => user.firstName + ' ' + user.lastName;


function getGreeting(user) {
    if (user) {
        return 'Hello, ' + formatName(user) + '!'
    }
    return 'Hello, Stranger!';
}

const user = {
    firstName: 'Nik',
    lastName: 'Pinkman',
    avatarUrl: 'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg'
};

// const element = <h1>{getGreeting(user)}</h1>;
// const element = <h1>{getGreeting()}</h1>;
// const element = <div tabIndex="0"></div>;
// const element = <img src={user.avatarUrl} alt="Grapefruit slice atop a pile of other slices"></img>;

//////////////////////////////////////////////////////////////////////////////////////////////////
// these elements are identical \
// const element = (
//     <h1 className="greeting">
//         Hello, world!
//     </h1>
// );

const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);

//////////////////////////////////////////////////////////////////////////////////////////////////

ReactDOM.render(
    element,
    document.getElementById('root')
);
