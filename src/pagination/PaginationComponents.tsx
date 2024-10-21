import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";
type PaginationProps = {
    flag: boolean
}
const PaginationComponents:FC<PaginationProps> = ({flag}) => {
    const [query , setQuery] = useSearchParams({page: '1'})

    const onclickPrevButton = ()=>{
        const page = query.get('page')
        if(page && +page>1){
            let currentPage = +page;
            currentPage--;
            return setQuery({page: currentPage.toString()});
        }
    }
    const onclickNextButton = ()=>{
        const page = query.get('page')
        if(page){
            let currentPage = +page;
            currentPage++;
             return setQuery({page: currentPage.toString()});


        }
    }

    return (
        <div>
                 <button onClick={onclickPrevButton}>Prev</button>
                 <button onClick={onclickNextButton } disabled={flag}>Next</button>
        </div>
    );
};

export default PaginationComponents;