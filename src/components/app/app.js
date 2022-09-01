import React, { Component } from "react";
import ClearAll from "../clear-all";
import Decimal from "../decimal";
import DeleteLast from "../delete-last";
import Equals from "../equals";
import Numbers from "../numbers";
import Operators from "../operators";
import Screen from "../screen";

import $ from "jquery";

import './app.css';

export default class App extends Component {

    state = {
        full: '',
        lastVal: '0',
        curOper: '',
        ifEval: false,
        res: 0
      };

    pressNumber = (num) => {
        const { ifEval } = this.state;
        let oper, val;
        
        if (ifEval) {
            this.setState({
                full: '',
                lastVal: '0',
                curOper: '',
                ifEval: false,
                res: 0
            }); 
            oper = '';
            val = '0';
        } else {
            oper = this.state.curOper;
            val = this.state.lastVal;
        };
        
        if (oper === '') {
            if (val != '0') {
                if (val.length < 14) {
                    this.setState(state => ({
                        full: state.full + num,
                        lastVal: state.lastVal + num
                    }))
                }
            } else {
                this.setState(state => ({
                    lastVal: num.toString(),
                    full: state.full.substr(0, state.full.length - 1) + num
                }));
            }
        } else {
            this.setState(state => ({
                full: state.full + num,
                lastVal: num.toString(),
                curOper: ''
            }));
        }
    }

    pressOperator = (op) => {
        const { curOper, ifEval, res } = this.state;
        
        if (ifEval) {
            this.setState({
                full: res.toString(),
                ifEval: false
            });
        };
        
        if (curOper === '') {
            this.setState(state => ({
                curOper: op,
                full: state.full + op,
                lastVal: '0'
            }))
        } else if (curOper.length < 2) {
            if (op === '-') {
                this.setState(state => ({
                    curOper: curOper + op,
                    full: state.full + op
                }));
            } else {
                    this.setState(state => ({
                        curOper: op,
                        full: state.full.substr(0, state.full.length - 1) + op
                    }));
            }
        } else {
                this.setState(state => ({
                        curOper: op,
                        full: state.full.substr(0, state.full.length - 2) + op
                }));
        }
    }

    pressDecimal = () => {
        const { ifEval } = this.state;
        let oper, val;
        
        if (ifEval) {
            this.setState({
                full: '',
                lastVal: '0',
                curOper: '',
                ifEval: false,
                res: 0
            }); 
        oper = '';
        val = '0';
        } else {
            oper = this.state.curOper;
            val = this.state.lastVal;
        };
        
        if (oper != '') {
            this.setState(state => ({
                full: state.full + '0.',
                curOper: '',
                lastVal: '0.'
            }));
        } else {
            if (!val.includes('.')) {
                this.setState(state => ({
                    lastVal: state.lastVal + '.',
                    full: state.full + '.'
                }));
            }
        }
    }

    evalOp = () => {
        let { full, curOper } = this.state;
        const regex = /[\*\/\+-]+/g;
        const nums = full.split(regex).map(el => Number(el));
        const opers = full.match(regex);
        
        if (opers != null) {
    
          if (curOper !== '') {
            full = full.replace(/[\*\/\+-]+$/, '');
            nums.pop();
            opers.pop();
          } 
    
          for (let i = 0; i < opers.length; i++) {
            switch(opers[i]) {
              case '*':
                nums.splice(i, 2, nums[i] * nums[i + 1]);
                opers.splice(i, 1);
                i--;
                break;
              case '/':
                nums.splice(i, 2, nums[i] / nums[i + 1]);
                opers.splice(i, 1);
                i--;
                break;
              case '*-':
                nums.splice(i, 2, -nums[i] * nums[i + 1]);
                opers.splice(i, 1);
                i--;
                break;
              case '/-':
                nums.splice(i, 2, -nums[i] / nums[i + 1]);
                opers.splice(i, 1);
                i--;
                break;
            }
          }
    
          for (let i = 0; i < opers.length; i++) {
            switch(opers[i]) {
              case '+':
                nums.splice(i, 2, nums[i] + nums[i + 1]);
                opers.splice(i, 1);
                i--;
                break;
              case '-':
                nums.splice(i, 2, nums[i] - nums[i + 1]);
                opers.splice(i, 1);
                i--;
                break;
              case '+-':
                nums.splice(i, 2, -nums[i] - nums[i + 1]);
                opers.splice(i, 1);
                i--;
                break;
              case '--':
                nums.splice(i, 2, -nums[i] + nums[i + 1]);
                opers.splice(i, 1);
                i--;
                break;
            }
          }
    
          this.setState({
            full,
            lastVal: nums[0].toString(),
            res: nums[0],
            ifEval: true,
            curOper: ''
          });
          
        } else {
            this.setState({
                res: nums[0],
                ifEval: true
            })
        }
    }

    deleteLast = () => {
        const { full, curOper, lastVal, ifEval, res } = this.state;
        let fullLength = full.length;
        
        if (ifEval) {
            this.setState({
                full: res.toString(),
                ifEval: false
            });
        } else {
            if (fullLength === 1) {
                this.clearAll();
            } else if (lastVal != '0') {
                if (lastVal.length === 1) {
                    this.setState({
                        full: full.substr(0, fullLength - 1),
                        lastVal: '0',
                        curOper: full.substr(0, fullLength - 1).match(/[\*\/\+-]+$/) || ''
                    })
                } else {
                    this.setState({
                        full: full.substr(0, fullLength - 1),
                        lastVal: lastVal.substr(0, lastVal.length - 1)
                    });
            } 
          } else {
              if (curOper.length <= 1) {
                this.setState({
                    full: full.substr(0, fullLength - 1),
                    curOper: '',
                    lastVal: full.substr(0, fullLength - 1).match(/[0-9]+$/) || '0'
                });
              } else {
                    this.setState({
                        full: full.substr(0, fullLength - 1),
                        curOper: curOper.substr(0, curOper.length - 1)
                    });
              }
          }
        }
    }

    clearAll = () => {
        this.setState({
            full: '',
            lastVal: '0',
            curOper: '',
            res: 0,
            ifEval: false
        });
    }

    pressKey = (event) => {
        const key = event.key;
        const regex = /[\*\/\+-]+/g;

        if (Number.isInteger(Number(key))) {
            this.pressNumber(Number(key));
        } else if (regex.test(key)) {
            this.pressOperator(key);
        } else switch(key) {
            case '.':
                this.pressDecimal();
                break;
            case 'Backspace':
                this.deleteLast();
                break;
            case 'Delete':
                this.clearAll();
                break;
            case '=':
            case 'Enter':
                this.evalOp();
                break;
            default:
                break;
        }
    }

    componentDidMount() {
        $(document).keydown(this.pressKey);
    }

    render() {
        return (
            <div className="app">
                <Screen {...this.state} />
                <div className="keypad">
                    <Numbers onPress={this.pressNumber} />
                    <Operators onPress={this.pressOperator} />
                    <Decimal onPress={this.pressDecimal} />
                    <Equals onPress={this.evalOp} />
                    <ClearAll onPress={this.clearAll} />
                    <DeleteLast onPress={this.deleteLast} />
                </div>
            </div>
        )
    }
}