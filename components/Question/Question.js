import React from 'react'
import  Image  from 'next/image';
import Memory from '../../assets/images/memory.webp';
import Certificate from '../../assets/images/certificate.webp';
import Geometric from '../../assets/images/geometric.webp';
import Skills from '../../assets/images/skills.webp';
import styles from './Question.module.css';

const Question = () => {
    return (
        <div className={styles.question}>
            <div className={styles.pic}>
                <Image src={Memory} alt="memory-logo"  className={styles.logo} />
                <Image src={Certificate} alt="certificate-logo" className={styles.logo} />
                <Image src={Geometric} alt="Geometric-logo" className={styles.logo} />
                <Image src={Skills} alt="skills-logo" className={styles.logo} />
            </div>
            <div className={styles.text}>
                <h3>No matter what youre school question might be, tecworld learning has the answer</h3>
            </div>
            <div className={styles.para}>
                <p>As A School Director/Admin, If Preparing Your Pupils & Students For Careers & Jobs With Relevant Skills is your goal, setting your school in a standard no one can meet, having more parents enroll their children to your school, then #TECinEverySchool, with our unique 100% skills focus #TECict service, has the answer! Learning relevant skills needed for jobs and careers from year one upward is the best way you can have your pupils and students ready for their generation needs!</p>
            </div>
        </div>
    )
}

export default Question;
