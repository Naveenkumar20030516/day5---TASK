//  QUESTION NO - 1

// Sample JSON object
const person = {
    name: "Naveen kumar R",
    age: 21,
    profession: "Software Developer",
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
  };

  console.log("Using for...in loop:");
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  
  console.log("\nUsing for...of loop:");
  const skills = person.skills;
  for (const skill of skills) {
    console.log(skill);
  }
  
  console.log("\nUsing forEach:");
  person.skills.forEach((skill) => {
    console.log(skill);
  });
  
//  QUESTION NO - 2 

  console.log("\nSample resume data in JSON format :");
const resume = {
    name: "Naveen kumar R",
    contact: {
      email: "naveenkumar1652003@gmail.com",
      phone: "+1234567890",
      address: "123 Main Street, xxx, yyy",
    },
    summary: "Experienced Quality testing engineer",
    education: [
      {
        school: "ELGI",
        year: 2020,
      },
      {
        degree: "Bachelor of Engineering in EEE",
        school: "SREC",
        year: 2024,
      },
    ],
    experience: [
      {
        position: "QA TESTER",
        company: "L & T",
        year: "2023",
        responsibilities: [
          "Programming for Numerical relays.",
          "Testing and installing softwares.",
        ],
      },
      {
        position: "Full Stack Development-Student",
        company: "GUVI",
        year: "2023-Present",
        responsibilities: [
          "Learning and designing responsive Ui",
          "Creating CRUD Operations for Backend.",
        ],
      },
    ],
  };
  
  console.log(resume);
  