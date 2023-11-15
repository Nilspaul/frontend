
import { Route, Routes } from 'react-router-dom';
import Main from './src/Mainpage'


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default AppRouter;
