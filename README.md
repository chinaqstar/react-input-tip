#react-input-tip
基于react-bootstarp的一个组件

### bulid
```
npm install
npm build
```

### install
```
npm install react-input-tip
```

### example
```
import React from 'react';
import { Router, Route, Link } from 'react-router';
import { history } from 'react-router/lib/HashHistory';
import InputTip from 'react-input-tip';

const App = React.createClass({

  getInitialState() {
    return {
      age: {
				style: 'default'
			}
    }
  },

  cheakAge(e) {
      e.preventDefault();
      let errState = {},
          age = this.refs.age.getValue();

      if(age && age >= 35) {
  			errState.age = { style: 'err', msg: '年龄必须小于35岁' };
  		}

  		this.setState({age: errState.age});
  },

  render() {
		let { age = {} } = this.state;
    return (
	    <div className="example-container">
	      <InputTip type="text" bsStyle={age.style} tipMsg={age.msg} ref="age" className="form-control input-lg" groupClass="form-group from-input m-b-15" placeholder="年龄" onBlur={this.cheakAge} />
      </div>
  	)
  }
});

const routes = {
  path: '/',
  component: App
}

React.render(<Router history={history} routes={routes} />, document.body);
```
