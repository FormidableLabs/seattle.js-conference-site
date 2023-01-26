export async function get() {
  return {
    json: { speakers }
  }
}

export const speakers = [
  {
    id: 'amber-hoak',
    name: 'Amber Hoak',
    company: 'Microsoft Research',
    twitter: 'amber_hoak',
    photo: 'amber-hoak.jpg'
  },
  {
    id: 'jamund-ferguson',
    name: 'Jamund Ferguson',
    company: 'PayPal',
    twitter: 'xjamundx',
    photo: 'jamund-ferguson.jpg'
  },
  {
    id: 'rachel-lee-nabors',
    name: 'Rachel Lee Nabors',
    company: 'AWS Amplify',
    twitter: 'rachelnabors',
    photo: 'rachel-lee-nabors.jpg'
  },
  {
    id: 'matthew-bauer',
    name: 'Matthew Bauer',
    company: 'WebPinata',
    twitter: 'LotusBladeStorm',
    photo: 'matthew-bauer.jpg'
  },
  {
    id: 'brian-gershon',
    name: 'Brian Gershon',
    company: 'Freelance',
    twitter: 'brianfive',
    photo: 'brian-gershon.jpg'
  },
  {
    id: 'calvin-kipperman',
    name: 'Calvin Kipperman',
    company: 'Lyft',
    twitter: 'emnudge',
    photo: 'calvin-kipperman.jpg'
  },
  {
    id: 'tim-obrien',
    name: "Tim O'Brien",
    company: 'Wagner Custom Skis',
    twitter: 'tobrien',
    photo: 'tim-obrien.jpg'
  },
  {
    id: 'josh-scotland',
    name: 'Josh Scotland',
    company: 'Startup',
    photo: 'josh-scotland.jpg'
  },
  {
    id: 'brian-tran',
    name: 'Brian Tran',
    company: 'REMAX',
    photo: 'brian-tran.jpg',
    twitter: '_briantran_'
  },
  {
    id: 'lupe-canaviri-maydana',
    name: 'Lupe Canaviri Maydana',
    company: 'Microsoft',
    photo: 'lupe-canaviri-maydana.png',
    twitter: 'luucamay_'
  },
  {
    id: 'lauro-silva',
    name: 'Lauro Silva',
    company: 'egghead.io',
    photo: 'lauro-silva.jpg',
    twitter: 'laurosilvacom'
  },
  {
    id: 'jacob-ebey',
    name: 'Jacob Ebey',
    company: 'Remix / Shopify',
    photo: 'jacob-ebey.jpg',
    twitter: 'ebey_jacob'
  }
]
