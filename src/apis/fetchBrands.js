import React,{Component} from 'react';



class Brands {
    fetchBrands(id){
      return fetch('http://hani2.fustech.net/api/brandsByCats/'+id,{
            method:'GET',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            }
        })
    }
}


export default Brands;