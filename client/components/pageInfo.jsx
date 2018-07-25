import React from 'react';   
import axios from 'axios'; 
import Summary from './Summary.jsx'

/*const infoStyle = {
  float: 'left',
  width: '50%',
  height: '50%',
  borderStyle: 'solid',
  borderWidth: '2px',
  textAlign: 'center'
};
*/
class PageInfo extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {      
      cateogry : 'entire house', 
      name: 'Studio Guest House', 
      city: 'South Lake Tahoe',  
      guest_num: 1, 
      bedroom_num: 2, 
      bath_num: 3, 
      description: 'testing description', 
      more_description: 'testing more_description',  
      house_rules: 'testing house_rules',  
      more_rules: 'testing more rules',  
      cancel_policy: 'testing cancel_policy',  
      more_cancel_policy: 'testing more_cancel_policy',  
      sleeping_arrangement: 'tesing sleeping_arrangement', 
      amenities: 'testing amenities'

    
    }
  }
  componentDidMount(){  
    this.getPageInfo(1)  
  }
  

  getPageInfo(roomid) { 
    axios.get('/room/' + roomid) 
      .then(results => console.log('pageinfo:', results.data)) 
      .catch(err => console.log('err fetching pageinfo:', err))  

  }

   
   render() {  
     return (    
     <div> 
       <Summary category={this.state.cateogry} name={this.state.name} city= {this.state.city} guest_num={this.state.guest_num} bedroom_num= {this.state.bedroom_num} bath_num= {this.state.bath_num}/>  
     </div> 
     );      
   }     
 }

 export default PageInfo 
