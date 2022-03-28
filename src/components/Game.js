import React,{Component} from 'react';

class Game extends Component{
    
    render(){
        return(
            <div style={styles.settings} >
                 <div style={styles.titleBar}>
                        <p style={{fontWeight:'bold',color:'#431a62'}}>Game - iPod</p>
                        <i className="fas fa-solid fa-gamepad" style={{fontSize:'20px',marginTop:'2px',color:'#660957'}}/>
                    </div>
                <div style={{width : '100%' , height : '90%'}}>
                    <img style={styles.image} src="https://media.giphy.com/media/o6rHWMhLig118QQiL8/giphy.gif" alt="games" />
                </div>
                
            </div>
        );
    }
    
}

const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap'
    },
    image : {
        width:'100%',
        height:'100%',
        alignSelf : 'center'
    },
    titleBar : {
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    }
}


export default Game;