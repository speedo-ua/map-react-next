import { createSlice } from "@reduxjs/toolkit";

export const changeStates = createSlice({
    name: 'changePage',
    initialState: {
        isLoading: true,
        pageValue:'Map',
        transport: {
            transportType: 'All',
            transportValue: 'All',
        },
        icon: null,

    },

    reducers:{
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },

        setPage: (state, action)=> {
            state.pageValue = action.payload;
        },

        setTransportType: (state, action)=> {
            state.transport.transportType = action.payload;
        },

        setTransport: (state, action)=> {
            state.transport.transportValue = action.payload;
        }, 
        setAllTransport: (state) =>{
            state.transport.transportType = 'All';
            state.transport.transportValue = 'All';
        },
    },
})


export const {setLoading, setAllTransport, setPage, setTransportType, setTransport} = changeStates.actions;

export default changeStates.reducer