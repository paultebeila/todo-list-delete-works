import "antd/dist/antd.css";
import './App.css';
import { Table, Modal } from "antd"
import {useState} from 'react'
import AddEmployee from "./addEmployee";

function App() {

  const [dataSource, setdataSource] = useState([]);
  
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Plan',
      dataIndex: 'plan',
      key: 'plan',
    },
    {
      key: 'action',
      title: 'Completion',
      render: (record) => {
        return (
          <>
          <button onClick={()=>{
              onDeleteStudent(record)
          }}>Complete</button>
          </>
        )
      }
    }
  ]

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure you want top delete '"+ record.plan+"' from your plan list?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: () =>{
        setdataSource(pre => {
          return pre.filter((employee) => employee.id !== record.id)
        });
      }
    })
    
  };

  //A function to add employee

  const addEmployee=((id, plan)=>{
    setdataSource((items)=>[...items, {
      id:id,
      plan:plan
    }])
  })
  return (
    <div className="App">
      <div className="adding">
        <AddEmployee list={dataSource} add={addEmployee} />
      </div>
      <header className="App-header">
      <Table dataSource={dataSource} columns={columns} />
      
      </header>
    </div>
  );
}

export default App;
