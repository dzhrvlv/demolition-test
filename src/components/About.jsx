import React from 'react';

const About = () => {
    return (
        <div
            className='section about'
            name='about'
            style={{
                backgroundImage: `url('img/демонтаж-фон1.jpg')`
            }}
        >
            <a name='about' className='section__anchor'/>
            <div className="section__blocks">
                <div className="section__block">
                    <h2 className='section__title'>О нас</h2>
                    <p className="section__text">
                        Приветствуем на сайте компании <span className="section__text-big">ДемонтажСамара</span>. Наша
                        компания занимается демонтажом разных
                        объектов
                        инфраструктуры города уже более 10 лет и является крупнейшей в регионе в данной сфере. Если Вы
                        увидели, как кран сносит здание, то знайте, что скорее всего это работаем мы.
                    </p>
                </div>
                <div className="section__block">
                    <span className="about-services__title">
                        Услуги, которые мы предоставляем:
                    </span>
                    <ul className="about-services-list">
                        <li className="about-services-list__item">снос высотных зданий</li>
                        <li className="about-services-list__item">снос жилых домов</li>
                        <li className="about-services-list__item">демонтаж металлоконструкций</li>
                        <li className="about-services-list__item">расчистка гаражных массивов</li>
                        <li className="about-services-list__item">и многое другое...</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;