import React from 'react'
import Card from './components/Card/Card'
import './Style/AppStyle.css'

function App() {
  return (
    <div className="AppContainer">
      <Card
      name="María García"
      imageUrl="https://bcw-media.s3.ap-northeast-1.amazonaws.com/large_Realistic_255556586487996_2736534a2a.jpg"
      imageAlt="Foto de María García"
      proffesion="Desarrolladora Frontend"
      description="Apasionada por crear interfaces de usuario intuitivas y responsivas. Especializada en React y JavaScript."
      />
        <Card
      name="Carlos Rodríguez"
      imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
      imageAlt="Foto de Carlos Rodríguez"
      proffesion="Ingeniero de Software"
      description="Experto en arquitectura de software y desarrollo de aplicaciones escalables. 8 años de experiencia en el sector."
      />
        <Card
      name="Ana López"
      imageUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
      imageAlt="Foto de Ana López"
      proffesion="Diseñadora UX/UI"
      description="Creativa especializada en experiencia de usuario. Combina diseño visual con investigación de usuarios para crear productos excepcionales."
      />
        <Card
      name="Diego Martínez"
      imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
      imageAlt="Foto de Diego Martínez"
      proffesion="Desarrollador Full Stack"
      description="Desarrollador completo con experiencia en frontend y backend. Domina tecnologías como Node.js, Python y bases de datos."
      />
    </div>
  )
}
export default App
