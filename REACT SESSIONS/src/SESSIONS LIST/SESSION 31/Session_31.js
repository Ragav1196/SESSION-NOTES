import "./App.css";
import { MoviesListData } from "./SESSIONS LIST/SESSION 31/MoviesListData";


export default function App() {
  return <MoviesListData />;
}

// TO EDIT MOVIES

// TO GO ONE STEP BACK IN THE BROWSER USING BUTTON

// CONTEXT
/* 
      Passing app component to its all child component which can be used by those child if needed. this is done using context
      normally we pass component using props through each child of the app component to whose grand child component needs the app component
        we cant directly pass to the grand child without pasing to the child component this is called as props drilling.
          props drilling is not a efficient process
          even if the child component is not going to use a component from app component but if its app grand child component need a component from app then its child has to recieve the component inorder to pass to it own child component
          solution for this is Context
       
      CONTEXT WORKING:
        in this case we have a publisher and a subscriber. 
        publisher is the guys from whom we need the component
        subscriber is the guy for whom the component is needed
        
        the publisher will pass its component to the context guy it is like a gloabal variable
        this context is availble for all the child , grandChild etc.,
        so who ever need the component in the contxt will get that directly. they are the subscriber

        beauty of this method is the subcriber can also change the component in the context

        STEPS INVOLVED IN CREATNG CONTEXT:
          CREATING CONTEXT:
            context has to be outside of the component        
          PUBLISHER:
          SUBSCRIBER:
 */