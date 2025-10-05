import CURATE_LOGO from './assets/curate-logo-blue.svg';
import BIZLIBRARY_LOGO from './assets/bizlibrary.png';
import PINGPILOT_LOGO from './assets/pingpilot.jpg';
import ZIPLINE_LOGO from './assets/Zipline_20Logo.png';


type Job = {
  companyName: string,
  position: string,
  logo: string,
  startDate: string,
  endDate: string,
  index?: number,
  responsibilities: string[]
}

export const jobs: Job[] = [{
  companyName: 'Curate',
  position: 'Senior Software Engineer',
  logo: CURATE_LOGO,
  startDate: '05/2021',
  endDate: '08/2025',
  responsibilities: [
    "Led the development of a distributed systems application utilizing AWS, incorporating technologies such as AppSync, Lambda, Cognito, RDS, S3, and more.",
    "Developed automated alert systems for managing security credentials using Python",
    "Collaborated with cross-functional teams and leadership to brainstorm and prototype innovative solutions tailored to industry-specific challenges.",
    "Directed and facilitated the creation of Customer Success portals, significantly reducing response times for customer issues and streamlining interactions among customers, customer success teams, and engineering.",
    "Designed and implemented various GraphQL APIs on an AWS serverless platfrom using Node.js.",
    "Architected and managed data storage with RDS, S3, Dynamo, and OpenSearch",
    "Developed feature Proof of Concepts with Python."
  ]
},
{
  companyName: 'BizLibrary',
  position: 'Javascript Developer',
  logo: BIZLIBRARY_LOGO,
  startDate: '11/2019',
  endDate: '05/2021',
  responsibilities: [
    "Collaborated closely with team leaders and department heads to design a serverless Learning Management System utilizing C#, Node.js, and Vue.js.",
    "Worked alongside design and product managers to ensure a cohesive and intuitive user experience.",
    "Spearheaded the standardization and structural initiatives for REST API development by enforcing coding standards and conducting code reviews.",
    "Worked with Front End engineers to develop a Learning Management System using React, Vue.js, and Knockout.js.",
    "Implemented new features with C#/.NetCore, and Node.js."
  ]
},
{
  companyName: 'Ping Pilot',
  position: 'Software Engineer',
  logo: PINGPILOT_LOGO,
  startDate: '04/2017',
  endDate: '07/2019',
  responsibilities: [
    "Contributed to the development of a RESTful Node.js API.",
    "Increased unit test coverage from 20% to a consistent 85% or more.",
    "Integrated with various third-party APIs, including Marketo, Twilio, Salesforce, and others."
  ]
},
{
  companyName: 'Zipline Labs',
  position: 'Javascript',
  logo: ZIPLINE_LOGO,
  startDate: '07/2014',
  endDate: '11/2016',
  responsibilities: [
    "Collaborated closely with executives, designers, and product management to develop a messaging application for both web and mobile platforms.",
    "Developed a RESTful API utilizing Node.js for message transmission and payment processing through ACH or Stripe.",
    "Designed an AngularJS application to monitor financial and security records."
  ]
}
]