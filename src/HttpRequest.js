export class HttpRequest{

    constructor(){

    }
    function gifRequest(){
            
        axios.get('//api.giphy.com/v1/gifs/search?'+'q='
        + this.search 
        + '&limit='+ 10 
        + '&rating=' + 'pg' 
        + '&api_key=' 
        + 'u6pI19klRmzMPVCyQ58vOt60wcuZm5L2')
            .then((res) => {
                this.gif = res.data;
                this.gifSrc = res.data.data[0].images.original.url
                //console.log('a versh que salio... ' + this.gifSrc/*this.gif*/);  
                var i;
                for(i=0; i<res.data.data.length; i++) {

                console.log('veamos la longitud ' + res.data.data[i].images.original.url);
                }
                console.log(res);
                }).catch(error => {
                    console.log(`Unable to fetch data: ${error}`);
            });
   }

}