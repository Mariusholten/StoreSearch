import Search from "@/components/searchBar";

export async function VinApi() {
    const url = `${process.env.BUTIKKER_URL}`;
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Cache-Control': 'no-cache',
            'Ocp-Apim-Subscription-Key':`${process.env.BUTIKKER_APP_API_KEY}` ,}
        });

    if(!res){
        throw new Error('Failed to fetch data');
    }

    const butikker = await res.json();

    return butikker;
}


// Search bar displaying stores
export default async function SearchContainer(){
    const data = await VinApi();

    return <Search storeData={data} />
}