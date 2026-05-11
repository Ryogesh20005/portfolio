const fs = require('fs');
const path = require('path');

const resumeTextPath = 'c:/yogesh/webdevolopment/profile/resume_text.txt';
const outputPath = path.join(__dirname, '../backend/resume.json');

function parseResume(text) {
  const sections = {
    name: '',
    title: '',
    contact: {},
    summary: '',
    skills: [],
    experience: [],
    projects: [],
    education: [],
    certifications: []
  };

  const lines = text.split('\n').map(line => line.trim());
  
  sections.name = lines[0];
  sections.title = lines[1];

  let currentSection = '';

  for (let i = 2; i < lines.length; i++) {
    const line = lines[i];
    if (!line) continue;

    if (line === 'CONTACT INFORMATION') {
      currentSection = 'contact';
      continue;
    } else if (line === 'PROFESSIONAL SUMMARY') {
      currentSection = 'summary';
      continue;
    } else if (line === 'SKILLS') {
      currentSection = 'skills';
      continue;
    } else if (line === 'EXPERIENCE') {
      currentSection = 'experience';
      continue;
    } else if (line === 'PROJECTS') {
      currentSection = 'projects';
      continue;
    } else if (line === 'EDUCATION') {
      currentSection = 'education';
      continue;
    } else if (line === 'CERTIFICATIONS') {
      currentSection = 'certifications';
      continue;
    }

    if (currentSection === 'contact') {
      const [key, value] = line.split(': ').map(s => s.trim());
      if (key && value) {
        sections.contact[key.toLowerCase()] = value;
      }
    } else if (currentSection === 'summary') {
      sections.summary += line + ' ';
    } else if (currentSection === 'skills') {
      if (line.startsWith('- ')) {
        sections.skills.push(line.substring(2));
      }
    } else if (currentSection === 'experience') {
      if (line === 'Full Stack Developer' || line === 'Junior Developer') {
        const exp = {
          role: line,
          company: lines[++i],
          duration: lines[++i],
          highlights: []
        };
        while (lines[i+1] && lines[i+1].startsWith('- ')) {
          exp.highlights.push(lines[++i].substring(2));
        }
        sections.experience.push(exp);
      }
    } else if (currentSection === 'projects') {
      if (line === 'Hospital Management System' || line === 'Medical Chatbot') {
        const project = {
          name: line,
          description: lines[++i].substring(2),
          tech: lines[++i].substring(2),
          features: []
        };
        while (lines[i+1] && lines[i+1].startsWith('- ')) {
          project.features.push(lines[++i].substring(2));
        }
        sections.projects.push(project);
      }
    } else if (currentSection === 'education') {
      const edu = {
        degree: line,
        university: lines[++i],
        duration: lines[++i],
        details: []
      };
      while (lines[i+1] && lines[i+1].startsWith('- ')) {
        edu.details.push(lines[++i].substring(2));
      }
      sections.education.push(edu);
    } else if (currentSection === 'certifications') {
      if (line.startsWith('- ')) {
        sections.certifications.push(line.substring(2));
      }
    }
  }

  sections.summary = sections.summary.trim();
  return sections;
}

try {
  const text = fs.readFileSync(resumeTextPath, 'utf8');
  const data = parseResume(text);
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
  console.log('Resume parsed successfully to ' + outputPath);
} catch (error) {
  console.error('Error parsing resume:', error);
}
