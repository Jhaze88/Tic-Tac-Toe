import React from 'react';
import '../App.css';


  
    //1 Componente Sqaure (figlio di Board)
export const Square = (props) => {
  
      // const [click,setClick] = useState(null);
      // console.log(click);
  
    return (
        <div>
            <button className='square' 
                    onClick={props.toogleClick}>
                      {props.value}
            </button> {/*una volta passato il dato "i" lo faccio visualizare*/}
          </div>
    )
};

export default Square;