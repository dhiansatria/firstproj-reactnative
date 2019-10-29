import React, { Component } from 'react';
import { Image } from 'react-native';

export default class ImageApp extends Component{
    render() {
        let img ={
            url:'https://cdn2.tstatic.net/kaltim/foto/bank/images/berikut-kumpulan-ucapan-selamat-hari-sumpah-pemuda-fix.jpg'
        }
        return(
            <Image source={img} />
        );
    }

}