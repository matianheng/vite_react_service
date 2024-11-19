import React from 'react';
import { navigateTo,useLocation} from '../../router/navigation';
type DataType = {
    name: string;
    age: number;
    role: string;
  };
const HomePage = () => {

 const location = useLocation();
 let state = location.state  as StateType; // 接收传递的对象
if(!location.state){
    state ={ name: '1', age: 1, role: '1' };
}
 const data:DataType = { name: 'John', age: 25, role: 'admin' };
  return (
    <div>
      <h1>Home Page</h1>
      {state ? (
        <>
          <p>Name: {state.name}</p>
          <p>Age: {state.age}</p>
          <p>Role: {state.role}</p>
        </>
      ) : (
        <p>No data received.</p>
      )}
      <button onClick={() => navigateTo('/about',data)}>Go to About</button>
    </div>
  );
};

export default HomePage;
