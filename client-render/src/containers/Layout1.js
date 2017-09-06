import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
// import {TransitionGroup, CSSTransition} from "react-transition-group";
// import CSSTransition from 'react-transition-group/CSSTransition';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Layout1 extends Component {



    render() {

        const duration = 300;

        const defaultStyle = {
            transition: `opacity ${duration}ms ease-in-out`,
            opacity: 0,
        }

        const transitionStyles = {
            entering: { opacity: 1 },
            entered:  { opacity: 1 },
        };

        var path = this.props.location.pathname;
        var segment = path.split('/')[1] || 'root';

        return (
            <div>
                <div>Link</div>
                <ul>
                    <li><Link to={"/login"}>login1</Link></li>
                    <li><Link to={"/login/piddd"}>login sub</Link></li>
                    <li><Link to={"/login2"}>login2</Link></li>
                </ul>
                layout12<br/>
                <br/>

                {/*<TransitionGroup*/}
                    {/*transitionName="example"*/}
                    {/*transitionAppear={true}*/}
                    {/*transitionAppearTimeout={500}*/}
                    {/*transitionEnter={false}*/}
                    {/*transitionLeave={false}>*/}
                    {/*<h1>Fading at Initial Mount</h1>*/}
                {/*</TransitionGroup>*/}

                {/*<TransitionGroup>*/}
                    {/*<CSSTransition classNames="example" timeout={{exit:1500, enter:1500}}>*/}
                        {/*{this.props.children}*/}

                    {/*</CSSTransition>*/}
                {/*</TransitionGroup>*/}


                <ReactCSSTransitionGroup transitionName="pageSlider"
                                         transitionEnterTimeout={600} transitionLeaveTimeout={600}>
                    {React.cloneElement(this.props.children, { key: segment })}
                </ReactCSSTransitionGroup>

                {/*<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>*/}
                    {/*{this.props.children}*/}
                {/*</ReactCSSTransitionGroup>*/}

            </div>
        )
    }
}

// const Layout1 = ({children}) => (
//     <div>
//         layout1<br/>
//         {children}
//     </div>
// );

// const mapStateToProps = (state, ownProps) => ({
//     // prepared: state.common.gigaGenie.init,
//     // children: ownProps.children
// });


const mapStateToProps = (state, ownProps) => {

    console.log('-----state', state);
    console.log('-----ownProps', ownProps);
    console.log('-----params', ownProps.params);
    console.log('-----children', ownProps.children);

    return {
        // prepared: state.common.gigaGenie.init,
        children: ownProps.children
    }
};

// export default withRouter(connect(mapStateToProps)(Layout1));

// export

export default connect(mapStateToProps)(Layout1);