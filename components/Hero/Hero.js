import React from 'react'
import Image from 'next/image';
import HeroList from '../HeroList/HeroList';
import Home from '../../assets/images/home.webp';
import School from '../../assets/images/school.webp';
import Community from '../../assets/images/community1.webp';


import { useSelector, useDispatch } from 'react-redux';


const datas = [
    {
        id: '01',
        title: 'Every child needs personalized education',
        text: 'We’re excited to help empower TEC parents and TEC students to be active and engaged partners in learning.',
        image: Home,
        page: 'home'
    },
    {
        id: '02',
        title: 'Schools are the greatest institutions',
        text: 'At TEC, and with TEC IN EVERY SCHOOL innovation, our mission is to transform your vision and meet every student/pupil specific need.',
        image: School,
        page: 'school'
    },
    {
        id: '03',
        title: 'Tecworld, focus on center activities',
        text: 'TEC IN EVERY COMMUNITY allow us to train and have seminars for companies, organizations, business owners etc.',
        image: Community,
        page: 'community'
    }
];

const Hero = () => {
    const active = useSelector(state => state.themeReducer);
    console.log(active);
    return <HeroList
            id={datas[active].id}
            key={datas[active].id} 
            title={datas[active].title}
            text={datas[active].text}
            image={datas[active].image}
            page={datas[active].page}
        />
}

export default Hero;
