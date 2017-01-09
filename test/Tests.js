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

  it.skip('should render one <IdeaInput /> component', () => {
    const wrapper = shallow(<Main />)
    expect(wrapper.find(IdeaInput)).to.have.length(1);
  })

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

    it('should call handleSearch', () => {
      sinon.spy(Main.prototype, 'handleSearch');
      const wrapper = mount(<Main />);
      expect(Main.prototype.handleSearch.called).to.equal(true);
    });



});
