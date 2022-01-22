import React, {useState} from 'react'

interface Props {
    name: string
}
interface State {
    fullname: string | null;
}

class HelloWorld extends React.Component {
    state:State = {
        fullname: '',
    }
    constructor(props:Props){
        super(props)
    }

    render() {
        return <div>hello {name}</div>
    }
}
const HeloWorld_FN: React.FC<Props> = ({name}) => {
    //function version of class HelloWorld
    const [state] = useState<State>({fullname:''});
    return <div>hello {state.fullname}</div>
}
/*end of HelloWorld sample*/


interface FormProps<T> {
    values: T;
    children: (values:T) =>  JSX.Element;
}

type typeFormFunc=<T>({}:FormProps<T>)=>JSX.Element;
/* class Form <T> extends React.Component {
    constructor(props:FormProps<T>){
        super(props);
    }
    render() {
        return this.props.children(this.props.values)
    }
} */
const Form:typeFormFunc = <T extends {}>({values,children}:FormProps<T>) => {
   return (children(values))
}

const App: React.FC = () => {
    return <Form values={'hello world'} children={(value)=><div>{value}</div>}></Form>
};
export default App;