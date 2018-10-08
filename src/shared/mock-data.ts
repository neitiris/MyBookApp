import {IAlert, IBook, IFilter, ILinkList, ILinkTypes} from './interfaces';
import {faBook, faCircle, faClock, faGlobeAmericas, faListAlt, faShoppingCart, faStar} from '@fortawesome/free-solid-svg-icons';

  export const USERS = [
    {img: '../../../assets/img_avatar.png', name: 'John Doe'}
  ];
  export const LINKS_LIST: ILinkList[] = [
    {icon: faBook, name: 'Now Reading', radio: 'radio1'},
    {icon: faGlobeAmericas, name: 'Browse', radio: 'radio2'},
    {icon: faShoppingCart, name: 'Buy Books', radio: 'radio3'},
    {icon: faStar, name: 'Favorite Books', radio: 'radio4'},
    {icon: faListAlt, name: 'WishList', radio: 'radio5'},
    {icon: faClock, name: 'History', radio: 'radio7'}
  ];
  export const LINKS_TYPES: ILinkTypes[] = [
    {icon: faCircle, name: 'Must Read Titles', radio2: 'radio8', class: 'red'},
    {icon: faCircle, name: 'Best Of List', radio2: 'radio9', class: 'orange'},
    {icon: faCircle, name: 'Classic Novels', radio2: 'radio10', class: 'blue'},
    {icon: faCircle, name: 'Non Fiction', radio2: 'radio11', class: 'violete'},
  ];
  export const ALERTS: IAlert[] = [
    {icon: faClock, name: 'You added Fight Club by Chuck Palahniuk to your Must Read Title', time: '48 minutes ago'},
    {icon: faClock, name: 'You added Fight Club by Chuck Palahniuk to your Must Read Title', time: '48 minutes ago'}
  ];
  export const FILTERS: IFilter[] = [
    { sort: 'all', name: 'All Books', title: 'Browse Available Books', checked: true },
    { sort: 'recent', name: 'Most Resent', title: 'Browse Available Books', checked: false },
    { sort: 'popular', name: 'Most Popular', title: 'Browse Available Books', checked: false },
    { sort: 'price', name: 'Free Books', title: 'Browse Available Books', checked: false }
  ];
  export const  BOOKS: IBook[] = [
    {id: '1', name: 'myBook1', author: 'me1', img: '../../../assets/book-cover.png',
      rating: 1, createdAt: '2017-10-08T18:51:47.699Z', price: 12},
    {id: '2', name: 'myBook2', author: 'me2', img: '../../../assets/book-cover(1).png',
      rating: 3, createdAt: '2018-11-08T18:51:47.699Z', price: 4.99},
    {id: '3', name: 'myBook3', author: 'me3', img: '../../../assets/book-cover(2).png',
      rating: 5, createdAt: '2018-03-08T18:51:47.699Z', price: 3},
    {id: '4', name: 'myBook4', author: 'me4', img: '../../../assets/book-cover(3).png',
      rating: 2, createdAt: '2015-10-08T18:51:47.699Z'},
    {id: '5', name: 'myBook5', author: 'me5', img: '../../../assets/book-cover(4).png',
      rating: 4, createdAt: '2018-10-01T18:51:47.699Z'},
    {id: '6', name: 'myBook6', author: 'me6', img: '../../../assets/book-cover(5).png',
      rating: 5, createdAt: '2018-01-08T18:51:47.699Z', price: 0},
    {id: '7', name: 'myBook7', author: 'me7', img: '../../../assets/book-cover(6).png',
      rating: 1, createdAt: '2018-10-08T11:51:47.699Z', price: 7},
    {id: '8', name: 'myBook8', author: 'me8', img: '../../../assets/book-cover(7).png',
      rating: 3, createdAt: '2018-10-08T08:51:47.699Z'},
    {id: '9', name: 'myBook9', author: 'me9', img: '../../../assets/book-cover(8).png',
      rating: 4, createdAt: '2017-09-03T18:51:47.699Z', price: 1},
    {id: '10', name: 'myBook10', author: 'me10', img: '../../../assets/book-cover(9).png',
      rating: 2, createdAt: '2018-10-04T18:51:47.699Z', price: 99}
  ];

