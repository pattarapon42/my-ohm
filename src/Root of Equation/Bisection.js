import React, { Component } from 'react'
import {Card, Input, Button, Table} from 'antd';
import '../screen.css';
import 'antd/dist/antd.css';
import {abs,compile} from 'mathjs';

const InputStyle = {
    background: "#ffffff",
    color: "#000000", 
    fontWeight: "bold", 
    fontSize: "24px"

};
var dataInTable = []
const columns = [
    {
      title: "Iteration",
      dataIndex: "iteration",
      key: "iteration"
    },
    {
      title: "XL",
      dataIndex: "xl",
      key: "xl"
    },
    {
      title: "XR",
      dataIndex: "xr",
      key: "xr"
    },
    {
        title: "X",
        dataIndex: "x",
        key: "x"
    },
    {
      title: "Error",
      key: "error",
      dataIndex: "error"
    }
  ];

class Bisection extends Component {
    
    constructor() {
        super();
        this.state = {
            fx: "",
            xl: 0,
            xr: 0,
            showOutputCard: false,
            
            moveLeft: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.bisection = this.bisection.bind(this);
    }
    bisection(xl, xr) {
        
        var increaseFunction = false;
        var xm = 0;
        var sum= parseFloat(0.000000);
        var n=0;
        var data  = []
        data['xl'] = []
        data['xr'] = []
        data['x'] = []
        data['error'] = []
        if (this.func(xl) < this.func(xr)) {
            increaseFunction = true;
        }

        do{ 
            xm = (xl + xr) / 2;
            if (this.func(xm)*this.func(xr) < 0) { 
                sum = this.error(xm,xr);
                if (increaseFunction) {
                    xl = xm;
                }
                else {
                    xr = xm;
                }
                
            } 
            else {
                sum = this.error(xm,xl);
                if (increaseFunction) {
                    xr = xm;
                }
                else {
                    xl = xm;
                } 
            }                
            data['xl'][n]  =   xl;
            data['xr'][n]  =   xr;
            data['x'][n]   =   xm.toFixed(8);
            data['error'][n] = Math.abs(sum).toFixed(8);
            n++;  
        }while(abs(sum)>0.000001);
        this.createTable(data['xl'], data['xr'], data['x'], data['error']);
        this.setState({
            showOutputCard: true,
            
        })

        
    }
    func(X) {
        var expr = compile(this.state.fx);
        let scope = {x:parseFloat(X)};
        return expr.eval(scope);        
    }
    error(xnew, xold) {
        return abs((xnew-xold) / xnew);
    }
    createTable(xl, xr, x, error) {
        dataInTable = []
        for (var i=0 ; i<xl.length ; i++) {
            dataInTable.push({
                iteration: i+1,
                xl: xl[i],
                xr: xr[i],
                x: x[i],
                error: error[i]
            });
        }
    
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    render() {
        return(
            <div style={{ padding: "30px" }}>
            <h2 style={{color: "#ffffff", fontWeight: "bold"}}>Bisection</h2>
                <div style={{float:"left"}}>
                    <Card
                    bordered={true}
                    style={{ width: 400, background: "#001529", color: "#000000", float:"left"}}
                    onChange={this.handleChange}
                    id="inputCard"
                    >
                        <h2>f(x)</h2><Input size="large" name="fx" style={InputStyle}></Input>
                        <h2>X<sub>L</sub></h2><Input size="large" name="xl" style={InputStyle}></Input>
                        <h2>X<sub>R</sub></h2><Input size="large" name="xr" style={InputStyle}></Input><br/><br/>
                        <Button id="submit_button" onClick= {
                                ()=>this.bisection(parseFloat(this.state.xl), parseFloat(this.state.xr))
                            }  
                        style={{background: "#413d3d", color: "white", fontSize: "10px"}}>Submit</Button>
                        
                    </Card>
                    

                    {this.state.showOutputCard && 
                        <Card
                        title={"Output"}
                        bordered={true}
                        style={{width: "100%", background: "#2196f3", color: "#FFFFFFFF", float:"inline-start", marginBlockStart:"2%"}}
                        id="outputCard"
                        >
                            <Table columns={columns} dataSource={dataInTable}  bodyStyle={{fontWeight: "bold", fontSize: "18px", color: "black"}}
                            ></Table>
                        </Card>
                    }                    
                </div>

                
            </div>
        );
    }
}
export default Bisection;