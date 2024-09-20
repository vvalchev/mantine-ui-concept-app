import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Shell } from './components/website/Shell';
import { ProfilePage } from './pages/profile';
import { SubscriptionPage } from './pages/subscription';
import { UsersPage } from './pages/users';
import { NewsPage } from './pages/news';
import { MessagesPage } from './pages/messages';
import { FormsPage } from './pages/forms';
import { OrgChartPage } from './pages/orgchart';
import { NewsIdPage } from './pages/news_id';
import { DemoPage } from './pages/demo';
import { TablesPage } from './tables';

export default function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Shell>
              <DemoPage />
            </Shell>
          }
        />
        <Route path='/login' element={<i>it works</i>} />
        <Route path='/signup' element={<i>it works</i>} />
        <Route path='/reset' element={<i>it works</i>} />
        <Route path='/logout' element={<i>it works</i>} />
        <Route
          path='/billing'
          element={
            <Shell>
              <SubscriptionPage />
            </Shell>
          }
        />
        <Route
          path='/messages/:roomId'
          element={
            <Shell>
              <MessagesPage />
            </Shell>
          }
        />
        <Route
          path='/news'
          element={
            <Shell>
              <NewsPage />
            </Shell>
          }
        />
        <Route
          path='/news/:newsId'
          element={
            <Shell>
              <NewsIdPage />
            </Shell>
          }
        />
        <Route
          path='/forms'
          element={
            <Shell>
              <FormsPage />
            </Shell>
          }
        />
        <Route
          path='/orgchart'
          element={
            <Shell>
              <OrgChartPage />
            </Shell>
          }
        />
        <Route
          path='/profile'
          element={
            <Shell>
              <ProfilePage />
            </Shell>
          }
        />
        <Route
          path='/users'
          element={
            <Shell>
              <UsersPage />
            </Shell>
          }
        />
        <Route
          path='/tables'
          element={
            <Shell>
              <TablesPage />
            </Shell>
          }
        />
        {/* <Route path="*" element={<NothingFoundBackground />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
