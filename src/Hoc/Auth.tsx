import React, { Component } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'redux/reducers'
import { auth } from '../redux/actions/user'

interface Props {

}

export default (ComposedClass: any, reload: boolean | null, adminRoute = null) => {
    class AuthenticationCheck extends Component<PropsT> {
        componentDidMount(){
            this.props.dispatch(auth()).payload.then(() => {
                let user = this.props.user.userData
                if(!user.isAuth) {
                    if(reload) {
                        this.props.history.push('/')
                    }
                } else {
                    if(adminRoute && !user.isAdmin) {
                        this.props.history.push('/sign_in')
                    } else {
                        if (reload === false) {
                            this.props.history.push('/sign_in')
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

    const mapStateToProps = (state: RootState) => ({
        user: state.user
    })
    
    const connector = connect(mapStateToProps)
    type PropsFromRedux = ConnectedProps<typeof connector>
    type PropsT = Props & PropsFromRedux & ReturnType<typeof mapStateToProps> & {
        history: any
    }

    return connect(mapStateToProps)(AuthenticationCheck)
}