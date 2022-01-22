import React from 'react';

interface Props {
    obj:{}
}

export class App extends React.Component {
    state: {};
    constructor(props:Props){
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (            
                <div>Hello World</div>            
        )
    }
}