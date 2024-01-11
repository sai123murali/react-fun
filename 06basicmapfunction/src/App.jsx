import Handle from "./Handle";
import Handleseperate from "./Handleseperate";

const items=[
  {id:1, isflower:true, name:'rose'},
  {id:2, isflower:false, name:'lemon'},
  {id:3, isflower:true, name:'jasmine'},
  {id:4, isflower:false, name:'tea'},
];

function App(){

  const itemsList=items.map(item=>

    <li 
    key={item.id}
    style={{color: item.isflower? 'pink':'red'}}
    >
      {item.name}

    </li>

  )

  return(
    <>
    <ul>{itemsList}</ul>
    <Handle/>
    <Handle/>
    <Handleseperate/>
    
    </>
  )

  }

  
export default App