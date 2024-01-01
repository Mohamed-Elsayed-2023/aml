import React from 'react';


const Content = ({pag,skales}) => {
       
   
     
       return (
              <div  style={{background:"red" ,height:"300px"}}  >

                     content:"{pag}
                     <br/>
                    

                     {skales !=='' ? <p>skales:{skales} </p>  :null}
                  
                    


                   
              </div>
       );
}

export default Content;
