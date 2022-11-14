import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            Header
            Navbar
            Profile
            <header className="header">
                <img alt='logo'
                    src="https://abrakadabra.fun/uploads/posts/2022-01/1642131947_3-abrakadabra-fun-p-tyanka-na-prozrachnom-fone-3.png"/>
            </header>
            <nav className="navBar">
                <div>Profile</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
                <div>Settings</div>
            </nav>
            <div className='content'>
                <div>ava+descriptions
                    <img className="ava" alt='avatar'
                        src="https://abrakadabra.fun/uploads/posts/2022-01/1642131987_41-abrakadabra-fun-p-tyanka-na-prozrachnom-fone-48.jpg"/>
                </div>
                <div>My posts</div>
                <div>New post</div>
                <div>post1</div>
                <div>post 2</div>
            </div>

        </div>
    );
}

export default App;
