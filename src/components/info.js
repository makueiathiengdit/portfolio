// Resume information
// Awet Thon
// 23-06-22

let personalInfo = {
  firstName: "Awet",
  lastName: "Thon",
  url: "../images/profile.png",
  description:
    "Aspiring tech enthusiast currently pursuing B.E Computer Science and Enginering at University Institute of Engineering and Technology (UIET) Panjab University, Chandigarh",
};

let contactInfo = {
  mobile: "+211-000-000-000",
  email: "mail@domain",
};

let educationInfo = [
  // {
  //   year: 2023,
  //   school: "Panjab University",
  //   award: "Bachelors of Enginering(CSE)",
  // },
  {
    year: 2018,
    school: "Don Bosco Secondary School",
    award: "South Sudan Certificate of Secondary Education",
  },
  {
    year: 2014,
    school: "Malual Bab Primary School",
    award: "South Sudan Certificate of Primary Education",
  },
];

let certificationInfo = [
  {
    type: "Frontend",
    courses: [
      { name: "HTML", year: 2020 },
      { name: "CSS", year: 2020 },
      { name: "JavaScript", year: 2020 },
      { name: "Responsive web design", year: 2020 },
      { name: "ReactJS", year: 2021 },
    ],
  },
  {
    type: "Backend",
    courses: [
      { name: "NodeJS (intermediate)", year: 2020 },
      { name: "Express", year: 2022 },
      { name: "MongoDB", year: 2022 },
      { name: "PHP", year: 2021 },
      { name: "MySQL", year: 2021 },
    ],
  },
  {
    type: "Programming Languages",
    courses: [
      { name: "C", year: 2019 },
      { name: "C++", year: 2019 },
      { name: "Python", year: 2020 },
      { name: "PHP", year: 2021 },
    ],
  },
];

let skillInfo = [
  "Problem solving skill",
  "Computer skils",
  "Communication skills",
  "Networking skills",
];

let experienceInfo = [
  {
    year: 2018,
    description: "Booking clark at Gisa Transportation company",
  },
];

let socialInfo = {
  facebook: "facebook.com/awetthon",
  twitter: "twitter.com/awetthon",
  linkedin: "linkedin.com/awetthon",
};

let hobbyInfo = ["Basketball", "Music", "Poetry"];

const getPersonalInfo = () => personalInfo;
const getContactInfo = () => contactInfo;
const getEducationInfo = () => educationInfo;
const getExperienceInfo = () => experienceInfo;
const getSocialInfo = () => socialInfo;
const getCertificateInfo = () => certificationInfo;
const getSkillInfo = () => skillInfo;
const getHobbyInfo = () => hobbyInfo;

export {
  getPersonalInfo,
  getContactInfo,
  getEducationInfo,
  getExperienceInfo,
  getSocialInfo,
  getCertificateInfo,
  getSkillInfo,
  getHobbyInfo,
};
