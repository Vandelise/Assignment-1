export default function Projects() {
        const projects = [
            {
              title: 'Project One',
              image: '/src/project1.jpg',
              description: 'I was the lead developer on this project. The project involved developing a web application using React and Node.js. The outcome was a fully functional, responsive application that streamlined the client’s workflow.',
            },
            {
              title: 'Project Two',
              image: '/src/project2.jpg',
              description: 'I contributed as a backend developer, focusing on API development with Express.js and MongoDB. The project resulted in a scalable and efficient backend service that significantly improved data management.',
            },
            {
              title: 'Project Three',
              image: '/src/project3.png',
              description: 'As a full stack developer, I worked on both frontend and backend parts of this e-commerce platform. The outcome was a user-friendly and high-performing platform that boosted the client’s online sales.',
            },
          ];
        
          return (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <h1>Projects</h1>
              <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                {projects.map((project, index) => (
                  <div key={index} style={{ margin: '20px', maxWidth: '300px' }}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
                    />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          );
  }
    