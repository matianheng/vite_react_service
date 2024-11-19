// src/App.tsx
import React, { Suspense } from "react";
// import Counter from '../../components/Counter';
// import User from '../../components/User';

const User = React.lazy(() => import("../../components/User"));
const Counter = React.lazy(() => import("../../components/Counter"));
const App = () => {
  return (
    <div>
         <h1>Redux State Management</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Counter />
        <User />
      </Suspense>
    </div>
  );
};

export default App;
