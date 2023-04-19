import React from 'react';
import Form from "./UI/Form";

const ClientForm = () => {
    return (
        <section
            className='section client'
            name='clientForm'
            style={{
                backgroundImage: `url('img/демонтаж-фон2.jpg')`
            }}
        >
            <a name='clientForm' className='section__anchor'/>
            <div className="section__blocks">
                <div className="section__block">
                    <h2 className='section__title'>Связаться с нами</h2>
                    <p className="section__text">
                        Оставьте свои контакты, чтобы получить консультацию и выбрать услуги. Мы свяжемся с вами в
                        течение суток.
                    </p>
                </div>
                <div className='section__block'>
                    <Form title="Оставьте контакты"/>
                </div>
            </div>
        </section>
    );
};

export default ClientForm;