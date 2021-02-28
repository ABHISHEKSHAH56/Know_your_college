import * as api from '../api/index.js';


//
export const  getcollege =()=>async (dispatch)=>{
        try {
                const {data}=await api.fetchcollege();
     
                dispatch({
                        type:'FETCH_ALL',
                        payload: data
                })
                
        } catch (error) {
                console.log(error.message)
                
        }
}


export const  getone =(id)=>async (dispatch)=>{
        try {
                const {data}=await api.fetchone(id);

                dispatch({
                        type:'OVERVIEW',
                        payload: data
                })
                
        } catch (error) {
                console.log(error.message)
                
        }
}


export const  getfees =(id)=>async (dispatch)=>{
        try {
                const {data}=await api.fetchfees(id);

               
                dispatch({
                        type:'FEES',
                        payload: data
                })
                
        } catch (error) {
                console.log(error.message)
                
        }
}


export const  getcourse =(id)=>async (dispatch)=>{
        try {
                const {data}=await api.fetchcourse(id);
              
                dispatch({
                        type:'COURSE',
                        payload: data
                })
                
        } catch (error) {
                console.log(error.message)
                
        }
}

export const  getcutoff =(raw)=>async (dispatch)=>{
        try {
                const {data}=await api.fetchcutoff(raw);
                
                dispatch({
                        type:'CUTOFF',
                        payload: data
                })
                
        } catch (error) {
                console.log(error.message)
                
        }
}
