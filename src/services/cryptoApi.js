import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const CryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'a619efdd92mshf7e22cb84a32fabp1b9877jsn496116fddf65'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: CryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () =>  createRequest('/coins')
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;