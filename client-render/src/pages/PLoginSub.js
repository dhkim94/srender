import React, {Component} from "react";

class PLoginSub extends Component {
    constructor() {
        super(...arguments);
    }

    render() {

        console.log('-------PLogin sub render');

        return (
            <div className="login-sub transition-item">
                <div>[Login1 Sub Page]</div>
                <div>1. Login1 page sub</div>
                <div>2. Login1 page sub</div>
                <div>3. Login1 page sub</div>
                <div>4. Login1 page sub</div>
                <div>5. Login1 page sub</div>
            </div>
        )
    }
}

export default PLoginSub;