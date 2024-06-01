import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Users } from './users';
import { Layout } from './layout';
import { Home } from './home';

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/users" element={<Users/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}