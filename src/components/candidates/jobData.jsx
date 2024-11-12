let jobData = {
  job_roles: [
    {
      role: "Frontend Developer",
      description: "As a Frontend Developer, you will build and implement the user interface of web applications, ensuring responsiveness and performance. This role requires you to collaborate with designers and back-end developers, write clean and maintainable code, and optimize the visual elements for usability. Your responsibilities include converting designs into functional code, ensuring cross-browser compatibility, and staying updated on emerging front-end technologies to deliver top-tier user experiences.",
      applicants: [
        {
          name: "Grace Wilson",
          applied_date: "2024-03-10",
          email_id: "grace.wilson@example.com",
          contact_no: "7890123456",
          status: "Interview Scheduled",
          skills: ["HTML", "CSS", "JavaScript"],
          experience: "1 year"
        },
        {
          name: "Henry Martinez",
          applied_date: "2024-03-12",
          email_id: "henry.martinez@example.com",
          contact_no: "8901234567",
          status: "Under Review",
          skills: ["React", "Angular", "TypeScript"],
          experience: "2 years"
        },
        {
          name: "Ivy Anderson",
          applied_date: "2024-03-15",
          email_id: "ivy.anderson@example.com",
          contact_no: "9012345678",
          status: "Rejected",
          skills: ["Vue.js", "CSS", "Sass"],
          experience: "1.5 years"
        },
        {
          name: "Jack Williams",
          applied_date: "2024-03-18",
          email_id: "jack.williams@example.com",
          contact_no: "0123456789",
          status: "Under Review",
          skills: ["HTML", "CSS", "JavaScript", "React"],
          experience: "2 years"
        }
      ]
    },
    {
      role: "Backend Developer",
      description: "As a Backend Developer, you will manage server-side logic, develop and maintain the core functionality of web applications, and ensure efficient database management. Working closely with front-end developers, your role involves building secure APIs, handling user authentication, and creating data storage solutions. You will optimize the server environment for performance, troubleshoot issues, and keep the server and database architecture secure, scalable, and robust to support user activities across multiple platforms.",
      applicants: [
        {
          name: "Alice Johnson",
          applied_date: "2024-01-10",
          email_id: "alice.johnson@example.com",
          contact_no: "1234567890",
          status: "Under Review",
          skills: ["Node.js", "Express", "MongoDB"],
          experience: "2 years"
        },
        {
          name: "Bob Smith",
          applied_date: "2024-01-12",
          email_id: "bob.smith@example.com",
          contact_no: "2345678901",
          status: "Interview Scheduled",
          skills: ["Java", "Spring Boot", "SQL"],
          experience: "3 years"
        },
        {
          name: "David Lee",
          applied_date: "2024-01-17",
          email_id: "david.lee@example.com",
          contact_no: "4567890123",
          status: "Under Review",
          skills: ["Python", "Django", "PostgreSQL"],
          experience: "3 years"
        }
      ]
    },
    {
      role: "UI/UX Designer",
      description: "The UI/UX Designer will focus on designing intuitive interfaces that enhance user satisfaction by improving usability and aesthetics. Your role involves conducting user research, creating wireframes, and collaborating with developers to integrate your designs. You’ll be responsible for ensuring consistency across the application’s design, using user feedback to refine elements, and employing design principles to create a seamless and visually engaging experience across all devices.",
      applicants: [
        {
          name: "Emily Davis",
          applied_date: "2024-02-03",
          email_id: "emily.davis@example.com",
          contact_no: "5678901234",
          status: "Interview Scheduled",
          skills: ["Sketch", "Figma", "Adobe XD"],
          experience: "3 years"
        },
        {
          name: "Daniel Brown",
          applied_date: "2024-02-01",
          email_id: "daniel.brown@example.com",
          contact_no: "4567890123",
          status: "Under Review",
          skills: ["Wireframing", "Prototyping", "UI Design"],
          experience: "2 years"
        }
      ]
    },
    {
      role: "DevOps Engineer",
      description: "As a DevOps Engineer, you will drive the automation of development, testing, and deployment processes, ensuring seamless collaboration between software development and IT operations. Your role includes managing infrastructure as code, implementing CI/CD pipelines, and monitoring system performance. You’ll work to enhance software delivery speed, reduce risk, and facilitate smooth, reliable releases, helping the team achieve continuous improvement and operational efficiency in a fast-paced environment.",
      applicants: [
        {
          name: "Liam Scott",
          applied_date: "2024-05-05",
          email_id: "liam.scott@example.com",
          contact_no: "3334567890",
          status: "Under Review",
          skills: ["AWS", "Docker", "Kubernetes"],
          experience: "3 years"
        },
        {
          name: "Nina Garcia",
          applied_date: "2024-05-07",
          email_id: "nina.garcia@example.com",
          contact_no: "4445678901",
          status: "Interview Scheduled",
          skills: ["Azure", "CI/CD", "Terraform"],
          experience: "2 years"
        }
      ]
    },
    {
      role: "AI Engineer",
      description: "In the role of AI Engineer, you will design, develop, and implement machine learning and AI models to solve complex business challenges. Responsibilities include preprocessing data, training models, and optimizing algorithms to deliver accurate predictions. You’ll collaborate with data scientists and software engineers to deploy models into production, continuously monitor and refine them, and stay abreast of the latest in AI technology to drive innovation and efficiency within the organization.",
      applicants: [
        {
          name: "Oscar Evans",
          applied_date: "2024-05-09",
          email_id: "oscar.evans@example.com",
          contact_no: "5556789012",
          status: "Offered",
          skills: ["Python", "TensorFlow", "AI"],
          experience: "4 years"
        },
        {
          name: "Frank Miller",
          applied_date: "2024-02-05",
          email_id: "frank.miller@example.com",
          contact_no: "6789012345",
          status: "Offered",
          skills: ["Python", "NLP", "Statistics"],
          experience: "4 years"
        }
      ]
    }
  ]
};

export const addJobRole = (role, description) => {
  jobData.job_roles.push({ role, description, applicants: [] });
};

export default jobData;
