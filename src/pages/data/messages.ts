import { MessageRoomType, MessageType } from '../../components/mesages/types';
import { testUsers } from './users';

export const testMessageRooms: MessageRoomType[] = [
  {
    id: '8dd01778-2e82-4328-94e7-0ad9b6c3f382',
    type: 'private',
    name: '',
    users: [testUsers[0], testUsers[1]],
    unread: 0,
  },
  {
    id: '98865486-401a-460c-a6e9-5989fdb9f3b4',
    type: 'private',
    name: '',
    title: 'Nostrud reprehenderit culpa minim velit labore id ex aliqua fugiat id ex dolore laborum et.',
    users: [testUsers[0], testUsers[3], testUsers[1]],
    unread: 0,
  },
  {
    id: 'ab5c3f9e-a3ab-4a07-b5dc-582162b554ab',
    type: 'channel_public',
    name: 'general',
    title:
      'In amet fugiat consectetur Lorem veniam minim do pariatur incididunt cupidatat aliquip voluptate veniam excepteur.',
    users: testUsers,
    unread: 0,
  },
  {
    id: 'fd2cb3bf-68fd-49d4-ab92-0f996fa1ccad',
    type: 'channel_public',
    name: 'announcements',
    title: 'Ullamco esse tempor voluptate nisi consequat eiusmod exercitation sint ut adipisicing mollit nisi aliqua.',
    users: testUsers,
    unread: 0,
  },
  {
    id: 'c16d4001-9531-4ec9-a020-52cd514a9265',
    type: 'channel_private',
    name: 'finance_team',
    users: testUsers,
    unread: 3,
  },
];

export const testMessages: MessageType[] = [
  {
    id: '0cfeb8c1-d37d-4875-a6fe-0184ace17141',
    text: 'Culpa ut Lorem est culpa magna velit dolor aliqua velit eiusmod ad aliquip labore. Ea ad culpa reprehenderit nostrud dolor sint dolor proident officia laboris. Minim cupidatat do anim est ipsum eu sint deserunt aute quis sit sint velit commodo. Cupidatat Lorem esse nostrud voluptate incididunt nisi dolor sit do qui.\r\n',
    posted: '2023-02-21T07:22:07-02:00',
    toRoomId: 'd26189ac-19d6-489d-829f-75d57b408557',
    fromUserId: testUsers[0].id,
  },
  {
    id: '1e1e8b85-33fa-4a8f-8c10-b9ce4f3e6cee',
    text: 'Eiusmod incididunt duis consequat anim duis exercitation laboris adipisicing esse sunt elit. Amet minim qui labore irure et. Reprehenderit eu ipsum pariatur aliquip nulla laboris. Officia ex veniam culpa veniam voluptate. Proident non occaecat ipsum enim.\r\n',
    posted: '2023-02-05T12:38:35-02:00',
    toRoomId: '0bafc88c-05b8-44be-936e-436a63c746cd',
    fromUserId: testUsers[0].id,
  },
  {
    id: '9b7bbc0f-01da-4d40-9512-65ec11af242e',
    text: 'Dolor adipisicing tempor culpa ut qui aliqua ex nulla adipisicing irure cillum excepteur. Voluptate nisi elit voluptate exercitation adipisicing sint nisi do tempor aliqua est. Sint ad Lorem fugiat voluptate fugiat anim amet Lorem tempor.\r\n',
    posted: '2023-05-19T07:35:57-03:00',
    toRoomId: '5867c51d-0024-43a1-a849-70874872c1b6',
    fromUserId: testUsers[1].id,
  },
  {
    id: '6942e7db-1b24-470d-80ac-2e0027a3f62d',
    text: 'Et amet et dolor reprehenderit pariatur dolor qui id. Lorem sit nisi incididunt nulla elit. Cupidatat enim amet aute minim Lorem.\r\n',
    posted: '2023-01-06T02:07:21-02:00',
    toRoomId: '96cbbee0-b87f-4e44-9b4a-6f5a6f98f052',
    fromUserId: testUsers[3].id,
  },
  {
    id: '61769754-b291-4af4-b197-3b0bb2de29af',
    text: 'Dolore officia mollit exercitation magna anim. Id velit laborum commodo eiusmod aliqua officia laborum eu elit proident consectetur elit qui nostrud. Lorem dolor ex veniam mollit elit id nostrud nisi adipisicing ea incididunt ut anim. Sit officia sint commodo laborum incididunt ea esse sint non. Do commodo ullamco dolore velit ut ipsum deserunt non anim exercitation exercitation anim. Culpa sit cillum pariatur aliqua mollit occaecat dolore est sunt labore dolor nulla culpa sunt.\r\n',
    posted: '2023-05-06T10:15:02-03:00',
    toRoomId: 'ab086466-5cc1-4079-aba7-41111c9a03de',
    fromUserId: testUsers[5].id,
  },
  {
    id: '81683130-5983-4050-aa4e-17136aaa553a',
    text: 'Eu commodo dolor deserunt fugiat deserunt cupidatat. Irure aliquip ipsum velit nulla ullamco deserunt officia laborum minim sunt fugiat quis ipsum. Minim officia esse excepteur ut quis nulla qui magna adipisicing sunt excepteur eu irure ullamco. Qui cillum veniam minim pariatur officia enim do ea voluptate. Reprehenderit sint laboris aliqua officia fugiat ullamco.\r\n',
    posted: '2023-03-27T05:09:22-03:00',
    toRoomId: '16f17d47-4772-4c5f-bb8b-185ba1f00790',
    fromUserId: testUsers[2].id,
  },
  {
    id: 'f7feaa4f-b0f8-4fc8-9921-d98768415fff',
    text: 'Sunt labore ea laboris qui irure nisi esse anim ut aliquip eiusmod ex. Laborum minim sit ipsum irure duis duis aute minim minim nisi voluptate exercitation esse. Deserunt aute deserunt reprehenderit cupidatat laboris elit cillum deserunt ea ex quis veniam deserunt eiusmod. Eu velit consectetur ipsum veniam non duis veniam enim in.\r\n',
    posted: '2023-01-10T05:40:48-02:00',
    toRoomId: '4a743a84-0ea8-4bcc-83ed-f8b991f826f7',
    fromUserId: testUsers[2].id,
  },
  {
    id: '29f5be85-56ae-4764-8746-2991a098e37b',
    text: 'Ullamco velit adipisicing laborum irure. Fugiat elit sint est minim et qui ad cupidatat consequat dolore in. Officia fugiat culpa Lorem ut esse amet. Ut officia velit Lorem culpa aliquip officia occaecat. Voluptate et incididunt sit nisi amet sunt labore sit amet culpa. Deserunt dolor exercitation incididunt consequat nisi sint dolore anim voluptate cillum duis eiusmod ullamco enim. Consequat anim est mollit tempor irure Lorem non ad irure excepteur voluptate.\r\n',
    posted: '2023-05-08T03:58:25-03:00',
    toRoomId: '605c4cdb-bc91-46ac-91c7-1097be393336',
    fromUserId: testUsers[0].id,
  },
  {
    id: '187fd963-2fc2-4d34-a59f-3b3347323da6',
    text: 'Culpa nostrud in adipisicing minim voluptate anim exercitation. Lorem est mollit ullamco officia eu nisi duis ex sunt tempor irure pariatur. Minim ullamco sunt Lorem anim esse voluptate veniam aliquip consectetur et cillum qui in qui. Consectetur deserunt anim labore amet occaecat culpa. Cillum id cupidatat exercitation mollit consectetur ipsum culpa tempor non Lorem sunt commodo dolor qui.\r\n',
    posted: '2023-06-23T03:06:23-03:00',
    toRoomId: '5452d857-327c-456b-a614-9bedcdafcb1a',
    fromUserId: testUsers[6].id,
  },
  {
    id: '16354020-92f1-460a-93c2-428a655e3402',
    text: 'Do ut do et nisi nulla amet nisi exercitation. Eiusmod do quis quis anim. Nulla do officia sunt nisi anim ad. Ut dolore proident voluptate in adipisicing cupidatat qui et non enim. Laboris qui nisi Lorem mollit proident ut in do aute proident. Occaecat amet aliquip magna eu ut pariatur do excepteur.\r\n',
    posted: new Date(new Date().getTime() - 1000 * 60 * 60 * 2).toISOString(),
    toRoomId: 'a6f37fd6-7ef5-4559-b7fc-868ee617fe68',
    fromUserId: testUsers[6].id,
  },
];
