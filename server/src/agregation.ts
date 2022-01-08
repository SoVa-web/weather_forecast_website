import FetchBuilder from "./parser_providers";


const common_object = {

}

async function Agregator(city:string){
    console.time('FirstWay');
    const fetch_builder = new FetchBuilder(city);
    let arr_keys = ["provider1", "provider2", "provider3", "provider4"]
   try{
    const res = await Promise.all(arr_keys.map(key => fetch_builder.fetch_consructor(key)))
    console.timeEnd('FirstWay');
    return res;
   }catch(err){
       console.log(err)
       return {};
   }
}


function agregation(){

}


export default Agregator;