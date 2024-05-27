export default function Services() {
     const services = [
          {
            title: 'Web Development',
            image: '/src/web_development.jpeg',
            description: 'Custom web development tailored to your business needs. From static websites to dynamic web applications, I create solutions that engage your audience and drive results.',
          },
          {
            title: 'Mobile App Development',
            image: '/src/app_development.jpeg',
            description: 'Crafting intuitive and user-friendly mobile applications for iOS and Android platforms. I transform your ideas into powerful apps that captivate users and enhance your brand.',
          },
          {
            title: 'Software Consulting',
            image: '/src/software_consulting.jpg',
            description: 'Expert advice and guidance on software development projects. I help you navigate technical challenges, optimize processes, and achieve your business objectives efficiently.',
          },
        ];
      
        return (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>My Services</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
              {services.map((service, index) => (
                <div key={index} style={{ margin: '20px', maxWidth: '300px' }}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
                  />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
}
    