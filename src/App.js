import React from 'react';
import axios from 'axios';
// material ui
import Typography from "@material-ui/core/Typography";
import MyMediaCard  from './MyMediaCard';
const PUBLIC_KEY = 'YOUR_GIPHY_KEY';
const BASE_URL = '//api.giphy.com/v1/gifs/search?';
const LIMIT = 1;
const RATING = 'pg';

/*
function App() {
  return (
    <React.Fragment>
      <Typography align ="center" variant="h2" gutterBottom>
        Mi gifcp
      </Typography>
    </React.Fragment>
  );
}
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /*imageURL: '',*/
      //imagesURLs :  ['','','','','','','','','','']
      imageURL0: '',
      imageURL1: '',
      imageURL2: '',
      imageURL3: '',
      imageURL4: '',
      imageURL5: '',
      imageURL6: '',
      imageURL7: '',
      imageURL8: '',
      imageURL9: ''
    };
  }

  data() {
    return {
      gif: [], //this is to hold the whole array (optional)
      gifSrc:'', //this is required to render the gif in your img src
      search: '', //this v-model will be the text the user puts in the search box
      valid: '' //this is for vuetify markup to validate text was entered (optional)
    }
  }
  
  componentDidMount() {
    //axios.get('https://dog.ceo/api/breeds/image/random')
    //axios.get('www.infonavit.gob.mx')
    /*axios({
      url: 'https://dog.ceo/api/breeds/list/all',
      method: 'get'
    })*/
    console.log("aqui ando conectandome....");
    axios.get('//api.giphy.com/v1/gifs/search?'+'q='
                      + this.search 
                      + '&limit='+ 10 
                      + '&rating=' + 'pg' 
                      + '&api_key=' 
                      + 'u6pI19klRmzMPVCyQ58vOt60wcuZm5L2')
      .then((res) => {

      this.gif = res.data;
      console.log("el arreglo de gifs " + this.gif);
      this.gifSrc = res.data.data[0].images.original.url  
         
      
      this.setState({ imageURL:  res.data.data});

      this.imagesURL0 = res.data.data[0].images.original.url;
      this.imagesURL1 = res.data.data[1].images.original.url;
      this.imagesURL2 = res.data.data[2].images.original.url;
      this.imagesURL3 = res.data.data[3].images.original.url;
      this.imagesURL4 = res.data.data[4].images.original.url;
      this.imagesURL5 = res.data.data[5].images.original.url;
      this.imagesURL6 = res.data.data[6].images.original.url;
      this.imagesURL7 = res.data.data[7].images.original.url;
      this.imagesURL8 = res.data.data[8].images.original.url;
      this.imagesURL9 = res.data.data[9].images.original.url;
      
      // THIS LINE IS CRITICAL DO NOT DELETE PLEASE FOR ANY REASON JUST DONT DONT DELETE IT !!!!!
      this.setState({ imageURL:  res.data.data});


     

      console.log("el contenido de imageURL0 " + this.imageURL0);

      console.log('a versh que salio... ' + this.gifSrc/*this.gif*/);  
//      var i;
//      for(i=0; i<res.data.data.length; i++) {

//        console.log('veamos la longitud ' + res.data.data[i].images.original.url);
//      }
      console.log(res);

      
    })
    /*.then(response => {
      console.log(response.data);
    })*/
    .catch(error => {
      console.log(`Unable to fetch data: ${error}`);
    });
  }

  render() {
    //console.log(this.state);
    return (
    ///console.log('como voy como ando ya me conecte o no');
    //const { imageURL } = this.state;
    //return Object.keys(imageURL).map(images => MyMediaCard(images.original.url));
    <React.Fragment>
      <Typography align ="center" variant="h2" gutterBottom>
        My GIFCP
      </Typography>
      {/*<MyMediaCard
        param={imageURL}
      />*/}
      <div>
      <img src={this.imagesURL0 } />
      <img src={this.imagesURL1 } />
      <img src={this.imagesURL2 } />
      <img src={this.imagesURL3 } />
      <img src={this.imagesURL4 } />
      <img src={this.imagesURL5 } />
      <img src={this.imagesURL6 } />
      <img src={this.imagesURL7 } />
      <img src={this.imagesURL8 } />
      <img src={this.imagesURL9 } />
      </div>
      
    </React.Fragment>
    );
 }

}

export default App;


/*
<React.Fragment>
<Typography align ="center" variant="h2" gutterBottom>
    My GIFCP
</Typography>
<MyMediaCard
param={imageURL}
/>
</React.Fragment>



*/