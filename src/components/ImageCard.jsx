import React from "react";
class ImageCard extends React.Component{

constructor(props){
    super(props);
        this.imageRef = React.createRef();
        
    
}
async componentDidMount() {

    this.imageRef.current.addEventListener('load', this.setSpans);
    
}
setSpans(){
    
}
render(){
    const {description, urls,}=this.props.image; 
    return(
        <div>
            <img
            ref={this.imageRef}
             key={this.props.image.id}
             src={urls.regular}
             alt={description} 
            />
        </div>
    );
}
}
export default ImageCard;