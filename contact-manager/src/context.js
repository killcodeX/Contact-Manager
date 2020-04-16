import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component{
    state = {
        contacts : [
            {
                id:1,
                name:'John Doe',
                email:'johndoe@gmail.com',
                phone:'555-555-5555'
            },
            {
                id:2,
                name:'Farhana Ahmed',
                email:'farhanax95@gmail.com',
                phone:'347-656-0526'
            },
            {
                id:3,
                name:'Aaquib Ahmed',
                email:'aaquibskimbox@gmail.com',
                phone:'799-663-0894'
            }
        ]
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;