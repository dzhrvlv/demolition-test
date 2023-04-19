import React from 'react';

const navigation = [
    {
        title: 'О нас',
        link: '#about',
    },
    {
        title: 'Проекты',
        link: '#projects',
    },
    {
        title: 'Связаться с нами',
        link: '#clientForm',
    },
]

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__logo'>ДемонтажСамара</h1>
            <nav className='header-nav'>
                {navigation.map(item =>
                    <a className='header-nav__link' href={item.link}>{item.title}</a>
                )}
            </nav>
        </header>
    );
};

export default Header;