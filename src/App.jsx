import React, { useState } from 'react';
import { Button, Input, Form, message, Tooltip } from 'antd';
import { GithubOutlined, LinkedinOutlined, WhatsAppOutlined, MailOutlined, SendOutlined  } from '@ant-design/icons';
import { FaBars, FaTimes } from 'react-icons/fa'; // Added for mobile menu toggle
import emailjs from '@emailjs/browser';
const App = () => {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
    const [isSending, setIsSending] = useState(false);
    const projects = [
        {
            title: 'Tiwamart',
            description: 'A full-stack e-commerce platform with real-time inventory management, secure payments, and admin dashboard.',
            tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWTs', ' Stripe', 'Redux', ],
            image: './images/Tiwamart.png',
            demo: 'https://tiwamart.vercel.app',
            github: 'https://github.com/Tiwaloluwa002/tiwamart-backend',
        },{
            title: 'Bookstore',
            description: 'A full-stack e-commerce platform for books featuring Firebase authentication, Stripe payments, real-time inventory, and admin dashboard with product management (create/edit/delete).',
            tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API', 'Firebase Auth', ' RESTful API '],
            image: './images/Screenshot (72).png',
            demo: 'https://bookstore-coral-five.vercel.',
            github: 'https://github.com/Tiwaloluwa002/bookstore-backend'
        },
        
        {
            title: 'DeviceWise Store',
            description: 'An electronics e-commerce platform with creative UI, real-time inventory, and admin dashboard with product management (create/edit/delete)',
            tech: [' React (Vite)', ' Node.js', ' MongoDB', ' Express Router', ' JWT Authentication', ' RESTful API', ' Stripe API', 'Google Cloud', ' Vercel'],
            image: './images/Screenshot (74).png',
            demo: 'https://devicewise.vercel.app',  
            github: 'https://github.com/Tiwaloluwa002/DeviceWise'
        },
        {
            title: 'My Ai assistance chatbot',
            description: 'An intelligent chatbot combining Cohere AI, OpenAI, and Gemini with conversation memory and real-time responses',
            tech: ['React', 'Node.js', 'MongoDB', 'Express Router', 'OpenAI API', 'Google Gemini API','Cohere AI API'],
            image: './images/Screenshot (75app).png',
            demo: 'https://aiassistant-sage.vercel.app',
            github: 'https://github.com/Tiwaloluwa002/My-Ai-Assistant-chatbot'
        },
        {
            title: 'Food store web app(TSK)',
            description: 'Fixed-layout ordering system for restaurant touchscreens (optimized for 1080p displays).',
            tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Local Storage(Order Cache)', 'Styled Components (Large-screen UI)',],
            image: './images/Foodmart.png',
            demo: 'https://my-food-web-orderapp.vercel.app/home',
            github: 'https://github.com/Tiwaloluwa002/TSK'
        },
        {
            title: 'Tiwaloluwa Portfolio',
            description: 'A professional developer portfolio showcasing projects, skills, and contact information.',
            tech: [
                'React (Frontend)',
                'CSS3/SCSS (Styling)',
                'JavaScript (ES6+)',
                'Responsive Design',
                'Animation Libraries',
                'Form Handling'
            ],
            image: './images/2025-03-27 (1).png',
            demo: 'https://tiwaloluwaportfolio.vercel.app/',
            github: 'https://github.com/Tiwaloluwa002/My-Portfolio-'
        },
        // ... (other projects remain the same)
    ];

    const blogs = [
        {
            title: 'Building Scalable Microservices with Node.js',
            preview: 'Learn how to design and implement scalable microservices architecture using Node.js and Docker.',
            date: 'March 15, 2025',
            readTime: '2 min read',
            image: 'https://public.readdy.ai/ai/img_res/e1e93202f1dcbd1fd4f38167274fdcb6.jpg'
        },
        {
            title: 'Blazing-Fast React Apps with Vite 5.0',
            preview: 'The 2025 Performance Playbook',
            date: 'March 20, 2025',
            readTime: '1 min read',
            image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Express.js 2025',
            preview: 'Building APIs for the Post-Node.js Era',
            date: 'March 15, 2025',
            readTime: '2 min read',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        
        // ... (other blogs remain the same)
    ];
    const onFinish = async (values) => {
        setIsSending(true);

        try {
            // Replace these with your actual Email.js service details
            const serviceID = 'service_u7u3g4c';
            const templateID = 'template_i69ced6';
            const publicKey = 'jAAZspXSAxLDDR0Tl';

            await emailjs.send(
                serviceID,
                templateID,
                {
                    from_name: values.name,
                    from_email: values.email,
                    message: values.message
                },
                publicKey
            );

            messageApi.success('Message sent successfully!');
            form.resetFields();
        } catch (error) {
            console.error('Failed to send message:', error);
            messageApi.error('Failed to send message. Please try again later.');
        } finally {
            setIsSending(false);
        }
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="app-container">
            {contextHolder}

            {/* Navigation */}
            <nav className="main-nav">
                <div className="nav-container">
                    <div className="logo">Tiwaloluwa Akinsola</div>
                    <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <a href="#" onClick={() => setIsMenuOpen(false)}>About</a>
                        <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
                        <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
                        {/* <a href="#certificates" onClick={() => setIsMenuOpen(false)}>Certificates</a> */}
                        <a href="#blog" onClick={() => setIsMenuOpen(false)}>Blog</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                    </div>
                    <button className="mobile-menu-button" onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="profile-image-container">
                            <div className="profile-image-wrapper">
                                <img
                                    src="./images/tiwa.jpg"
                                    alt="Tiwaloluwa Akinsola"
                                    className="profile-image"
                                />
                            </div>
                            <div className="profile-details">
                                <div className="detail-item">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>Remote Developer(Worldwide)</span>
                                </div>
                                <div className="detail-item">
                                    <i className="fas fa-briefcase"></i>
                                    <span>3+ Years Experience</span>
                                </div>
                                <div className="detail-item">
                                    <i className="fas fa-graduation-cap"></i>
                                    <span>MSc Software Engineering</span>
                                </div>
                                <div className="detail-item">
                                    <i className="fas fa-code-branch"></i>
                                    <span>200+ GitHub contributions (including private repositories)</span>
                                </div>
                                <div className="detail-item">
                                    <i className="fas fa-award"></i>
                                    <span>15+ Certifications</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero-text">
                            <h1 className="hero-title">
                                Hi, I'm Tiwaloluwa Akinsola
                                <br />
                                <span className="highlight">Full Stack Developer</span>
                            </h1>
                            <p className="hero-description">
                                Crafting innovative digital solutions with modern technologies.
                                Specialized in building scalable and efficient web applications using React, Node.js, Express, MongoDB, and cloud technologies, delivering seamless user experiences.
                            </p>
                            <div className="about-card">
                                <h3>About Me</h3>
                                <p>
                                    As a passionate Software Engineering student at Obafemi Awolowo University, I've spent the past 3-4 years honing my full-stack development skills through academic projects and self-driven learning. I've built practical solutions that solve real problems for my university community and other community out there.
                                </p>
                                <p>
                                    I specialize in modern JavaScript frameworks, cloud technologies, and best practices.
                                    My approach combines technical expertise with a deep understanding of business needs and other evolving requirements to deliver solutions that exceed expectations.
                                </p>

                                {/* download resume */}
                                <Button
                                    type="primary"
                                    className="primary-button"
                                    onClick={() => {
                                        const link = document.createElement('a');
                                        link.href = '/assets/Tiwaloluwa_Akinsola_Resume.pdf';
                                        link.download = 'Tiwaloluwa_Akinsola_Resume.pdf';
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}
                                >
                                    Download Resume
                                </Button>
                                
                                
                                <div className="skills-grid">
                                    <div className="skill-card">
                                        <h4><i className="fas fa-laptop-code"></i>Frontend Expertise</h4>
                                        <p>React.js, HTML5, CSS3, JavaScript (ES6+),Tailwind CSS</p>
                                    </div>
                                    <div className="skill-card">
                                        <h4><i className="fas fa-server"></i>Backend Mastery</h4>
                                        <p>Node.js, Express.js, MongoDB, Middleware</p>
                                    </div>
                                    <div className="skill-card">
                                        <h4><i className="fas fa-cloud"></i>Cloud Services</h4>
                                        <p>AWS, Azure, Google Cloud,Vercel, Netlify</p>
                                    </div>
                                    <div className="skill-card">
                                        <h4><i className="fas fa-tools"></i>API and Security</h4>
                                        <p> Passport.js, API Reference, Postman, RESTful API, JSON Web Tokens</p>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-buttons">
                                <Button type="primary" className="primary-button">View Projects</Button>
                                <Button className="secondary-button">Contact Me</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="skills-section">
                <div className="section-container">
                    <h2 className="section-title">Technical Expertise</h2>
                    <div className="skills-grid-container">
                        <div className="skills-visual">
                            <div className="skills-circle">
                                <div className="center-circle">
                                    <i className="fas fa-code"></i>
                                </div>
                                <div className="skill-icon skill-1">
                                    <i className="fab fa-react"></i>
                                </div>
                                <div className="skill-icon skill-2">
                                    <i className="fab fa-node-js"></i>
                                </div>
                                <div className="skill-icon skill-3">
                                    <i className="fab fa-js"></i>
                                </div>
                                <div className="skill-icon skill-4">
                                    <i className="fab fa-html5"></i>
                                </div>
                                <div className="skill-icon skill-5">
                                    <i className="fab fa-css3-alt"></i>
                                </div>
                                <div className="skill-icon skill-6">
                                    <i className="fas fa-database"></i>
                                </div>
                                <svg className="connecting-lines">
                                    <line x1="50%" y1="0" x2="50%" y2="50%" />
                                    <line x1="100%" y1="25%" x2="50%" y2="50%" />
                                    <line x1="100%" y1="75%" x2="50%" y2="50%" />
                                    <line x1="50%" y1="100%" x2="50%" y2="50%" />
                                    <line x1="0" y1="75%" x2="50%" y2="50%" />
                                    <line x1="0" y1="25%" x2="50%" y2="50%" />
                                </svg>
                            </div>
                        </div>
                        <div className="skills-descriptions">
                                <div className="skill-description-card">
                                    <h3><i className="fas fa-paint-brush"></i> Frontend Development</h3>
                                    <p>
                                        Expert in <strong>React, Next.js, and modern JavaScript</strong>, specializing in responsive, accessible, and high-performance UIs with state management (Redux, Context API) and CSS frameworks (Tailwind, SASS).
                                    </p>
                                </div>

                                <div className="skill-description-card">
                                    <h3><i className="fas fa-database"></i> Backend Development</h3>
                                    <p>
                                        Skilled in building <strong>scalable RESTful APIs and server-side applications</strong> using <strong>Node.js, Express, and MongoDB</strong>. Experienced in <strong>authentication (JWT, OAuth, sessions)</strong>, microservices, and real-time features (WebSockets).
                                    </p>
                                </div>

                            <div className="skill-description-card">
                                <h3><i className="fas fa-network-wired"></i> Cloud & Deployment</h3>
                                <p>
                                    Deployed full-stack apps on <strong>Vercel, Netlify, Heroku, and AWS</strong> with optimized performance.
                                    Used <strong>GitHub/GitLab</strong> for version control and CI/CD workflows.
                                    Exploring <strong>Docker</strong> for containerization and scalable deployments.
                                </p>
                            </div>

                                <div className="skill-description-card">
                                    <h3><i className="fas fa-shield-alt"></i> Security & Performance</h3>
                                    <p>
                                        Implemented <strong>security best practices (CORS, rate limiting, encryption)</strong> and optimized performance via <strong>caching (Redis), query tuning, and CDN integration</strong> for seamless scalability.
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Projects Section */}
            <section id="projects" className="projects-section">
                <div className="section-container">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div key={index} className="project-card">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/400x225?text=Project+Image';
                                    }}
                                />
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="tech-tags">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="project-buttons">
                                        {project.demo && (
                                            <button
                                                onClick={() => window.open(project.demo, '_blank')}
                                                className="primary-button"
                                            >
                                                <i className="fas fa-external-link-alt"></i>
                                                Live Demo
                                            </button>
                                        )}
                                        {project.github && (
                                            <button
                                                onClick={() => window.open(project.github, '_blank')}
                                                className="secondary-button"
                                            >
                                                <i className="fab fa-github"></i>
                                                GitHub
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certificates Section */}
            {/* Certificates Section */}
            {/* <section id="certificates" className="certificates-section">
                <div className="section-container">
                    <h2 className="section-title">Professional Certificates</h2>
                    <div className="certificates-grid carousel-container" id="certificates-carousel">
                        <div className="certificate-card carousel-item">
                            <img src="https://public.readdy.ai/ai/img_res/b3342ef786eb0994ac3fd8c96c3e59aa.jpg"
                                alt="AWS Certificate" className="certificate-image" />
                            <h3>AWS Solutions Architect</h3>
                            <p className="certificate-issuer">Amazon Web Services</p>
                            <p className="certificate-date">Issued Dec 2024 • Expires Dec 2027</p>
                        </div>
                        <div className="certificate-card carousel-item">
                            <img src="https://public.readdy.ai/ai/img_res/737e957cbed61e126358d9cab43cb10c.jpg"
                                alt="Google Cloud Certificate" className="certificate-image" />
                            <h3>Professional Cloud Developer</h3>
                            <p className="certificate-issuer">Google Cloud Platform</p>
                            <p className="certificate-date">Issued Jan 2025 • Expires Jan 2028</p>
                        </div>
                        <div className="certificate-card carousel-item">
                            <img src="https://public.readdy.ai/ai/img_res/f320a167fb1c4486dc9470fc4edb7362.jpg"
                                alt="Azure Certificate" className="certificate-image" />
                            <h3>Azure Solutions Architect</h3>
                            <p className="certificate-issuer">Microsoft Azure</p>
                            <p className="certificate-date">Issued Feb 2025 • Expires Feb 2028</p>
                        </div>
                    </div>
                 
                </div>
            </section> */}

            {/* Blog Section */}
            <section id="blog" className="blog-section">
                <div className="section-container">
                    <h2 className="section-title">Latest Articles</h2>
                    <div className="blog-grid">
                        {blogs.map((blog, index) => (
                            <div key={index} className="blog-card">
                                <img src={blog.image} alt={blog.title} className="blog-image" />
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <i className="far fa-calendar-alt"></i>
                                        <span>{blog.date}</span>
                                        <span className="separator">•</span>
                                        <i className="far fa-clock"></i>
                                        <span>{blog.readTime}</span>
                                    </div>
                                    <h3>{blog.title}</h3>
                                    <p>{blog.preview}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="view-all-button">
                        <Button
                            type="primary"
                            className="primary-button"
                            onClick={() => window.open("https://medium.com/@tiwaloluwaakinsola1", "_blank")}
                        >
                            View All Articles
                        </Button>
                    </div>
                </div>
            </section>
            {/* Contact Section */}
            <section id="contact" className="contact-section">
                <div className="section-container">
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="contact-form-container">
                        <Form form={form} onFinish={onFinish} layout="vertical">
                            <Form.Item name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                                <Input size="large" placeholder="Your Name" className="form-input" />
                            </Form.Item>
                            <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}>
                                <Input size="large" placeholder="Your Email" className="form-input" />
                            </Form.Item>
                            <Form.Item name="message" rules={[{ required: true, message: 'Please input your message!' }]}>
                                <Input.TextArea rows={4} placeholder="Your Message" className="form-textarea" />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    icon={<SendOutlined />}
                                    className="submit-button"
                                    loading={isSending}
                                >
                                    {isSending ? 'Sending...' : 'Send Message'}
                                </Button>
                            </Form.Item>
                        </Form>
                        <div className="social-links">
                            <Tooltip title="GitHub">
                                <a href="https://github.com/Tiwaloluwa002" target="_blank" rel="noopener noreferrer">
                                    <GithubOutlined className="social-icon" />
                                </a>
                            </Tooltip>
                            <Tooltip title="LinkedIn">
                                <a href="www.linkedin.com/in/tiwaloluwaakinsola" target="_blank" rel="noopener noreferrer">
                                    <LinkedinOutlined className="social-icon" />
                                </a>
                            </Tooltip>
                            <Tooltip title="WhatsApp">
                                <a href="https://wa.me/2348051916081" target="_blank" rel="noopener noreferrer">
                                    <WhatsAppOutlined className="social-icon" />
                                </a>
                            </Tooltip>
                            <Tooltip title="Email">
                                <a
                                    href="mailto:tiwaloluwaakinsola1@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MailOutlined className="social-icon" />
                                </a>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="main-footer">
                <div className="footer-container">
                    <p>© 2025 Tiwaloluwa Akinsola. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;