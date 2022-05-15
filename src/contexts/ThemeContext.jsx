import React,{createContext} from 'react';

export const ThemeContext=createContext();


class ThemeProvider extends React.Component
{
    constructor(props){
    super(props);
    this.state={
        isDarkMode: false,
    };
}
    render(){
    return <ThemeContext.Provider value={{...this.state,isChickenGrilled:'Yeps'}}>
{this.props.children}
    </ThemeContext.Provider>
}
}
export default ThemeProvider;