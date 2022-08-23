import logo from './logo.svg';
import './App.css';
import  Greet  from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/helloworld';
import Message from './components/message';
import Counter from './components/counter';
import FunctionClick from './components/functionclick';
import ClassClick from './components/classclick';
import EventBind  from './components/eventbind';
import GreetExample from './components/greet1';
import MessageExample from './components/message1';
import HelloExample from './components/helloworld1';
import WelcomeExample from './components/welcome1';
import FunctionClickExample from './components/functionclick1';
import ClassClickExample from './components/classclick1';
import CounterExample from './components/counter1';
import EventBindExample from './components/eventbind1';
import ClassCounter from './components/hooks/tutorial/classcounter';
import HookCounter from './components/hooks/tutorial/hookcounter';
import ClassCounterExample from './components/hooks/practice/classcounter1';
import HookCounterExample from './components/hooks/practice/hookcounter1';
import HookCounterState from './components/hooks/tutorial/hookcounter3';
import ClassCounterValue from './components/hooks/tutorial/classcounter3';
import HookCounterThree from './components/hooks/practice/hookcounterthree';
import ClassCounterPrev from './components/hooks/practice/classcounterthree';
import HookState from './components/hooks/tutorial/hookstateobject';
import HookFour from './components/hooks/tutorial/hookfour';
import HookFive from './components/hooks/practice/hookfive';
import ParentComponent from  './components/hooks/tutorial/parentcomponent';
import ParentComp from './components/hooks/practice/parentcomp';
import UserGreeting from './components/hooks/tutorial/usergreeting';
import UserGreet from './components/hooks/practice/usergreet';
import NameList from './components/hooks/tutorial/namelist';
import CourseList from './components/hooks/practice/courselist';
import ClassCounterOne from './components/hooks/tutorial/classcounterone';
import HookCounterOne from './components/hooks/tutorial/hookcounterone';
import ClassMouse from './components/hooks/tutorial/classmouse';
import HookMouse from './components/hooks/tutorial/hookmouse';
import MouseContainer from './components/hooks/tutorial/mousecontainer';
import IntervalClass from './components/hooks/tutorial/intervalclass';
import IntervalHook from './components/hooks/tutorial/intervalhook';
 import DataFetching from './components/hooks/tutorial/datafetching';
import ClassCounterOneTwo from './components/hooks/practice/classcounteronetwo';
import HookCounterOneTwo from './components/hooks/practice/hookcounteronetwo';
import HookMouseOne from './components/hooks/practice/hookmouseone';
import ClassMouseOne from './components/hooks/practice/classmouseone';
import MouseContainerOne from './components/hooks/practice/mousecontainerone';
import IntervalClassOne from './components/hooks/practice/intervalclassone';
import IntervalHookOne from './components/hooks/practice/intervalhookone';
import Form from './components/hooks/tutorial/form';
import StyleSheet from './components/hooks/tutorial/stylesheet';
import Inline from './components/hooks/tutorial/inline';
import './appstyles.css'
import styles from './appstyles.modules.css'
import LifecycleA from './components/hooks/tutorial/lifecyclea';
import LifecycleB from './components/hooks/tutorial/lifecyclea';
import FragmentDemo from './components/hooks/tutorial/fragmentdemo';
import Table from './components/hooks/tutorial/table';
import FragmentDemoOne from './components/hooks/practice/fragmentdemo1';
import TableOne from './components/hooks/practice/table1';
import LifecycleOne from './components/hooks/practice/lifecycleone';
import LifecycleTwo from './components/hooks/practice/lifecycletwo';
import NewForm from './components/hooks/practice/newform';
import InlineOne from './components/hooks/practice/inlineone';
import StyleSheetOne from './components/hooks/practice/stylesheetone';
import ClickCounter from './components/hooks/tutorial/clickcounter';
import HoverCounter from './components/hooks/tutorial/hovercounter';
import ClickCounterTwo from './components/hooks/tutorial/clickcountertwo';
import HoverCounterTwo from './components/hooks/tutorial/hovercountertwo';
import User from './components/hooks/practice/user';
import CounterRender from './components/hooks/tutorial/counterrender';
import WithCounterPractice from './components/hooks/practice/withcounterpractice';
import ClickCounterPractice from './components/hooks/practice/clickcounterpractice';
import HoverCounterPractice from './components/hooks/practice/hovercounterpractice';
import UserPractice from './components/hooks/practice/userpractice';
import CounterRenderPractice from './components/hooks/practice/counterrenderpractice';
import ClickCounterTwoPractice from './components/hooks/practice/clickcountertwopractice';
import ComponentC from './components/hooks/tutorial/usecontext';
import React from 'react';
import CompC from './components/hooks/practice/compc';
import FocusInput from './components/hooks/tutorial/focusinput';
import ClassTimer from './components/hooks/tutorial/classtimer';
import HookTimer from './components/hooks/tutorial/hooktimer';
import FocusInputPractice from './components/hooks/practice/focusinputpractice';
import ClassTimerPractice from './components/hooks/practice/classtimerpractice';
import HookTimerPrctice from './components/hooks/practice/hooktimerpractice';

export const titleContext = React.createContext()
export const nameContext = React.createContext()
export const channelContext = React.createContext()
export const UserContext = React.createContext()


function App() {
  return (
    <div className="App">
      <HookTimerPrctice />
      <ClassTimerPractice />
      {/* <FocusInputPractice /> */}
      {/* <HookTimer /> */}
      {/* <ClassTimer /> */}
      {/* <FocusInput /> */}
       {/* <nameContext.Provider value ={'Poojitha'}>
        <titleContext.Provider value = {'React'}>
            <CompC />
        </titleContext.Provider>
      </nameContext.Provider> */}
       {/* <UserContext.Provider value = {'Poojitha'}> 
        <channelContext.Provider value = {'codevolution'}>
        <ComponentC />
        </channelContext.Provider>
      </UserContext.Provider>  */}
      {/* <UserPractice render={(isLoggedIn) =>isLoggedIn ? "user1" : 'user2'} /> */}
      {/* <CounterRenderPractice>
      {(count,incrementCount)=>(
          <ClickCounterTwo count= {count} incrementCount = {incrementCount} />
        )}
      </CounterRenderPractice> */}
      {/* <WithCounterPractice /> */}
      {/* <ClickCounterPractice/> */}
    {/* <HoverCounterPractice /> */}
      {/* <CounterRender>
        {(count,incrementCount)=>(
          <ClickCounterTwo count= {count} incrementCount = {incrementCount} />
        )}
      </CounterRender> */}
      {/* <CounterRender>
        {(count,incrementCount)=>(
          <HoverCounterTwo count= {count} incrementCount = {incrementCount} />
        )}
      </CounterRender> */}
      {/* <User render={(isLoggedIn) =>isLoggedIn ? "Poojitha" : 'Guest'}/> */}
     {/* <HoverCounterTwo />  */}
    {/* <ClickCounterTwo />  */}
    {/* <HoverCounter />  */}
    {/* <ClickCounter name="poojitha" />  */}

    {/* <NewForm /> */}

    {/* <LifecycleTwo /> */}
    {/* <LifecycleOne /> */}
    {/* <h1 className = 'error'>Error</h1>  */}
    {/* <h1 className = {styles.success}>Success</h1>  */}
    {/* <StyleSheetOne secondary = {false}/> */}
    {/* <InlineOne /> */}
    {/* <TableOne /> */}
    {/* <FragmentDemoOne /> */}
    {/* <Table/> */}
    {/* <FragmentDemo/> */}
    {/* <LifecycleA/> */}
    {/* <LifecycleB/> */}
    {/* <Form /> */}
    {/* <h1 className = 'error'>Error</h1>  */}
    {/* <h1 className = {styles.success}>Success</h1> */}
    {/* <Inline /> */}
    {/* <StyleSheet primary = {false}/> */}

    {/* <IntervalHookOne /> */}
    {/* <IntervalClassOne/> */}
    {/* <MouseContainerOne/> */}
    {/* <ClassMouseOne /> */}
    {/* <HookMouseOne/> */}
    {/* <HookCounterOneTwo/> */}
    {/* <ClassCounterOneTwo/> */}
    {/* <IntervalClass/> */}
    {/* <IntervalHook /> */}
    {/* <DataFetching /> */}

    {/* <MouseContainer /> */}
    {/* <HookMouse/> */}
    {/* <ClassMouse/> */}
    {/* <HookCounterOne/> */}
    {/* <ClassCounterOne /> */}

    {/* <CourseList/> */}
    {/* <NameList/> */}
    {/* <UserGreet/> */}
    {/* <UserGreeting/> */}
    {/* <ParentComp /> */}
    {/* <ParentComponent/> */}
    {/* <HookFive/> */}
    {/* <HookFour/> */}
      {/* <HookState/> */}
      {/* <ClassCounterPrev/> */}
      {/* <HookCounterThree/> */}
      {/* <ClassCounterValue/> */}
      {/* <HookCounterState/> */}
      {/* <HookCounterExample/> */}
      {/* <ClassCounterExample/> */}
      {/* <HookCounter/> */}
      {/* <ClassCounter/> */}
      {/* <EventBindExample/> */}
      {/* <CounterExample /> */}
      {/* <ClassClickExample/> */}
      {/* <FunctionClickExample /> */}
      {/* <HelloExample /> */}
      {/* <MessageExample/> */}
      {/* <GreetExample/> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name="Bruce" />
      <Greet name="Clark" />
      <Greet name="Diana" />

      <Welcome name="Bruce" />
      <Welcome name="Clark" />
      <Welcome name="Diana" /> */}
{/* 
      <GreetExample name="Apple" />
      <GreetExample name="Banana" />
      <GreetExample name="grapes" /> */}

      {/* <WelcomeExample name="Rose" />
      <WelcomeExample name="Jasmine" />
      <WelcomeExample name="Lotus" />
 */}

      {/* <Hello /> */}
    </div>
  );
}

export default App;
