import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {changeUserId} from "../modules/Commons";
import store from "../commons/Store";


class Layout1 extends Component {
    handleButton() {

        console.log('---here here');
        store.dispatch(changeUserId({userId: "dhkim"}));
        // store.dispatch(changeUserId("dhkim"));
    }

    render() {

        const duration = 300;


        const path = this.props.location.pathname;
        const segment = path.split('/')[1] || 'root';

        return (
            <div>
                <div>Link</div>
                <div>userId: {this.props.userId}</div>
                <ul>
                    <li><Link to={"/login"}>login1</Link></li>
                    <li><Link to={"/login/piddd"}>login sub</Link></li>
                    <li><Link to={"/login2"}>login2</Link></li>
                </ul>
                layout12<br/>
                <br/>
                <button onClick={this.handleButton.bind(this)}>Change userId</button>
                <br/>



                <ReactCSSTransitionGroup transitionName="pageSlider"
                                         transitionEnterTimeout={600} transitionLeaveTimeout={600}>
                    {React.cloneElement(this.props.children, { key: segment })}
                </ReactCSSTransitionGroup>

            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {

    console.log('-----state', state);
    console.log('-----ownProps', ownProps);
    console.log('-----params', ownProps.params);
    console.log('-----children', ownProps.children);

    return {
        // prepared: state.common.gigaGenie.init,
        children: ownProps.children,
        userId: state.common.userId
    }
};

export default connect(mapStateToProps)(Layout1);