import React, {useState} from 'react';
import Input from "./Input";
import Button from "./Button";

const Form = (props) => {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const onSubmit = (e) => {
        e.preventDefault()
        const client = {
            ...form
        }
        alert(`Спасибо ${client.name}! Мы свяжемся с вами в ближайшее время!`)
    }

    return (
        <form onSubmit={onSubmit} className='form'>
            <h3>{props.title}</h3>
            <Input
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
                type="text"
                placeholder="Имя"
                required
            />
            <Input
                value={form.phone}
                onChange={e => setForm({...form, phone: e.target.value})}
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="Телефон"
                required
            />
            <Input
                value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
                type="email"
                placeholder="E-mail"
                required
            />
            <Button>Отправить</Button>
        </form>
    );
};

export default Form;