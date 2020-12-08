import React, { Component } from 'react'
import { connect } from 'react-redux'
import { auth } from '../redux/actions/user'

export default (ComposedClass: any, reload: boolean | null, adminRoute = null) => {
    class AuthenticationCheck extends Component {

        componentDidMount(){
            this.props.dispatch(auth()).then((response: any) => {
                let user = this.props.user.userData

                if(!user.isAuth) {
                    if(reload) {
                        this.props.history.push('/register_login')
                    }
                } else {
                    if(adminRoute && !user.isAdmin) {
                        this.props.history.push('/user/dashboard')
                    } else {
                        if (reload === false) {
                            this.props.history.push('/user/dashboard')
                        }
                    }
                }
            })
        }

        render() {
            return (
                <div>
                    <ComposedClass {...this.props} user={this.props.user}/>
                </div>
            )    
        }
    }

    const mapStateToProps = (state: any) => {
        return {
            user: state.user
        }
    }
    
    return connect(mapStateToProps)(AuthenticationCheck)
}