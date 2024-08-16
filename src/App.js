import React from 'react';
import { ContextProvider } from './ContextProvider';
// import Filter from './components/Filter';
import './App.css';
// import Stepperui from './components/Stepperui';
// import Navbar from './components/Navbar';
// import Page1 from './components/Page1';

import AppRoutes from './routes';

// const item = [
//   {
//     label: 1,
//     description: "label1"
//   },
//   {
//     label: 2,
//     description: "label2"
//   },
//   {
//     label: 3,
//     description: "label3"
//   },
//   {
//     label: 4,
//     description: "label4"
//   }
// ]

function App() {

  // const [item, setItem] = useState([]);
  // const additem = (data) => {
  //   console.log('data:', data)
  //   setItem(prve => [
  //     ...prve, data
  //   ])
  // }

  // const ondelect = (index) => {
  //   const temp = [...item]
  //   temp.splice(index, 1)
  //   console.log('index:', index)
  //   setItem([...temp])
  // }

  return (
    <>
      <ContextProvider>
        <AppRoutes />
      </ContextProvider>
      {/* <Dropdown /> */}
      {/* <Navbar onadditem={additem} />
      <Page1 item={item} ondelect={ondelect} /> */}
    </>
    //   <div>
    //     <Stepperui currect={1} items={item} />
    //     <Filter />
    //   </div>
  );
}

export default App;
