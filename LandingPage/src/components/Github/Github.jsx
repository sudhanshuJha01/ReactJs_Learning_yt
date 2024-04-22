import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data , setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/sudhanshujha01')
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
  return (
    <div className='text-center text-4xl bg-orange-500 mx-16 my-16'>Github Followers :{data.followers}
    <img src={data.avatar_url} alt="GitHub" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader=async ()=>{
    const response = await fetch('https://api.github.com/users/sudhanshujha01');
    return response.json();
}