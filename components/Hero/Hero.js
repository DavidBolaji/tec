import React from 'react'
import Image from 'next/image';
import HeroList from '../HeroList/HeroList';
import Home from '../../assets/images/home.webp';
import School from '../../assets/images/school.webp';
import Community from '../../assets/images/community1.webp';
import datas from '../../data/carou-data';


import { useSelector, useDispatch } from 'react-redux';



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
