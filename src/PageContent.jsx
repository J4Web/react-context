import React from 'react'
const styles = {
    backgroundColor:'red',
    height:'100vh',
    width:'100vw',
}
class PageContent extends React.Component {
    render(){
        console.log(this.props.children)
        return <div style={styles}>
            {this.props.children}
        </div>
    }
}
export default PageContent;