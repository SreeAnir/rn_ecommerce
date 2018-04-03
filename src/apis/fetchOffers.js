import React,{Component} from 'react';



class Offers {
    fetchOffers(id){
        return fetch('http://hani2.fustech.net/api/offersByBrandsTwo/'+id,{
            method:'GET',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            }
        })
    }
}


export default Offers;