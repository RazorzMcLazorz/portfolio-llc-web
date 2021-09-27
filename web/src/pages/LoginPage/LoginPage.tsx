import React, { Component } from 'react'
// import Footer from 'src/components/footer'
import NavBar from 'src/components/navbar'
import StylesType from 'src/StylesType'

interface IProps {
  styles: StylesType
}

class LoginPage extends Component<IProps> {
  state = {
    emailLogin: '',
    passwordLogin: '',
  }

  login = () => {
    // this.props.changeState({
    //   email: this.state.emailLogin,
    //   password: this.state.passwordLogin,
    // })
    // setTimeout(this.props.history.push('/'), 1000)
    // console.log(this.props.email)
    // console.log(this.props.password)
  }

  render() {
    const { styles } = this.props
    return (
      <div>
        <NavBar />
        <div id={styles.login}>
          <form id={styles.loginForm}>
            <input
              className={styles.textBox}
              type="email"
              name="email"
              value={this.state.emailLogin}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              onChange={(val) =>
                this.setState({ emailLogin: val.currentTarget.value })
              }
            />
            <input
              className={styles.textBox}
              type="password"
              name="password"
              value={this.state.passwordLogin}
              onChange={(val) =>
                this.setState({ passwordLogin: val.currentTarget.value })
              }
            />
            <input
              className={styles.submitBox}
              type="button"
              value="Login"
              onClick={
                () => console.log('login')
                // this.props.changeState({
                //   email: this.state.emailLogin,
                //   password: this.state.passwordLogin,
                // })
              }
            />
            <div>This does not function yet</div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginPage
