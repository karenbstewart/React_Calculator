import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  }) 

  it('should add 2 numbers', () => {
    const button1 = container.find('#number1');
    const plusButton = container.find('#operator_add');
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    const equals = container.find('#operator-equals');
    button1.simulate('click');
    plusButton.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should subtract 2 numbers', () => {
    const button7 = container.find('#number7');
    const plusButton = container.find('#operator-subtract');
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    const equals = container.find('#operator-equals');
    button7.simulate('click');
    plusButton.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should multiply 2 numbers', () => {
    const button3 = container.find('#number3');
    const plusButton = container.find('#operator-multiply');
    const button5 = container.find('#number5');
    const runningTotal = container.find('#running-total');
    const equals = container.find('#operator-equals');
    button3.simulate('click');
    plusButton.simulate('click');
    button5.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })
})

