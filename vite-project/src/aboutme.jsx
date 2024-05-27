export default function Aboutme() {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>About Me</h1>
        <img 
          src="/src/image.jpg" 
          alt="Vandelise Vanna Schumack" 
          style={{ width: '150px', height: '150px', borderRadius: '50%' }} 
        />
        <h2> Vandelise Vanna Schumack</h2>
        <p>
          Hello! My name is Vandelise Vanna Schumack. I am a full stack developer based in Canada. 
          I have a passion for creating dynamic and responsive web applications that 
          provide excellent user experiences. With a strong background in both front-end 
          and back-end development, I enjoy working with the latest technologies to build 
          innovative solutions.
        </p>
        <p>
        <a href="/src/resume.pdf" target="_blank" rel="noopener noreferrer">
          Download my Resume (PDF)
        </a>
      </p>
      </div>
    );
}
    