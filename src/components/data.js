// Resume information
// Awet Thon
// 23-06-22
let placeholders = {
  firstNamePlaceholder: "e.g Deng",
  lastNamePlaceholder: "e.g Majok",
  profilePicturePlaceholder: "../images/profile.png",
  bioPlaceholder:
    "Enter your biography here. should be less than 200 characters",
  mobileNumberPlaceholder: "e.g +211-000-000-000",
  emailPlaceholder: "e.g deng@gmail.com",
  yearPlaceholder: "e.g 2016",
  schoolPlaceholder: "e.g Juba University",
  awardPlaceholder: "e.g Bachelors of Science",
  skillPlaceholder: "e.g problem solving",
  description: "e.g Managing branch operations",
  hobbyPlaceholder: "e.g reading novels",
  jobTittlePlaceholder: "e.g Assitant Manager",
  employerPlaceholder: "e.g Kush Bank",
  startDatePlaceholder: "e.g April 2016",
  endDatePlaceholder: "e.g April 2016",
  addressPlaceholder: "e.g Gumbo shirikat",
};

let personalInfo = {
  firstName: placeholders.firstNamePlaceholder,
  lastName: placeholders.lastNamePlaceholder,
  profilePicture: placeholders.profilePicturePlaceholder,
  bio: placeholders.bioPlaceholder,
};

let contactInfo = {
  mobile: placeholders.mobileNumberPlaceholder,
  email: placeholders.emailPlaceholder,
};

let educationInfo = [
  {
    year: placeholders.yearPlaceholder,
    school: placeholders.schoolPlaceholder,
    award: placeholders.awardPlaceholder,
  },
  {
    year: placeholders.yearPlaceholder,
    school: placeholders.schoolPlaceholder,
    award: placeholders.awardPlaceholder,
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
      { name: "Express (intermediate)", year: 2022 },
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
  placeholders.skillPlaceholder,
  placeholders.skillPlaceholder,
  placeholders.skillPlaceholder,
];

let experienceInfo = [
  {
    year: placeholders.yearPlaceholder,
    employer: placeholders.employerPlaceholder,
    jobTittle: placeholders.jobTittlePlaceholder,
    startDate: placeholders.startDatePlaceholder,
    endDate: placeholders.endDatePlaceholder,
    description: [
      placeholders.descriptionPlaceholder,
      placeholders.descriptionPlaceholder,
    ],
  },
];

let socialInfo = {
  facebook: "facebook.com/awetthon",
  twitter: "twitter.com/awetthon",
  linkedin: "linkedin.com/awetthon",
};

let hobbyInfo = [
  placeholders.hobbyPlaceholder,
  placeholders.hobbyPlaceholder,
  placeholders.hobbyPlaceholder,
];

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
