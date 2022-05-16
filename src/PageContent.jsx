import React from 'react'
import {ThemeContext} from './contexts/ThemeContext'

class PageContent extends React.Component {
    static contextType= ThemeContext;

    render(){
        const {isDarkMode}=this.context;
        const styles = {
    backgroundColor: isDarkMode ? '#232323' : '#ffffff',
    height:'100vh',
    width:'100vw',
}
        console.log(this.props.children)
        return <div style={styles}>
            {this.props.children}
        </div>
    }
}
export default PageContent;