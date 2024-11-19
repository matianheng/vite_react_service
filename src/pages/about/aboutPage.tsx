import React from 'react';
import { navigateTo,useLocation } from '../../router/navigation';
type StateType = {
    name: string;
    age: number;
    role: string;
  };
const AboutPage = () => {
    const location = useLocation();
    const state = location.state  as StateType; // 接收传递的对象
    const data:StateType =  { name: 'matianheng', age: 30, role: 'root' }
  return (
    <div>
      <h1>about Page</h1>
      {state ? (
        <>
          <p>Name: {state.name}</p>
          <p>Age: {state.age}</p>
          <p>Role: {state.role}</p>
        </>
      ) : (
        <p>No data received.</p>
      )}
      <button onClick={() => navigateTo('/home',data)}>Go to home</button>
    </div>
  );
};

export default AboutPage;
