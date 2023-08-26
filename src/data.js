import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';


export const headerData = {
  links: [
    {
      text: 'Resources',
      href: "/",
    },
    
    {
      text: 'About',
      href: "/about-us",
    },
    {
      text: 'Case study',
      href: "/case-study",
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Our Method',
      href: "/learn-more",
    },
    
  ],
  actions: [
    {
      text: 'Experience Hybrid',
      href: "/learn-more",
      type: "primary"
    },
  ]
 };

 export const footerData = {
  links: [
    {
      title: 'Quick links',
      links: [
        { text: 'About us', href: '/about-us' },
        { text: 'Case studies', href: '/case-studies' },
        { text: 'Our method', href: '/hybrid-model' },
        { text: 'Join Mission', href: '/book-a-meeting' },
      ],
    },
    ],
 
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/starship-shield/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/starshipshield/' },
  ],
  footNote: `
  <div class='flex justify-center items-center gap-x-4'>
    <span class="w-20 h-8 md:w-20 md:h-8 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(/images/blacklogo.png)]"></span>
    <p>Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://starshipshield.com/"> Starship Shield</a> · All rights reserved.</p>
  </div>
   `,
};


// export const footerData = {
//   socialLinks: [
//     { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
//     { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
//   ],
//   footNote: `    
//     Starship Shield · All rights reserved.
//   `,
// };