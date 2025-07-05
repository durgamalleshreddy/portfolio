import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: var(--section-padding);
  background: var(--bg-secondary);

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const Container = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 3rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    margin-top: 1.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: var(--card-bg);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    border-radius: 10px;
    
    &:hover {
      transform: translateY(-3px);
    }
  }
  
  @media (max-width: 480px) {
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const ProjectHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ProjectRole = styled.div`
  color: var(--accent-primary);
  font-weight: 500;
  margin-bottom: 1rem;
  font-size: clamp(0.9rem, 2vw, 1rem);

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
  }
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: clamp(0.9rem, 2vw, 1rem);

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ResponsibilitiesTitle = styled.h4`
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  color: #ffd700;
  margin-bottom: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
  }
`;

const ResponsibilitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  
  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

const ResponsibilityItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.8rem;
  line-height: 1.6;
  color: var(--text-secondary);
  font-size: clamp(0.85rem, 2vw, 0.9rem);
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--accent-primary);
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding-left: 1.2rem;
    margin-bottom: 0.6rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding-left: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const TechnologiesTitle = styled.h4`
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
  }
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 768px) {
    gap: 0.4rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.3rem;
  }
`;

const TechnologyTag = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: clamp(0.7rem, 2vw, 0.8rem);
  font-weight: 500;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 0.2rem 0.6rem;
    font-size: 0.7rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.15rem 0.5rem;
    font-size: 0.65rem;
  }
`;

const Projects: React.FC = () => {
  const projects = [
    {
      title: "GitHub Actions Pipeline Implementation for Swinerton",
      role: "DevOps Engineer",
      description: "Automated CI/CD pipelines with GitHub Actions for front-end and back-end applications, streamlining the entire CI/CD process.",
      responsibilities: [
        "Designed and implemented GitHub Actions pipelines for front-end and back-end applications",
        "Developed pipelines for automated code checkout, Docker image builds, and deployments to Amazon ECR and EKS Fargate",
        "Integrated Kubernetes health checks and post-deployment validation steps",
        "Leveraged AWS Lambda to execute post-deployment scripts, automating code zipping and uploads",
        "Conducted eight Fargate upgrades, ensuring uniformity across development, QA, and production environments",
        "Established role-based access controls in GitHub Actions, securing workflow files with restricted access"
      ],
      technologies: ["GitHub Actions", "Docker", "AWS ECR", "AWS EKS", "Fargate", "Kubernetes", "AWS Lambda"]
    },
    {
      title: "Dotx.gg",
      role: "DevOps Engineer",
      description: "DOTX is an online platform designed to foster self-awareness, creativity, and collaboration among children. OSI was responsible for the end-to-end application solution.",
      responsibilities: [
        "Provisioned and managed AWS infrastructure using Terraform",
        "Installed and configured Nginx and Apache web servers, including setting up proxy and reverse proxy rules",
        "Established SSH communication for passwordless authentication between remote servers",
        "Configured SMTP for server alerts",
        "Developed Shell scripts to automate tasks such as application health checks and maintenance",
        "Automated EC2 instance management and target group adjustments using Python",
        "Managed AMI backups with Python scripts and cron jobs",
        "Transitioned codebase from SVN to GitLab, including user management",
        "Implemented CI/CD pipelines with Jenkins for frontend and backend deployments",
        "Migrated and maintained database schemas",
        "Set up Prometheus and Grafana for application monitoring"
      ],
      technologies: ["AWS", "Terraform", "Nginx", "Apache", "Ubuntu", "Shell Scripts", "Python", "Jenkins", "Prometheus", "Grafana", "GitLab"]
    },
    {
      title: "Cost-Effective Observability Optimization Using Open-Source Tools",
      role: "DevOps Engineer",
      description: "Led a project focused on optimizing observability costs by leveraging open-source tools such as Prometheus, Grafana, and Apache SkyWalking.",
      responsibilities: [
        "Monitored key application metrics, including Real User Monitoring (RUM), database performance, Linux system metrics, and Kubernetes metrics",
        "Developed comprehensive dashboards in Grafana to visualize and present application performance metrics effectively",
        "Implemented alerting features in Grafana, enabling email notifications when specific metrics exceeded predefined thresholds",
        "Integrated Istio service mesh and Kiali for advanced application monitoring, providing deeper insights into service interactions and performance"
      ],
      technologies: ["Prometheus", "Grafana", "Apache SkyWalking", "Istio", "Kiali", "Kubernetes", "Linux"]
    },
    {
      title: "Kubernetes Cluster Setup on On-Prem Servers",
      role: "DevOps Engineer",
      description: "Established a Kubernetes cluster on on-premises servers using three machines for high availability and load balancing.",
      responsibilities: [
        "Established a Kubernetes cluster on on-premises servers using three machines: k8s-control, k8s-worker-1, and k8s-worker-2",
        "Configured the control plane to manage the cluster, ensuring efficient orchestration and resource allocation",
        "Deployed k8s-worker-1 and k8s-worker-2 as worker nodes to facilitate application workloads",
        "Implemented secure communication protocols between services, enhancing overall security and reliability of the cluster environment"
      ],
      technologies: ["Kubernetes", "On-Premises Infrastructure", "Cluster Management", "Security Protocols"]
    },
    {
      title: "DevSecOps Pipeline Implementation, BBSI",
      role: "DevOps Engineer",
      description: "Designed and implemented a comprehensive DevSecOps pipeline to integrate security, automation, and continuous delivery for containerized applications.",
      responsibilities: [
        "Integrated Trivy for container image vulnerability scanning and OWASP ZAP for dynamic application security testing (DAST)",
        "Configured SonarQube to analyze code quality and enforce static application security testing (SAST) during CI pipelines",
        "Set up Jenkins pipelines for automated builds, testing, and deployments across multiple environments",
        "Built and pushed Docker container images to the registry, ensuring consistent packaging and delivery",
        "Deployed applications using Argo CD, automating Kubernetes manifests for seamless and version-controlled deployments",
        "Leveraged Kubernetes for container orchestration, enabling scaling, fault tolerance, and high availability of microservices"
      ],
      technologies: ["Trivy", "OWASP ZAP", "SonarQube", "Jenkins", "Docker", "Argo CD", "Kubernetes", "DevSecOps"]
    },
    {
      title: "SMCurEx",
      role: "DevOps Engineer",
      description: "Worked on a cutting-edge currency exchange platform, providing secure and seamless foreign exchange services through advanced financial technologies.",
      responsibilities: [
        "Provisioned and managed AWS infrastructure using Terraform",
        "Created Docker images and deployed them to ECR for Amazon EKS",
        "Enhanced security by storing and provisioning database credentials via AWS Secrets Manager",
        "Automated Aurora MySQL backups and managed data migration from Oracle to Aurora MySQL",
        "Implemented AWS distributed Open Telemetry (ADOT) for performance monitoring in EKS Pods",
        "Orchestrated Kubernetes clusters, optimizing deployment, scaling, and resource management",
        "Developed Helm charts for efficient Kubernetes deployments",
        "Executed cross-region replication strategies for S3 and RDS to ensure data availability and redundancy"
      ],
      technologies: ["AWS", "Terraform", "Docker", "ECR", "EKS", "AWS Secrets Manager", "Aurora MySQL", "ADOT", "Kubernetes", "Helm", "S3", "RDS"]
    }
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FaCode />
          Projects
        </SectionTitle>
        
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectHeader>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectRole>{project.role}</ProjectRole>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectHeader>
              
              <ProjectContent>
                <ResponsibilitiesTitle>Key Responsibilities:</ResponsibilitiesTitle>
                <ResponsibilitiesList>
                  {project.responsibilities.map((responsibility, i) => (
                    <ResponsibilityItem key={i}>{responsibility}</ResponsibilityItem>
                  ))}
                </ResponsibilitiesList>
                
                <TechnologiesTitle>Technologies Used:</TechnologiesTitle>
                <TechnologiesList>
                  {project.technologies.map((tech, i) => (
                    <TechnologyTag key={i}>{tech}</TechnologyTag>
                  ))}
                </TechnologiesList>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 