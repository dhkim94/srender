import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import PageTransition from "react-router-page-transition";

class Layout1 extends Component {
    render() {
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
                <PageTransition>
                    {this.props.children}
                </PageTransition>
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