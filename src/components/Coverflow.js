import React,{Component} from 'react';
import Gif from '../img/settings.gif';

class Coverflow extends Component{
    
    render(){
        return(
            <div style={styles.Coverflow} >

                <div style={styles.titleBar}>
                        <p style={{fontWeight:'bold',color:'#431a62'}}>Coverflow - iPod</p>
                        {/* <i className="fas fa-cog" style={{fontSize:'20px',marginTop:'2px',color:'#660957'}}/> */}
                </div>
                <div style={{width : '100%' , height : '90%',display:'flex' , flexDirection : 'row' , justifyContent: 'center'}}>
                    <img style={styles.image} src={Gif} alt="coverflow" />
                </div>
            </div>
        );
    }
    
}

const styles = {
    Coverflow : {
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

export default Coverflow;