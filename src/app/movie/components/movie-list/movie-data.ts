export const MOVIES: any = [
  {
    id: 1,
    name: 'Sadak 2',
    duration: 120,
    description: 'A nice movie made by Mahesh Bhatt but performed very badly',
    release_date: '28 Aug 2020',
    released: true,
    rating: 2,
    theatres: [
      { id: 1, name: 'PVR Priya', ticket_price: 100 },
      { id: 4, name: 'PVR Anupam', ticket_price: 150 },
    ]
  },
  {
    id: 2,
    name: 'Dhoom 5',
    duration: 130,
    description: 'John Abrahim starrer movie. Very nice one.',
    release_date: '8 Sep 2020',
    released: false,
    rating: 3,
    theatres: [
      { id: 2, name: 'PVR Plaza', ticket_price: 300 },
      { id: 4, name: 'PVR Anupam', ticket_price: 150 },
    ]
  },
  {
    id: 3,
    name: 'Manikarnika 2',
    duration: 100,
    description: 'Kangana acted well in this movie',
    release_date: '9 Nov 2020',
    released: true,
    rating: 4,
    theatres: [
      { id: 2, name: 'PVR Plaza', ticket_price: 100 },
      { id: 3, name: 'PVR Saket', ticket_price: 150 },
    ]
  },
  {
    id: 4,
    name: 'Khuda Hafiz',
    duration: 170,
    description: 'This Vidyut starrer is really good.',
    release_date: '18 Sep 2020',
    released: true,
    rating: 5,
    theatres: [
      { id: 1, name: 'PVR Priya', ticket_price: 100 },
      { id: 2, name: 'PVR Plaza', ticket_price: 150 },
      { id: 3, name: 'PVR Saket', ticket_price: 150 },
    ]
  }
];
