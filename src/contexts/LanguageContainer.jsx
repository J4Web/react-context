import React,{createContext} from 'react';
export const LanguageContext =createContext(); 
class LanguageProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lang:'English'

        }
        this.changeLanguage=this.changeLanguage.bind(this);
    }
    changeLanguage(evt){
        this.setState({lang:evt.target.value});

    }
    render() {
        return <LanguageContext.Provider value={{...this.state,changeLanguage:this.changeLanguage}}>
            {this.props.children}
        </LanguageContext.Provider>
    }
}


export default LanguageProvider

// export const withLangContext=(Component)=>(props)=>{
//     return <LanguageContext.Consumer>
//         {val=><Component langContext={val} {...props}/>}
//     </LanguageContext.Consumer>
// }