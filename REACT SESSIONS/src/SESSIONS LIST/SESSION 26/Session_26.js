                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
import './App.css';

// REACT
  // when mobile phones where booming, at that time the websites all were designed only for pc's  
  // mobile phones where not that much powerfull as compared to pc's
  // so inorder to optimize the websites for the mobiles REACT is used

    // mobile phones at that time didnt had,
      // powerfull ram to handle the websites
      // battery power 
      // network speed was poor
        // so the data to load a website has to reduced inorder for the mobile phones to handle the websites
        // this process was made easy by the REACT

  // React was introduced by the Facebook

  // OPTIMIZATION METHODS:                                                                                                                                                                                                                              
    // SPA:                                                     
      // SPA - Single Page Application                                                                
      /* initially webpages where multiple page application, where by clicking a option inside the webpage (like about ot contact)
            an another HTML page is loaded from the server. this same process happens every time */
      /* incase of SPA, intially only one HTML page is loaded which is index.html after that we only change the contents inside the HTML page using AJAX(Asynchronus) fetch call
            which return an JSON data  */     
      // sometimes most of the content will be same in all the HTML page of an website in that case also it is very much usefull.
        /* in that case only the contents which has to be change is changed using the fetch call so that we dont need to load another
              HTML page and also refresh of the page will not happen. */
        /* this will reduce the data being dowloaded again and again is eliminated and browser is also need not to render the HTML
              page again and again so that RAM is not utilized more also battery power is saved. */
      // so all the three problems above mentioned is overcomed by using the REACT

    // REUSABILTY
      // React Components is used to reuse the patterns that are repeating in an website
      // components are same like function
      // the function has JS only, but components has JSON, HTML and CSS
      // same like function it can be reused n number of times

  // OPTIMIZING THE PICTURES
    // in industry webp extension a used for the pictures so that we can shrink the size of the image while not losing any quality 

export default function App() {
  // DRY CODE
  const names = ["Ragavendiran", "Akshaya", "Kiran", "Karthick"]; 
    // array is created to make it a dry code

  // DIFFERENT PICTURE FOR EACH NAME
  const profileDetails = [
    {name: "Ragavendiran", url: "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
    {name: "Akshaya", url: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg"},
    {name: "Kiran", url: "https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"},
    {name: "Karthick", url: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"}
  ] 

  return (
    <div className="App">   
    <h1>CREATING COMPONENT</h1>    
      <Eg1 />
        {/* below created component is called here. it can also be called multiple time */}
      <Eg1 />   
        {/* created component can be called n number of times   */}
   
    <h1>PROPS</h1>
      <Eg2 name = "Ragavendiran"/>        
      <Eg2 name = "Akshaya"/>
      <Eg2 name = "Kiran"/>
        {/* we can call "Eg2" component with different name as an prop to it. */}
    
    <h1>DESTRUCTURING</h1>
      <Eg3 name = "RAGAV" />
    
    <h1>STYLING</h1>
      <Eg4 name = "RAGAV" />
    
    <h1>DRY CODE</h1>
      {names.map(nm => <Eg5 name = {nm} />)}
        {/* the array that is created is looped through map method */}     
    
    <h1>ADDING PICTURE</h1>   
    <Eg6 />
    
    <h1>DIFFERENT PICTURE FOR EACH NAME</h1>    
      {profileDetails.map(nm => <Eg7 name={nm.name} url={nm.url} />)}
        {/* for the prop in "Eg7" name and url keys and their value is added */}
    </div>
  );
}    
  // this is the first component or root component created
  // above codes are the component definition and it will be called in the "index.js"

  // the above format is not JS. it is JSX
  // JSX - JavaScript XML. it is colloquially called by developers as JS extended
  // browser doesnt understand React, browser can only understand HTML, JS, and CSS
  // so inorder for the browser to understand react we use a translator called webpack and babel
  // which converts the react JSX format into JS

  // WHY CLASS ATTRIBUTE IS DENOTED AS CLASSNAME IN THE ABOVE DIV:
    // In the end the JSX format is converted into JS. so in JS "class" is a reserved keyword thats why we use "className" instead to specify the class

  // the above code may look like HTML but it is converted into JS in the end
    // so the react is writing the HTML part using the JS DOM methodes for us using the JS
  // we dont use DOM methods in the React
  
  // in the index.html we have a "no Script" tag which is used to show a message "enable JS" when the user has disabled JS while using reader mode    

  // we also have a index.js
    // which is to bootstraping(starting) the react app      

    // ReactDOM.render(
        // render is a method responsible for starting the app 
    //   <React.StrictMode>
    //     <App />
              // the first component that is created is used here
              // incase of function we say it is called but in the case of component in react we say it is used                      
    //     <App />
              // we can also call the root component again
              // which will render the contents of root one more time
              // any change in root component will change the here also in both the call         
    //   </React.StrictMode>,
    //   document.getElementById('root')
            // we are selecting the "root" class of div from the index.html
            // it is the only place we use the DOM method in react
            // so we are saying inside the "root"render the "app"
    // );
      // above is the code we have in index.js

    // we have two types of components
      // class component
        // this is used before 2017
      // function component
        // after 2017 we are not using class component instead we use function component


// CREATING A COMPONENT
  // component name should always start with a capital letter
  // it should return JSX

  function Eg1() {
    const name = "Ragav";
    return (
      <div>        
        <h3>Hello {name}!!!</h3>  
          {/* {} => this is called template syntax or interpolation(substitution) */}
      </div> 
    )
  }

  // this above component is called in the root component which will be called in the "index.js"
    // which will be rendered in the div element with class root

// TO HAVE THE NAME AS AN ARGUEMENT(HERE ARGUEMENT IS CALLED AS PROPS) TO THIS COMPONENT, SO THAT THE NAME CAN BE CHANGED EVERY TIME THIS COMPONENT IS CALLED
  function Eg2(props) {
      // "props" is an alternative name for arguement in react app which is an object
      // it need not to be "props" always. it can be changed same like arguement in the function
    console.log(props)   
    return (
      <div>       
        <h3>Hello {props.name}!!!</h3>    
          {/* since "props" is an object and name is a key in that object we have to denote it like above */}
      </div> 
    )
  }

// DESTRUCTURING THE PROPS OBJECT
  function Eg3({name}) {  
      // since the "props" is an object, we can destructure it  
    return (
      <div>     
        <h3>Hello {name}!!!</h3>       
      </div>
    )
  }

// TO STYLE
  function Eg4({ name }) {    
    return (
      <div>
        <h3 className="userName">Hello {name}!!!</h3>          
      </div>
    )
  }

// TO ADD LINKS TO FOR STYLING FROM EXTERNAL SOURCE
  // check "index.html" just above the head

// TO MAKE THE Eg2 DRY CODE
  // we can see that we are calling the Eg2 component again and again to print different name 
  // instead we can simply add all the names into an array and loop through it to print all the names inside that array
    function Eg5(props) {           
      return (
        <div>
          <h3>Hello {props.name}!!!</h3>          
        </div>
      )
    }

// TO ADD PICTURE
  function Eg6() {
    return (
      <div>
        <img src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
        <h3>RAGAV</h3>
      </div>
    )
  }

// TO HAVE DIFFERENT PICTURE FOR EACH NAME

    function Eg7({name, url}) {    
        // destructurig the object
      return(
        <div>
          <img src= {url} alt={name}/>
          <h3>{name}</h3>
        </div>
      )
    }

// TO DEPLOY IN NETLIFY
    // * cut the server
    // * type "npm run build" in the termianl
    // * then u will get a "build" folder in the app folder
    // * then right click the build folder and select "reveal in file explorer"    
    // * from the file explorer drag and drop build folder in netlify    

// TO PUT SOURCE CODE IN GITHUB
    // * go to source control
    // * click on the "+" button (stage all changes) in the "changes" field
    // * then type any message
    // * then click the "publish changes" button
    // * choose private or public repositories
