export default function page({params}:{params:{id:String}}){
    const {id}=params;
    return <>
    <h3 className="text-center"></h3>
        <p>User Profile: {id}</p> 
        </>
}