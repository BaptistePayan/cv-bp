import React from 'react';
import './Skills.css';
import Skill from './Skill';
import Interests from './interests';

function Skills() {
  return (
    <>
    <div className='skills'>
        <h2 className='h2'>Compétences</h2>
        <Skill title="HTML" rating="4" />
        <Skill title="CSS" rating="4" />
        <Skill title="SQL" rating="3" />
        <Skill title="JS" rating="3" />
        <Skill title="React" rating="3" />
        

    </div>
    <div className='skills'>
        <h2 className='h2'>Langues</h2>
        <Skill title="Français" rating="5" />
        <Skill title="Anglais" rating="3" />
    </div>
    <Interests />
    </>
  )
}
export default Skills;