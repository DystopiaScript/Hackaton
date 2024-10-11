import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {collection, getDocs, getDoc, deletDoc} from "firebase/firestore";
import {db} from "../firebaseConfig/firesbase";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);



const Show = () => {
    //1 - configuramos los hooks

    const [Services, setServices] = useState([]);

    //2 - referenciamos la DB firestore

    const ServicesCollection = collection(db, "Services");

    //3 - Funcion para mostrar Todos los docs

    const getServices = async () => {
        // const data = await getDocs(collection(ServicesCollection));
        const data = await getDocs(ServicesCollection)
        console.log(data.docs)
    };
        //6 - Usamos useEffect
        useEffect(() => {
            getServices();
        }, []);
   
    return (
        <div>
        <h1>Show</h1>
        </div>
    );
    };
    export default Show;