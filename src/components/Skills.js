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
        <Skill title="JavaScript" rating="3" />
        <Skill title="React" rating="3" />
        <Skill title="Node.js" rating="2" />
        <Skill title="Vue.js" rating="2" />
        <Skill title="PHP" rating="2" />

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