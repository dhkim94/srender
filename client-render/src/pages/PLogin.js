import React, {Component} from "react";

class PLogin extends Component {
    constructor() {
        super(...arguments);
    }

    render() {

        console.log('-------PLogin render');

        return (
            <div className="login1 transition-item">
                <div>[Login1 Page]</div>
                <div>1. Login page 1</div>
                <div>2. Login page 1</div>
                <div>3. Login page 1</div>
                <div>4. Login page 1</div>
                <div>5. Login page 1</div>
            </div>
        )
    }
}

export default PLogin;