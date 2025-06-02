import { useEffect, useMemo, useState } from "react";
import getmeals from "../../service/menuService/Meals";
import Notify from "../../notification";
import "../Menupage/menu.css";
import Banner from "../../banner";
import { useNavigate} from "react-router";
import Header from "../../header";

const MenuPage = () => {
 const navigate = useNavigate();
  const [status, setstatus] = useState("loading");
  const [meals, setmeals] = useState([]);
// ******************************************************************************
const [shownotifiation, setnotification]=useState("")

  // *****************************************************************
const isloading = status === "loading";
  const isdone = status === "done"

  const hasmeals = isdone && meals.length !== 0;

  const nomeals = isdone && meals.length === 0;

  const iserror = status === 'error';

// use memo ka syntex same hota kyu ki yee 2 argument leta hai (ikk fuunctiojn or dusra array leta hai )

// pass krna hota hai 
/*why we use memo  *****use memo hooks)

we use to optimize the performance of react appplication ,

******mtlb ki jab ikk hi calculation baar baar hota hai toh usememo whi result 
dega jo phele baar diua tha taaki optimization  ho sake*****



*/
const melaskoformat = useMemo(()=>{
  // console.log("rendering");
  return meals.map((iteam) => {
    return {
      idMeal: iteam.idMeal,
      title:iteam.strMeal,
    };
  });
},[meals])






  
  // console.log(iserror)

  /*
  abb use callback ka use whe pe use krna hai  jah pe 
  hmara coed 100 line ka ho yani function hmara 100 line ka ho  
  
  */ 
 const fetchmeals =  async () => {
   try {
     const data = await getmeals()
     if (data) {
       setmeals(data)
       // console.log(data);/*data is coming */
      }
      setstatus("done");
    }
    catch (e) {
      setStatus('error')
    }
  }
  
  
  
  // *****************************************************
  useEffect(() => {
    fetchmeals();
  }, []);
  const onclosenoti =()=>{
    setnotification('')
  }
  
  useEffect(()=>{
    setnotification(status);
  },[status])
  
  
  useEffect(()=>{
    setTimeout(()=>{
        onclosenoti()
      },2500)
    },[])
    // *********************************************************
    const onchat = ()=>{
      navigate("/chat");
    }
    
    return (
      <div className="menu">
        <Header/>
      <h1>Recipes Corner</h1>
      {isloading && <h2>Loading....</h2>}
      {iserror && <h2>Errors_data....</h2>}
      {hasmeals && melaskoformat.map((item) => (<div key={item.idMeal}><p>{item.title || item.title}</p>

        </div>
      ))} 
      {nomeals && <h2>No_meals</h2>}
      <button  onClick={onchat}>Take to Support team </button>

      {  shownotifiation && (
       <Notify message={shownotifiation}close_notifi={onclosenoti}  />
     )}
{/* <Banner/> */}


    </div>
  );
};

export default MenuPage;


