import React,{Component} from 'react';
import Home from './Home';
import Music from './Music';
import Game from './Game';
import Setting from './Setting';
import MyMusic from './MyMusic';
import Artist from './Artist';
import Coverflow from './Coverflow';

class Screen extends Component{

    render(){
        return(
            <div style={styles.screen} id='screen-container'>
                {this.props.activePage==='Home'?<Home activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Music'?<Music activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Game'?<Game /> : null}
                {this.props.activePage==='Coverflow'?<Coverflow /> : null}
                {this.props.activePage==='Setting'?<Setting /> : null}
                {this.props.activePage==='MyMusic'?<MyMusic audio={this.props.audio} /> : null}
                {this.props.activePage==='Artist'?<Artist /> : null}
                
            </div>
        );
    }
    
}

const styles = {
    screen : {
        height : '50%',
        width : '95%',
        borderRadius : '12px',
        backgroundColor : 'white',
        border : '2px solid black',
        marginTop : '1rem'
    }
}

export default Screen;