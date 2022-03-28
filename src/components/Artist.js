import React,{Component} from 'react';
import imgOneday from '../img/imgOneDay.jfif';
import imgBroken from '../img/imgBroken.jfif';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

class Artist extends Component{
    
    render(){
        return(
            <div style={styles.artistsContainer}>
                <div style={styles.titleBar}>
                        <p style={{fontWeight:'bold',color:'#431a62'}}>Artist - iPod</p>
                        <i className="fas fa-solid fa-music" style={{fontSize:'20px',marginTop:'2px',color:'#660957'}}/>
                </div>
                <Carousel indicators={false} controls={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imgBroken}
                            alt="broken Angel"
                            style={styles.img}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imgOneday}
                            alt="One day"
                            style={styles.img}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
    
}

const styles = {
    artistsContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
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

    },
    img:{
        borderBottomLeftRadius:'10px',
        borderBottomRightRadius:'10px',
        height:'235px'
    }
}

export default Artist;