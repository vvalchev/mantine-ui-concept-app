import { ArticleType } from '../../components/article/types';

// generated by https://json-generator.com/#
// [
//     '{{repeat(5, 10)}}',
//     {
//       id: '{{guid()}}',
//       title: '{{lorem(1)}}',
//       text: '{{lorem(3,"paragraphs")}}',
//       votes: '{{integer(0, 300)}}',
//       image: 'https://picsum.photos/id/{{integer(1,400)}}/200/200',
//       posted: '{{date(new Date(2023, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ssZ")}}',
//       tags: function (tags) {
//         var el = ['events', 'announcements', 'benefits', 'health', 'urgent']
//           .sort(function () { return 0.5 - Math.random();});
//         var len = Math.floor(Math.random() * el.length);
//         return el.splice(0, len);
//       }
//     }
// ]
export const testArticles: ArticleType[] = [
  {
    id: '42332e48-92ed-4e2b-bfe5-118698974c8c',
    title: 'Ad elit anim duis consequat ex sint.',
    text: 'Nulla esse veniam tempor incididunt proident esse cupidatat amet adipisicing dolore Lorem qui. Laboris est minim magna et quis. Ea ut proident nisi ex pariatur aliqua est ipsum in et sunt sint do labore. Officia reprehenderit irure deserunt do non ex sunt duis nostrud ea eu cillum id. Deserunt do minim do labore ipsum velit minim aliquip deserunt ex sunt velit. Veniam elit commodo magna amet voluptate laboris id.\r\nEu Lorem laborum sunt in. Ipsum voluptate exercitation magna laboris consectetur reprehenderit esse amet et tempor laborum sint duis. Eu reprehenderit ipsum sit cillum.\r\nAmet elit consectetur pariatur laboris non excepteur incididunt mollit reprehenderit veniam velit occaecat. Ullamco occaecat ut sit proident voluptate anim eiusmod labore do irure consectetur laboris nisi non. Eu voluptate sint eu tempor enim sit ea culpa amet. Cillum nostrud labore minim elit. Mollit anim veniam enim quis dolore. Anim duis excepteur officia non et elit enim velit cillum exercitation.\r\n',
    votes: 260,
    image: 'https://picsum.photos/id/317/200/200',
    posted: '2023-05-07T06:18:00-03:00',
    tags: ['urgent', 'events'],
  },
  {
    id: '8df1959c-2634-40fb-9082-e91898daf57a',
    title: 'Proident amet ut ipsum reprehenderit amet aute aliqua eu.',
    text: 'Dolor est aute ipsum ex ut consequat ullamco labore anim incididunt culpa fugiat laborum. Nisi dolore ad ullamco occaecat proident elit aliquip sunt. Incididunt ullamco incididunt excepteur qui culpa aliquip excepteur fugiat quis.\r\nEsse amet sit amet dolore quis dolore culpa eu id ad. Dolor nisi Lorem ut dolor reprehenderit ullamco consequat ex consectetur. Esse reprehenderit duis nulla ex amet ullamco est consequat ad. Mollit nisi veniam do et do non id qui aliquip.\r\nAmet proident magna aliquip sunt do veniam minim nostrud excepteur culpa sunt. Nostrud eu esse elit duis sint culpa reprehenderit consequat id. Nulla tempor et anim aliquip excepteur. Pariatur tempor ad labore ea occaecat in anim sint. Mollit occaecat velit incididunt ut sit amet nisi exercitation est amet et. In mollit dolore adipisicing magna id eu quis anim do dolor sit. Culpa laboris laboris non ex duis qui occaecat.\r\n',
    votes: 65,
    image: 'https://picsum.photos/id/37/200/200',
    posted: '2023-02-02T11:56:14-02:00',
    tags: ['events', 'health', 'benefits', 'urgent'],
  },
  {
    id: '7b7436ad-d353-4e6a-9c49-7e4ce1bd5838',
    title: 'In ut ullamco ipsum consectetur proident nostrud.',
    text: 'Veniam eiusmod velit laborum esse. Culpa non eiusmod laboris in laboris id occaecat exercitation nulla ipsum. Laborum velit qui nostrud Lorem laboris dolore pariatur esse ea. Voluptate elit reprehenderit magna dolore in qui labore esse veniam exercitation quis. Tempor eiusmod excepteur deserunt nisi mollit cupidatat ex culpa.\r\nCulpa officia irure ad esse consequat tempor duis et quis pariatur nisi ut proident. Deserunt dolore consequat exercitation ipsum. Consequat non voluptate esse esse irure non aliqua nostrud ex pariatur incididunt. Ex sit in occaecat officia voluptate commodo enim esse consectetur Lorem. In irure dolore Lorem labore ad occaecat qui non culpa pariatur nostrud elit irure nulla.\r\nQui aliqua ipsum non dolore mollit ut do ex enim Lorem consectetur dolore duis. Eiusmod labore elit cillum et deserunt nisi proident laborum laborum non commodo dolore do in. Officia et aliquip consectetur mollit sunt ea cupidatat commodo eiusmod ipsum. Duis id eu culpa aliqua incididunt occaecat occaecat excepteur duis in do. Est dolor aliquip exercitation dolor consectetur. Enim cillum cillum labore mollit veniam veniam minim amet ex nisi voluptate et commodo non.\r\n',
    votes: 16,
    image: 'https://picsum.photos/id/296/200/200',
    posted: '2023-05-22T06:32:41-03:00',
    favourite: true,
    tags: [],
  },
  {
    id: '74d07a32-54d4-449d-a07c-52d4cceb149e',
    title: 'Consequat eiusmod ullamco officia culpa in culpa quis dolor sint velit labore voluptate reprehenderit.',
    text: 'Qui adipisicing laboris consectetur ut reprehenderit. Occaecat nulla dolore consequat quis. Occaecat eiusmod cillum id quis sint ullamco velit. Laborum excepteur ipsum magna consequat quis est. Ipsum magna excepteur laboris nulla commodo eu exercitation dolore. Id est labore sunt aliquip duis esse do sint.\r\nLabore magna commodo do eu non id do laborum velit exercitation et exercitation occaecat consequat. Sint duis laboris ut anim magna aliqua aute Lorem in fugiat ea. Minim pariatur consequat irure laboris enim. Elit eu magna dolor cillum proident sunt irure pariatur consequat qui amet. Nisi fugiat nisi nulla sint sint nulla.\r\nDuis minim aliqua eu aliquip cupidatat. Tempor ullamco exercitation cupidatat velit sint quis eiusmod esse nisi veniam voluptate. Commodo mollit duis sit ut quis reprehenderit voluptate deserunt minim labore sunt. Enim irure nisi anim tempor tempor deserunt voluptate nulla tempor ex exercitation sit. Ipsum in dolore irure velit duis consequat officia.\r\n',
    votes: 56,
    image: 'https://picsum.photos/id/194/200/200',
    posted: '2023-06-15T06:26:36-03:00',
    favourite: true,
    tags: ['urgent', 'benefits'],
  },
  {
    id: '2da6e8cc-7019-466a-b2ea-c0556c4e1c47',
    title: 'Et ullamco eu excepteur incididunt dolor do do Lorem elit anim excepteur Lorem ipsum.',
    text: 'Consequat magna elit enim tempor officia. Veniam ullamco enim culpa in laborum aliqua do irure reprehenderit eu ex esse elit ullamco. Mollit cupidatat nulla aliquip pariatur. Pariatur est nisi qui occaecat incididunt ullamco deserunt eu adipisicing.\r\nDeserunt officia dolore anim culpa aute adipisicing consequat officia irure dolor nostrud aliqua. Lorem enim consectetur dolor qui non quis ad esse fugiat. Adipisicing voluptate est ea ipsum labore ad. Consectetur voluptate irure occaecat esse eiusmod ad nisi veniam in occaecat est officia culpa. Nisi aute sunt anim esse fugiat eu laborum amet dolore deserunt laboris fugiat ut ad.\r\nEu cupidatat tempor qui eiusmod excepteur nostrud minim excepteur sunt adipisicing minim mollit. Est laboris id laboris laborum mollit. Eu qui culpa do est voluptate officia proident eu sint incididunt non. Lorem nulla cillum enim officia dolore. Eu laborum nisi est cupidatat veniam magna aute fugiat et nostrud non. Id cillum enim magna et officia ex officia incididunt laboris ullamco deserunt pariatur laborum consectetur.\r\n',
    votes: 194,
    image: 'https://picsum.photos/id/311/200/200',
    posted: '2023-05-06T06:21:46-03:00',
    tags: ['urgent', 'events', 'benefits'],
  },
];
