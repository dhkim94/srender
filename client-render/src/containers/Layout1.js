import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter, Route as RRoute, Switch as RSwitch} from "react-router-dom";

class Layout1 extends Component {
    render() {
        return (
            <div>
                layout12<br/>
                {this.props.children}
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

    return {
        // prepared: state.common.gigaGenie.init,
        children: ownProps.children
    }
};

export default withRouter(connect(mapStateToProps)(Layout1));

// export

// export default connect(mapStateToProps)(Layout1);