import React,{createContext,useState} from 'react';
import useToggle from '../Hooks/useToggle'

export const ThemeContext=createContext();


 function ThemeProvider(props) {
     const [isDarkMode,handleChange]=useToggle(false);
    return (
     <ThemeContext.Provider value={{isDarkMode,handleChange}}>
{props.children}
    </ThemeContext.Provider>
    )
}



// class ThemeProvider extends React.Component
// {
//     constructor(props){
//     super(props);
//     this.state={
//         isDarkMode: false,
//     };
//     this.handleChange=this.handleChange.bind(this);
// }

// }
//     render(){
//     return <ThemeContext.Provider value={{...this.state,handleChange:this.handleChange}}>
// {this.props.children}
//     </ThemeContext.Provider>
// }
// }
export default ThemeProvider;