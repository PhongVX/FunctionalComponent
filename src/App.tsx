import 'antd/dist/antd.css';
import './common/styles/styles.scss';
import './styles.scss';
import { Tabs } from 'antd';
import SampleComponents from './views/SampleComponents';
import SampleLoginFormF from './views/Login/Functional';
import SampleLoginFormC from './views/Login/Class';

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
      </Tabs>
    </div>
  );
}

export default App;
