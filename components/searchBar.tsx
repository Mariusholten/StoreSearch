"use client"
import {useEffect, useState} from 'react';
import Card from './card';

type Store = {
    storeId: number;
    storeName: string;
    address: {
        street: string;
        city: string;
    };
    email: string;
}

export default function Search(props: {storeData: Store[]}){
    const data = props.storeData;
    const [text, setText] = useState('');
    const [filteredCards, setFilteredCards] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        const allCards = data.map((element) => (
            <Card
                key={element.storeId}
                name={element.storeName}
                address={element.address.street}
                city={element.address.city}
                email={element.email}
            />
        ));
        setFilteredCards(allCards);
    }, [data]);


    const filterButikker = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setText(value);
        const newFilteredCards = data.filter((element) => element.storeName.toLowerCase().includes(value.toLowerCase()))
            .map((element) => (
                <Card
                    key={element.storeName}
                    name={element.storeName}
                    address={element.address.street}
                    city={element.address.city}
                    email={element.email}
                />
            ));
        setFilteredCards(newFilteredCards);
    }
    
    return (
        <>
            <div className='searchBar'>
                <input
                    type='text'
                    value={text}
                    placeholder='Søk etter butikk...'
                    className='peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50'
                    onChange={filterButikker} />
            </div>
            <div className='cardLayout'>
                {filteredCards}
            </div>
        </>
    )
}