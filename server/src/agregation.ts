import FetchBuilder from "./parser_providers";


async function agregation(city:string){
    const fetch_builder = new FetchBuilder(city);
    const result = await fetch_builder.fetch_consructor("provider1").then(f1 => {
        return f1});
    console.log(result)
    return await result;
}

 export default agregation;