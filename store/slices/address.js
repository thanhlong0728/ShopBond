import {createSlice} from '@reduxjs/toolkit'


const addressSlice = createSlice({
    name : 'Address',
    initialState: {
        items : []
    },
    reducers: {
        addAddress : (state, action) =>{
            const {name,phone,address} = action.payload
            return {
                ...state,
                items: {
                    name: name,
                    phone: phone,
                    address: address
                }
            }
            
        }
    },
    
})
export const {addAddress} = addressSlice.actions
export default addressSlice.reducer