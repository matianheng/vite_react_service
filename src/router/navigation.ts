import { useNavigate,useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export const navigateTo = (path: string, state?: any) => {
  history.push(path, state); // 跳转到指定路径
};

export const goBack = () => {
  history.back(); // 返回上一页
};

// 监听路由变化
history.listen(({ location, action }) => {
  console.log(`Navigated to: ${location.pathname}, Action: ${action}`);
});

// const useNavigation = () => {
//   const navigate = useNavigate();

//   return {
//     navigateTo: (path: string, state?: any) => navigate(path, { state }),
//     goBack: () => navigate(-1),
//   };
// };
// export {history};
// export default useNavigation;
export {useLocation}
export default history;