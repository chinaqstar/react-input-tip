import React from 'react';
import { Router, Route, Link } from 'react-router';
import { history } from 'react-router/lib/HashHistory';
import InputTip from '../';


const App = React.createClass({
	getInitialState() {
		return {
			account: {
				style: 'default'
			},
			pwd: {
				style: 'default'
			}
		}
	},

	validateLogin(e) {
		e.preventDefault();

		let phoneFilter = /^1\d{10}$/,
			mailFilter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
			pwdFilter = /^([a-zA-Z0-9]|[*_ # @ % $ &  = +]){6,20}$/,
			errState = {},
			data = {
				account: this.refs.account.getValue(),
				password: this.refs.password.getValue()
	    }

		if(data.account &&
			!phoneFilter.test(data.account) &&
			!mailFilter.test(data.account)) {
			errState.account = { style: 'err', msg: '请输入正确的邮箱或手机号码' };
		}

		if(data.password && !pwdFilter.test(data.password)) {
			errState.pwd = { style: 'err', msg: '请输入的6-20位的密码' };
		}

		this.setState({account: errState.account, pwd: errState.pwd});
  },

	changeAccount(e) {
    	this.setState({ account: {} });
  },

  changePasswd(e) {
    	this.setState({ pwd: {} });
  },

  render() {
		let { account = {}, pwd = {} } = this.state;
    return (
	    <div className="example-container">
	      <InputTip type="text" bsStyle={account.style} tipMsg={account.msg} ref="account" className="form-control input-lg" groupClass="form-group from-input m-b-15" placeholder="手机号/邮箱" onBlur={this.validateLogin} onChange={this.changeAccount} />
        <InputTip type="password" bsStyle={pwd.style} tipMsg={pwd.msg} ref="password" className="form-control input-lg" groupClass="form-group from-input m-b-15" placeholder="密码" onBlur={this.validateLogin} onChange={this.changePasswd} />
      </div>
  	)
  }
});

const routes = {
  path: '/',
  component: App
}

React.render(<Router history={history} routes={routes} />, document.querySelector('#app'));
