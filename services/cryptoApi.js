import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key':  '438ac21e2amshe1da213db40dc8ap194a70jsn37967a32a1df',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })


export const cryptoApi = createApi({
     reducerPath: 'cryptoApi',
     baseQuery: fetchBaseQuery({ baseUrl }),
     endpoints: (builder) => ({
         getCryptos: builder.query({
             query: (count) => createRequest(`/coins?limit=${count}`),
         }),
        getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
         getExchanges: builder.query({
            query: () => createRequest(`/exchanges`),
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod }) => createRequest(`/coin/${coinId}/history/${timePeriod}`),
        })
     })

});

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery,useGetCryptoHistoryQuery, useGetExchangesQuery
} = cryptoApi;