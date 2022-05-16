import React,{createContext} from 'react';

export const ThemeContext=createContext();


class ThemeProvider extends React.Component
{
    constructor(props){
    super(props);
    this.state={
        isDarkMode: false,
    };
    this.handleChange=this.handleChange.bind(this);
}
handleChange(event){
    this.setState((oldSt)=>({
        isDarkMode:!(oldSt.isDarkMode)
    }))
}
    render(){
    return <ThemeContext.Provider value={{...this.state,handleChange:this.handleChange}}>
{this.props.children}
    </ThemeContext.Provider>
}
}
export default ThemeProvider;