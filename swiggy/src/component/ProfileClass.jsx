import React from "react";

class ProfileClass extends React.Component{
    
    constructor(props){
        super(props);
        //Create State
        this.state = {
            UserInfo:{}
            
        }
    }
    async componentDidMount(){
        //api calls
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json);
        this.setState(
            {
                UserInfo:json
            }
        )
        console.log(this.state.UserInfo);
    }

    render(){
        return(
            <div>class base component 
             <p>
               {this.state.UserInfo.name} 
                </p>
                <img src={this.state.UserInfo.avatar_url} alt="" srcset="" />  

                <h3>count</h3> 
                <button onClick={()=>{
                        this.setState({
                            count:1,
                            count2:2,
                        });
                    }}>
                    
                SetCount</button>
            </div>
        )
    }
}
export default ProfileClass 