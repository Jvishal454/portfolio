import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
           Here are some of my personal projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'gemini' ?
            <ToggleButton active value="gemini" onClick={() => setToggle('gemini')}>Gemini Clone</ToggleButton>
            :
            <ToggleButton value="gemini" onClick={() => setToggle('gemini')}>Gemini Clone</ToggleButton>
          }
          <Divider />
          {toggle === 'dzuokart' ?
            <ToggleButton active value="dzuokart" onClick={() => setToggle('dzuokart')}>DzuoKart - E-Commerce</ToggleButton>
            :
            <ToggleButton value="dzuokart" onClick={() => setToggle('dzuokart')}>Dzuokart - E-Commerce</ToggleButton>
          }      
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects