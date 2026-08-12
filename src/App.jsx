import React, { useEffect, useMemo, useState } from "react";
import {
  Mail, Phone, CalendarDays, MapPin, ChevronDown, Github, Linkedin,
  Instagram, Facebook, Twitter, Code2, Palette, Monitor, Send,
  FileText, Download, BookOpen, ExternalLink, X, Eye
} from "lucide-react";

const A = "/src/assets/";

const testimonials = [
  { name: "Abhimanyu Payasi", image: "Abhimanyu.png", text: "Abhimanyu was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client." },
  { name: "Ankit Kumar", image: "ankit.png", text: "Ankit was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client." },
  { name: "Raja Yadav", image: "raja.jpg", text: "Raja was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client." },
  { name: "Rahul Kumar", image: "rahul.jpg", text: "Rahul was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client." }
];

const projects = [
  ["Hospital Management System", "Web development", "project7.png"],
  ["Automate Doctor-patient management System", "Web development", "project-1.jpg"],
  ["Book My Show App", "Web development", "project2.jpg"],
  ["Zomato-Landing Page Clone", "Web design", "project-3.png"],
  ["YumXpress App-Desktop Application", "Applications", "project-4.png"],
  ["The Food Wala", "Web design", "project-5.png"],
  ["The Flower Shop", "Web design", "project-6.png"],
  ["YumXpress App-Desktop Application", "Applications", "project-4.png"]
];

const blogs = [
  ["Design website for user-friendly", "Design", "23 March 2024", "E-commerce", "blog1.png"],
  ["Design website for user-friendly", "Design", "23 March 2024", "E-commerce", "blog2.png"],
  ["Design website for user-friendly", "Design", "23 March 2024", "E-commerce", "blog3.png"],
  ["Design website for user-friendly", "Design", "23 August 2023", "E-commerce", "blog4.png"]
];

function Sidebar({ open, setOpen }) {
  return (
    <aside className={`sidebar ${open ? "active" : ""}`}>
      <div className="sidebar-info">
        <div className="avatar-box"><img src={A + "profile.jpg"} alt="Manish Kumar" /></div>
        <div className="info-content">
          <h1>Manish Kumar</h1>
          <p>Java Full Stack Developer</p>
        </div>
        <button className="info-more-btn" onClick={() => setOpen(!open)} aria-label="Toggle contacts">
          <ChevronDown size={18} />
        </button>
      </div>

      <div className="sidebar-more">
        <div className="separator" />
        <ul className="contacts-list">
          <li><span className="icon-box"><Mail size={16}/></span><div><small>Email</small><a href="mailto:manishsah7485@gmail.com">manishsah7485@gmail.com</a></div></li>
          <li><span className="icon-box"><Phone size={16}/></span><div><small>Phone</small><a href="tel:+916206848898">+91 6206848898</a></div></li>
          <li><span className="icon-box"><CalendarDays size={16}/></span><div><small>Birthday</small><span>Jan 01, 2004</span></div></li>
          <li><span className="icon-box"><MapPin size={16}/></span><div><small>Location</small><span>Gopalganj, Bihar, INDIA</span></div></li>
        </ul>
        <div className="separator" />
        <div className="social-list">
          <a href="https://x.com/manishsah7485" target="_blank" rel="noreferrer"><Twitter/></a>
          <a href="https://www.instagram.com/bj_manish_45/" target="_blank" rel="noreferrer"><Instagram/></a>
          <a href="https://github.com/bjmanish" target="_blank" rel="noreferrer"><Github/></a>
          <a href="https://www.linkedin.com/in/manish-kumar-b591a1226/" target="_blank" rel="noreferrer"><Linkedin/></a>
          <a href="https://www.facebook.com/profile.php?id=100028204669444" target="_blank" rel="noreferrer"><Facebook/></a>
        </div>
      </div>
    </aside>
  );
}

function Navbar({ page, setPage }) {
  const items = ["about", "resume", "portfolio", "blog", "certificate", "contact"];
  return <nav className="navbar"><ul>{items.map(item =>
    <li key={item}><button className={page === item ? "active" : ""} onClick={() => setPage(item)}>{item[0].toUpperCase()+item.slice(1)}</button></li>
  )}</ul></nav>;
}

function About() {
  const [selected, setSelected] = useState(null);
  return <Article title="About me" className="about">
    <section className="about-text">
      <p>As a Fresher, I excel in HTML, CSS, JavaScript, Java and web applications and more technologies. My dedication to innovation, teamwork for your projects. I’m solving problem on CodeChef, Hackerearth, LeetCode, and also more coding platform.</p>
      <p>My job is to build your website so that it is functional and user-friendly but at the same attractive. Moreover, add personal touch to your product and make sure that it is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.</p>
    </section>

    <h3 className="section-title">What i'm doing</h3>
    <div className="service-list">
      {[
        ["icon-design.svg", "Web design", "The most modern and high-quality design made at a Beginner level."],
        ["icon-dev.svg", "Web development", "High-quality development of sites at the Beginner level."],
        ["icon-app.svg", "Desktop apps", "Learner of desktop applications for ios."]
      ].map(([icon, title, text]) => <div className="service-item" key={title}>
        <img src={A+icon} alt="" />
        <div><h4>{title}</h4><p>{text}</p></div>
      </div>)}
    </div>

    <h3 className="section-title testimonials-heading">Testimonials</h3>
    <div className="testimonials-list">
      {testimonials.map(t => <button className="testimonial-card" key={t.name} onClick={() => setSelected(t)}>
        <img src={A+t.image} alt={t.name}/>
        <div><h4>{t.name}</h4><p>{t.text}</p></div>
      </button>)}
    </div>
    {selected && <div className="modal" onClick={() => setSelected(null)}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setSelected(null)}><X/></button>
        <img src={A+selected.image} alt={selected.name}/>
        <div><h3>{selected.name}</h3><time>10 Oct, 2021</time><p>{selected.text}</p></div>
      </div>
    </div>}
  </Article>;
}

function Resume() {
  const skills = [["HTML , CSS",80],["JavaScript",50],["Java",90],["C/C++(Basic)",50],["Data Structure",50],["MySQL Database",50],["SQL Database",70]];
  return <Article title="Resume">
    <div className="resume-actions">
      <a href="https://manishresume.my.canva.site/manish-resume-pdf" target="_blank" rel="noreferrer"><FileText/> View Resume</a>
      <button disabled><Download/> Download Resume not uploaded yet</button>
    </div>
    <Timeline title="Education" items={[
      ["Technocrats Institute of Technology & Science, Bhopal, Madhya Pradesh","2021-2025","B.Tech - Computer Science & Engineering","CGPA = 7.83"],
      ["DR. R M L S S School, Gopalganj, Bihar","2019-2021","Intermediate - Science","Percentage = 73.80%"],
      ["DR. R M L H S School, Gopalganj, Bihar","2017-2019","High School (Matric)","Percentage = 66.00%"]
    ]}/>
    <Timeline title="Experience" items={[
      ["April 2025 – May 2025","Software Development Engineer (SDE) Intern at BlueStock.in – Remote","Gained hands-on experience in various software programs, increasing proficiency and expanding technical skill set.","Mentored junior developers by providing guidance on best practices, coding techniques, and problem-solving skills."],
      ["April 2023 – May 2024","Java Full Stack Web Development at Sharma Computer Academy, Bhopal, Madhya Pradesh","Developed a web application using Java EE technologies, including JSP, Servlets, and JDBC.","Developed an enterprise web application using Java Servlets and a secure authentication system."],
      ["April 2024 – June 2024","Self Paced Full Stack Web Developer at DevTown, Remote","Developed a full stack web application using React, Node.js, HTML5, CSS3, JavaScript, and MongoDB.","Developed back-end services, front-end interface, and database."],
      ["March 2024 – April 2024","Web Design and Development at Internship Studio, Remote","Utilized HTML5, CSS3, and JavaScript to create a dynamic, interactive user interface.","Employed AJAX and JSON technologies for seamless data exchange."]
    ]}/>
    <h3 className="section-title">My Skills</h3>
    <div className="skills-card">{skills.map(([name,value]) => <div className="skill" key={name}>
      <div><b>{name}</b><span>{value}%</span></div><div className="skill-bg"><i style={{width:value+"%"}}/></div>
    </div>)}</div>
  </Article>;
}

function Timeline({title, items}) {
  return <section className="timeline"><div className="timeline-title"><span className="icon-box"><BookOpen size={17}/></span><h3>{title}</h3></div>
    <ol>{items.map((x,i)=><li key={i}><h4>{x[0]}</h4><span>{x[1]}</span><p>{x[2]}</p><p>{x[3]}</p></li>)}</ol>
  </section>;
}

function Portfolio() {
  const [filter,setFilter] = useState("All");
  const visible = useMemo(() => filter === "All" ? projects : projects.filter(p => p[1].toLowerCase() === filter.toLowerCase()), [filter]);
  return <Article title="Portfolio">
    <div className="filters">{["All","Web design","Applications","Web development"].map(x => <button key={x} className={filter===x?"active":""} onClick={()=>setFilter(x)}>{x}</button>)}</div>
    <div className="project-grid">{visible.map(([name,cat,img],i)=><div className="project-card" key={name+i}>
      <div className="project-image"><img src={A+img} alt={name}/><span><Eye size={20}/></span></div><h3>{name}</h3><p>{cat}</p>
    </div>)}</div>
  </Article>;
}

function Blog() {
  return <Article title="Blog"><div className="blog-grid">{blogs.map(([title,cat,date,text,img])=><article className="blog-card" key={img}>
    <img src={A+img} alt={title}/><div><div className="blog-meta">{cat}<i/> {date}</div><h3>{title}</h3><p>{text}</p></div>
  </article>)}</div></Article>;
}

function Certificate() {
  return <Article title="Certificate"><div className="empty-card">I am uploading our Certificate section as soon as possible.</div></Article>;
}

function Contact() {
  const [sent,setSent] = useState(false);
  const [form,setForm] = useState({fullname:"",email:"",message:""});
  const valid = form.fullname && form.email && form.message;
  const submit = e => { e.preventDefault(); setSent(true); };
  return <Article title="Contact">
    <div className="map"><iframe title="Noida map" src="https://www.google.com/maps?q=Noida,Uttar Pradesh&output=embed" loading="lazy"/></div>
    <h3 className="section-title">Contact Form</h3>
    <form className="contact-form" onSubmit={submit}>
      <div className="input-row"><input required placeholder="Full name" value={form.fullname} onChange={e=>setForm({...form,fullname:e.target.value})}/><input required type="email" placeholder="Email address" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></div>
      <textarea required placeholder="Type your Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/>
      <button disabled={!valid}><Send/> <span>{sent ? "Message ready to send" : "Send Message"}</span></button>
      {sent && <p className="success">Form submitted locally. Connect Web3Forms/backend to send it to email.</p>}
    </form>
  </Article>;
}

function Article({title,children}) { return <article className="page"><header><h2>{title}</h2></header>{children}</article>; }

export default function App() {
  const [page,setPage] = useState(() => location.hash.slice(1) || "about");
  const [sidebarOpen,setSidebarOpen] = useState(false);

  useEffect(() => {
    const onHash = () => setPage(location.hash.slice(1) || "about");
    window.addEventListener("hashchange",onHash);
    return () => window.removeEventListener("hashchange",onHash);
  },[]);

  const navigate = p => { setPage(p); history.pushState({}, "", "#"+p); window.scrollTo({top:0,behavior:"smooth"}); };

  return <main>
    <Sidebar open={sidebarOpen} setOpen={setSidebarOpen}/>
    <div className="main-content">
      <Navbar page={page} setPage={navigate}/>
      {page==="about" && <About/>}
      {page==="resume" && <Resume/>}
      {page==="portfolio" && <Portfolio/>}
      {page==="blog" && <Blog/>}
      {page==="certificate" && <Certificate/>}
      {page==="contact" && <Contact/>}
    </div>
  </main>;
}
