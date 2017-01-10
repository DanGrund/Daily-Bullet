import React from 'react';
import {expect, assert} from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import jsdom from 'jsdom-global/register';
import Main from '../lib/Components/Main';

import DailyList from '../lib/Components/DailyList';
import IdeaInput from '../lib/Components/IdeaInput';
// import filterTasks from './helpers/filterTasks';
import SearchBar from '../lib/Components/SearchBar';
// import Login from './helpers/Login';

describe('<Main />', () => {

  it('should render a <div>', () => {
    const wrapper = shallow(<Main />)
    assert.equal(wrapper.type(), 'div');
  });

  it('should render one <IdeaInput /> component if a user is logged in', () => {
    const wrapper = shallow(<Main />)
    wrapper.setState({ user: {displayName: "Lauren Pesce"}})



  it('should have a state of tasks that is an empty array', () => {
    const wrapper = shallow(<Main />)
    expect(wrapper.state().tasks).to.deep.equal([]);
  });

  it('should have a state of searchTasks that is an empty string', () => {
    const wrapper = shallow(<Main />)
    expect(wrapper.state().searchTasks).to.deep.equal('');
  });

  it('should have a state of user that is null', () => {
    const wrapper = shallow(<Main />)
    expect(wrapper.state().user).to.deep.equal(null);
  });

  it('should render a login screen', () => {
    let wrapper = shallow(<Main />);
    expect(wrapper.find('Login')).to.have.length(1);
    expect(wrapper.text()).to.equal('Please Log In<Login />');
  });

  it('should call componentDidMount', () => {
    sinon.spy(Main.prototype, 'componentDidMount');
    const wrapper = mount(<Main />);
    expect(Main.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it.skip('should call handleSearch', () => {
    sinon.spy(Main.prototype, 'handleSearch');
    const wrapper = mount(<Main />);
    expect(Main.prototype.handleSearch.called).to.equal(true);
  });

  //     it('should have multiple components',() =>{
  //     const user = {email:"28l.pesce@gmail.com"}
  //     const tasks = [{firebaseId:'-Ka4DLhUcPqjsEUr3923', id: 1483998849935, title: "sdfsdfsdf"}]
  //
  //     const wrapper = mount(<Main />)
  //
  //     wrapper.state().user = user
  //     wrapper.state().tasks = tasks
  //     wrapper.update();
  //     expect(wrapper.find('DailyList').length).to.equal(1);
  //     expect(wrapper.find('IdeaInput').length).to.equal(1);
  //     expect(wrapper.find('SearchBar').length).to.equal(1);
  // });
});

describe('<IdeaInput />', () => {

  it('should render a <div>', () => {
    const wrapper = shallow(<IdeaInput />)
    assert.equal(wrapper.type(), 'div');
  });

  it.skip('should have a state of newTask that is an empty object with a value of an empty string', () => {
    const wrapper = shallow(<IdeaInput />)
    expect(wrapper.state.newTask).to.deep.equal({value: ''})
  });

  it('should change state of newTask on onChange', () => {
    const wrapper = mount(<IdeaInput/>);
    const input = wrapper.find('.journalInput');
    input.simulate('change', {target: { value: 'alligator' }});
    expect(wrapper.state('newTask').value).to.equal('alligator');
  })
});

describe('<DailyList />', () => {

  it.skip('should render a <div>', () => {
    const wrapper = shallow(<DailyList />)
    assert.equal(wrapper.type(), 'div');
  });

  it.skip('should render a <ul>', () => {
    const wrapper = shallow(<DailyList />)
    assert.equal(wrapper.type(), 'ul');
  });
});

describe('<SearchBar />', () => {

  it('should render an <input>', () => {
    const wrapper = shallow(<SearchBar />)
    assert.equal(wrapper.type(), 'input');
  });
});
