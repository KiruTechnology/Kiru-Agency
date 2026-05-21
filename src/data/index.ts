export const ServiceTerms = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.",
  },
  {
    title: "Use License",
    content:
      "Permission is granted to temporarily download one copy of the materials (information or software) on Kiru Tech's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display.",
  },
  {
    title: "Disclaimer",
    content:
      "The materials on Kiru Tech's website are provided on an 'as is' basis. Kiru Tech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
  },
  {
    title: "Limitations",
    content:
      "In no event shall Kiru Tech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Kiru Tech's website.",
  },
  {
    title: "Accuracy of Materials",
    content:
      "The materials appearing on Kiru Tech's website could include technical, typographical, or photographic errors. Kiru Tech does not warrant that any of the materials on its website are accurate, complete, or current.",
  },
  {
    title: "Links",
    content:
      "Kiru Tech has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Kiru Tech of the site. Use of any such linked website is at the user's own risk.",
  },
  {
    title: "Modifications",
    content:
      "Kiru Tech may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.",
  },
  {
    title: "Governing Law",
    content:
      "These terms and conditions are governed by and construed in accordance with the laws of Kenya and you irrevocably submit to the exclusive jurisdiction of the courts located in Kenya.",
  },
];

// type item = {
//     cat?: string
//     info: string
// }
// type other = {
//     title: string
//     items: item[]
// }
// type Pol = {
//     title: string
//     content: string
//     other?: other[]
// }
export const Policy = [
  {
    title: "Introduction",
    content: ` Kiru Tech ("we" or "us" or "our") operates the website. This page informs you of our policies regarding the collection, use and disclosure of personal data when you use our service and the choices you have associated with that data.`,
  },
  {
    title: "Information Collection and Use",
    content: ` We collect several different types of information for various
                purposes to provide and improve our service to you.`,
    other: [
      {
        title: "Types of Data Collected:",
        items: [
          {
            cat: "Personal Data:",
            info: `While using our service, we
                  may ask you to provide us with certain personally identifiable
                  information that can be used to contact or identify you
                  ("Personal Data"). This may include: Email address, Name,
                  Phone number`,
          },
          {
            cat: "Usage Data:",
            info: `We may also collect information
                on how the service is accessed and used ("Usage Data"). This
                may include: Your computer's Internet Protocol address,
                Browser type and version, Pages you visit, Time and date of
                your visit`,
          },
        ],
      },
    ],

    //   <ul >
    //
    //     <li>
    //       <strong>:</strong>
    //     </li>
    //   </ul>`,
  },
  {
    title: "Use of Data",
    content: "Kiru Tech uses the collected data for various purposes:",
    other: [
      {
        title: "Uses of the Collected Data:",
        items: [
          { cat: "", info: `To provide and maintain our service` },
          { info: `To notify you about changes to our service` },
          { info: `To provide customer support` },
          {
            info: ` To gather analysis or valuable information so we can improve our service`,
          },
          { info: `To monitor the usage of our service` },
          { info: `To detect, prevent and address technical issues` },
        ],
      },
    ],
  },
  {
    title: "Security of Data",
    content: `The security of your data is important to us but remember that
                no method of transmission over the Internet or method of
                electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your Personal Data, we
                cannot guarantee its absolute security.`,
  },
  {
    title: "Changes to This Privacy Policy",
    content: `We may update our Privacy Policy from time to time. We will notify you 
    of any changes by posting the new Privacy Policy on this page and updating the "effective date"
    at the top of this Privacy Policy.`,
  },
  {
    title: "Contact Us",
    content:
      " If you have any questions about this Privacy Policy, please contact us at:",
    other: [
      {
        title: "Quick contact ways: ",
        items: [
          { cat: "Email: ", info: "hello@kirutech.io" },
          { cat: "Phone: ", info: "+254 700 000 000" },
        ],
      },
    ],
  },
  {
    title: "Your Rights",
    content: `You have the right to access, update, or delete the information we have on you.
       If you would like to exercise this right, please contact us using the information
        in the Contact Us section above.`,
  },
];
