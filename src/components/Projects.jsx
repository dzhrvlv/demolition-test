import React, {useEffect, useState} from 'react';
import Slider from "./UI/Slider/Slider";

// заглушка массива реализованных проектов
const exmplProjects = [
    {
        id: 1,
        title: 'Демонтаж барака',
        imageUrl: '/img/демонтаж1.jpg',
        description: 'Попросил ДемонтажСамара снести здание во дворе. Все сделали хорошо, ни единого кирпича не оставили!'
    },
    {
        id: 2,
        title: 'Снос завода',
        imageUrl: '/img/демонтаж2.jpg',
        description: 'Купил себе завод, но здание было старое, поэтому решил на его месте построить новый. Здание нужно было снести, обратился в ДемонтажСамара. Все сделали прекрасно! '
    },
    {
        id: 3,
        title: 'Раньше здесь был микрорайон!',
        imageUrl: '/img/демонтаж3.jpg',
        description: 'Губернатор выделил деньги на строительство детского городка с детскими садами, школой и больницей. Нужно было место для постройки, поэтому решили снести старый квартал на окраине города. ДемонтажСамара не оставили от него и следа!'
    },
]

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(exmplProjects)
    }, [])

    return (
        <section
            className='section projects'
            name='projects'
        >
            <a name='projects' className='section__anchor'/>
            <h2 className='section__title-black'>Реализованные проекты</h2>
            <Slider projects={projects}/>
        </section>
    );
};

export default Projects;