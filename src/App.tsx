import 'antd/dist/antd.css';
import './common/styles/styles.scss';
import './styles.scss';
import { Tabs } from 'antd';
import SampleComponents from './views/SampleComponents';
import SampleLoginFormF from './views/Login/Functional';
import SampleLoginFormC from './views/Login/Class';
import Counting from './views/Counting';
import ParentCountingF from './views/ParentCounting/Functional';
import ParentCountingC from './views/ParentCounting/Class';

const { TabPane } = Tabs;

function App() {
  return (
    <div className="wrapper-app">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Custom Components" key="1">
          <SampleComponents />
        </TabPane>
        <TabPane tab="Functional Login Form" key="2">
          <SampleLoginFormF />
        </TabPane>
        <TabPane tab="Functional Login Form With Hooks" key="3">
          <SampleLoginFormF />
        </TabPane>
        <TabPane tab="Class Login Form" key="4">
          <SampleLoginFormC />
        </TabPane>
        <TabPane tab="Counting" key="5">
          <Counting />
        </TabPane>
        <TabPane tab="Parent Counting Functional" key="6">
          <ParentCountingF />
        </TabPane>
        <TabPane tab="Parent Counting Class" key="7">
          <ParentCountingC />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
