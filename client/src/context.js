import React, { Component } from 'react';
import axios from 'axios';

const DataContext = React.createContext();
//initalising the data provider and consumer

class DataProvider extends Component {

    state = {
        isLoading : false,
        data:'',
        observerData:{},
        wardrobeData:{},
        pax1Data:{},
        pax2Data:{},
        pax3Data:{},
        pax4Data:{},
        pax5Data:{},
        pax6Data:{},
        pax7Data:{},
        totalPax:[
            {
                field : "compt1_nopax",
                numPax :0,
                errMssge :""
            },
            {
                field : "compt2_nopax",
                numPax :0,
                errMssge :""
            },
            {
                field : "compt3_nopax",
                numPax :0,
                errMssge :""
            },
            {
                field : "compt4_nopax",
                numPax :0,
                errMssge :""
            },
            {
                field : "compt5_nopax",
                numPax :0,
                errMssge :""
            },
            {
                field : "compt6_nopax",
                numPax :0,
                errMssge :""
            },
            {
                field : "compt7_nopax",
                numPax :0,
                errMssge :""
            }
        ],
        totalNumberOfPax:{},
        baggfwdData:{},
        baggaft1Data:{},
        baggaft2Data:{},
        zfData:[
            {
                field : "owe_weight",
                weight :  17980,
                index : 90.5,
                errMssge :""
            },
            {
                field : "observer_weight",
                weight : 0,
                index : 0,
                errMssge :""
            },
            {
                field : "wardrobe_fwd_weight",
                weight : 0,
                index : 0,
                errMssge :""
            },
            {
                field : "compt1_nopax",
                weight :0,
                index : 0,
                errMssge :""
            },
            {
                field : "compt2_nopax",
                weight :0,
                index : 0,
                errMssge :""
            },
            {
                field : "compt3_nopax",
                weight :0,
                index : 0,
                errMssge :""
            },
            {
                field : "compt4_nopax",
                weight :0,
                index : 0,
                errMssge :""
            },
            {
                field : "compt5_nopax",
                weight :0,
                index : 0,
                errMssge :""
            },
            {
                field : "compt6_nopax",
                weight :0,
                index : 0,
                errMssge :""
            },
            {
                field : "compt7_nopax",
                weight :0,
                index : 0,
                errMssge :""
            },
            {
                field : "bags_comptfwd_weight",
                weight :0,
                index : 0,
                errMssge :""
            },
            {
                field : "bags_comptaft1_weight",
                weight :0,
                index : 0,
                errMssge :""
            },
            {
                field : "bags_comptaft2_weight",
                weight :0,
                index : 0,
                errMssge :""
            }
        ],
        zeroFuelWeight:{},
        zeroFuelWeightIndex:{},

        fobData: {},
        rampData: {},    
        taxiFuelData: {},
        takeOffData:{},

        estimatedFuelUsedData : {},
        landingData:{},       
        allIndices:[

        ],

        totalIndex:{}
              
    }






    onChange = (e) =>{
        const {name, value} = e.target
        localStorage.setItem( name, value );
    }





    calcTotaPax = () =>{
        const tpax = this.state.totalPax;
        console.log(tpax);
        const flattened = tpax.reduce(
            (arr, elem) => arr.concat(elem.numPax), []
            );        
        console.log(flattened);
        const sumUp = flattened.reduce((a,b) => a+b, 0);
        console.log(sumUp);
        this.setState({
            totalNumberOfPax : {
                    sumUp                
            }
        })
        console.log(this.state.totalNumberOfPax);
    }






    calcZfWeight = () =>{
        const zfw = this.state.zfData;
        console.log(zfw);
        const sumUp = zfw.reduce(
            (arr, elem) => arr.concat(elem.weight), []
            );        
        console.log(sumUp);
        const zeroFuelWeight = sumUp.reduce((a,b) => a+b, 0);
        console.log(zeroFuelWeight);
        if( zeroFuelWeight > 25855 ){
            this.setState(()=>{
                return{ zeroFuelWeight :{
                    "weight": zeroFuelWeight,
                    "message": 'Zero Fuel Weight is Too High'
                } }
            })
        }else{
            this.setState(()=>{
                return{ zeroFuelWeight :{
                    "weight": zeroFuelWeight,
                    "message": 'Everything looks OK'
                } }
            })
        }
    }




    calcZfIndex = () =>{
        const zfIndex = this.state.zfData;
        console.log(zfIndex);
        const sumUp = zfIndex.reduce(
            (arr, elem) => arr.concat(elem.index), []
            );        
        console.log(sumUp);
        const zeroFuelIndex = sumUp.reduce((a,b) => a+b, 0);
        console.log(zeroFuelIndex);
        const zfwIndex = zeroFuelIndex.toFixed(1)
        this.setState(()=>{
            return{ zeroFuelWeightIndex :{
                "index" : zfwIndex ,
                "message": 'The zero fuel Index was calculated successfully, everything looks OK'
            } }
        })
    }






    handleTaxiFuel = (e) =>{
        this.onChange(e);
        const tFW = localStorage.getItem('tf_weight');
        const weight = parseInt(tFW);
        axios.post('/api/fuel', {
            weight
        }).then((fuelData)=>{
            const fuel = fuelData.data;
            const { index } = fuel;
            const rampW = this.state.rampData.weight
            console.log(rampW);
            if( !rampW || rampW !== '' || rampW === 0 ){
                this.setState(()=>{
                    return { taxiFuelData:{
                        "weight" : tFW,
                        "index" : index
                    } }
                })
                console.log(this.state.taxiFuelWeight);
                const rampData = this.state.rampData;
                const { weight, index : rindex } = rampData;
                const rweight = parseInt(weight);
                const takeOffWeight = rweight - tFW;
                const takeOffIndex = rindex - index;
                console.log(takeOffIndex);
                this.setState(()=>{
                    return{ takeOffData: {
                        "weight" : takeOffWeight,
                        "index" : takeOffIndex
                    } }
                })
                console.log(this.state.takeOffData);        
                localStorage.removeItem('tf_weight');
            
            }else{
                this.setState(()=>{
                    return{ takeOffData: {
                        "weight" : 0,
                        "index" : 0,
                        "message" : 'Ramp information is not set yet'
                    } }
                })
                console.log(this.state.takeOffData);
                localStorage.removeItem('tf_weight');
            }
        })    
        
    }






    handleFused = (e) =>{
        this.onChange(e);
        const fuelUsed = localStorage.getItem('estfuelused_weight');
        this.setState(()=>{
            return{ estimatedFuelUsed:{
                "weight" : fuelUsed
            }}
        })

        const fuelusedWeight = this.state.takeOffData;
        const { weight, index } = fuelusedWeight;
        console.log(index);
        const toffWeight = parseInt(weight);
        const landingWeight = toffWeight - fuelUsed;
        this.setState(()=>{
            return{ landingData:{
                "weight" : landingWeight,
                "index" : index
            } }
        })

        localStorage.removeItem('estfuelused_weight');
    }



    
    handleObserver = (e) =>{
        this.onChange(e);
        const weight = localStorage.getItem('observer_weight');
        axios.post('/api/observer', {
            weight
        }).then((observerData) => {
            const obs = observerData.data;
            const status = observerData.status;
            if( status === 200 ){
                console.log(obs);
                const { weight, index } = obs;
                this.setState({ 
                    observerData : obs           
                })
                const zfwIndex = this.state.zfData.findIndex(element => element.field === "observer_weight" );
                let newArray = [...this.state.zfData];
                newArray[zfwIndex] = {...newArray[zfwIndex], weight}
                this.setState({
                    zfData: newArray,
                    });
                this.calcZfWeight();

                const zfiIndex = this.state.zfData.findIndex(element => element.field === "observer_weight" );
                let finalArray = [...this.state.zfData];
                finalArray[zfiIndex] = {...finalArray[zfiIndex], index}
                this.setState({
                    zfData: finalArray,
                    });
                this.calcZfIndex();

                localStorage.removeItem('observer_weight');
                }
            
        })
    }





    handleWardrobe = (e) =>{
        this.onChange(e);
        const weight = localStorage.getItem('wardrobe_fwd_weight');
        axios.post('/api/wardrobe', {
            weight
        }).then((wardrobeData) => {
            const ward1 = wardrobeData.data;
            console.log(ward1);
            const { weight, index } = ward1;
            this.setState({ 
                wardrobeData : ward1           
            })

            const zfIndex = this.state.zfData.findIndex(element => element.field === "wardrobe_fwd_weight" );
            let newArray = [...this.state.zfData];
            newArray[zfIndex] = {...newArray[zfIndex], weight}
            this.setState({
                zfData: newArray,
                });
            this.calcZfWeight();

            const zfiIndex = this.state.zfData.findIndex(element => element.field === "wardrobe_fwd_weight" );
                let finalArray = [...this.state.zfData];
                finalArray[zfiIndex] = {...finalArray[zfiIndex], index}
                this.setState({
                    zfData: finalArray,
                    });
            this.calcZfIndex();

            localStorage.removeItem('wardrobe_fwd_weight');
        })
    }






    handlePax1 = (e) =>{
        this.onChange(e);
        const pax = localStorage.getItem('compt1_nopax');
        axios.post('/api/pax1', {
            pax
        }).then((pax1Data) => { 
            const pax1 = pax1Data.data
            const status = pax1Data.status;
            console.log(status)
            if( status === 200 ){
                console.log(pax1);
                this.setState(()=>{
                    return { 
                        pax1Data : pax1
                    }
                })
                const { pax, index, weight, message } = pax1;
                console.log(pax)
                const paxIndex = this.state.totalPax.findIndex(element => element.field === "compt1_nopax" );
                const freshArray = [...this.state.totalPax];
                freshArray[paxIndex] = {...freshArray[paxIndex], numPax:pax}
                this.setState({
                    totalPax: freshArray,
                    });
                this.calcTotaPax();

                const zfwIndex = this.state.zfData.findIndex(element => element.field === "compt1_nopax" );
                let newArray = [...this.state.zfData];
                newArray[zfwIndex] = {...newArray[zfwIndex], weight, errMssge:message}
                this.setState({
                    zfData: newArray,
                    });
                this.calcZfWeight();

                const zfiIndex = this.state.zfData.findIndex(element => element.field === "compt1_nopax" );
                let finalArray = [...this.state.zfData];
                finalArray[zfiIndex] = {...finalArray[zfiIndex], index}
                this.setState({
                    zfData: finalArray,
                    });
                this.calcZfIndex();
                
                localStorage.removeItem('compt1_nopax');
            }else{
                console.log(status);
                localStorage.removeItem('compt1_nopax');
            }
        })
    }





    handlePax2 = (e) =>{
        this.onChange(e);
        const pax = localStorage.getItem('compt2_nopax');
        console.log(pax);
        axios.post('/api/pax2', {
            pax
        }).then((pax2Data) => {
            const pax2 = pax2Data.data;
            const status = pax2Data.status;       
            if( status === 200 ){
                console.log(pax2);
                this.setState(()=>{
                    return { pax2Data : pax2 }
                })
                const { index, weight, message, pax } = pax2;
                console.log(pax)
                const paxIndex = this.state.totalPax.findIndex(element => element.field === "compt2_nopax" );
                const freshArray = [...this.state.totalPax];
                freshArray[paxIndex] = {...freshArray[paxIndex], numPax:pax}
                this.setState({
                    totalPax: freshArray,
                    });
                this.calcTotaPax();

                const zfIndex = this.state.zfData.findIndex(element => element.field === "compt2_nopax" );
                let newArray = [...this.state.zfData];
                newArray[zfIndex] = {...newArray[zfIndex], weight, errMssge:message}
                this.setState({
                    zfData: newArray,
                    });
                this.calcZfWeight();

                const zfiIndex = this.state.zfData.findIndex(element => element.field === "compt2_nopax" );
                let finalArray = [...this.state.zfData];
                finalArray[zfiIndex] = {...finalArray[zfiIndex], index}
                this.setState({
                    zfData: finalArray,
                    });
                this.calcZfIndex();

                localStorage.removeItem('compt2_nopax');
            }else{
                console.log(status);
                localStorage.removeItem('compt2_nopax');
            }                          
        })
    }





    handlePax3 = (e) =>{
        this.onChange(e);
        const pax = localStorage.getItem('compt3_nopax');
        console.log(pax);
        axios.post('/api/pax3', {
            pax
        }).then((pax3Data) => {
            const pax3 = pax3Data.data;
            const status = pax3Data.status;
            if( status === 200 ){
                console.log(pax3)
                this.setState(()=>{
                    return { pax3Data : pax3 }
                })
                const { index, weight, message, pax } = pax3;
                console.log(pax)
                const paxIndex = this.state.totalPax.findIndex(element => element.field === "compt3_nopax" );
                const freshArray = [...this.state.totalPax];
                freshArray[paxIndex] = {...freshArray[paxIndex], numPax:pax}
                this.setState({
                    totalPax: freshArray,
                    });
                this.calcTotaPax();

                const zfIndex = this.state.zfData.findIndex(element => element.field === "compt3_nopax" );
                let newArray = [...this.state.zfData];
                newArray[zfIndex] = {...newArray[zfIndex], weight, errMssge:message}
                this.setState({
                    zfData: newArray,
                    });
                this.calcZfWeight();

                const zfiIndex = this.state.zfData.findIndex(element => element.field === "compt3_nopax" );
                let finalArray = [...this.state.zfData];
                finalArray[zfiIndex] = {...finalArray[zfiIndex], index}
                this.setState({
                    zfData: finalArray,
                    });
                this.calcZfIndex();

                localStorage.removeItem('compt3_nopax');
            }else{
                console.log(status);
                localStorage.removeItem('compt3_nopax');
            }
            

            
        })
    }






    handlePax4 = (e) =>{
        this.onChange(e);
        const pax = localStorage.getItem('compt4_nopax');
        console.log(pax);
        axios.post('/api/pax4', {
            pax
        }).then((pax4Data) => {
            const pax4 = pax4Data.data;
            const status = pax4Data.status;
            if( status === 200 ){
                console.log(pax4);
                this.setState(()=>{
                    return { pax4Data : pax4 }
                })
                const { index, weight, message, pax } = pax4;
                console.log(pax)
                const paxIndex = this.state.totalPax.findIndex(element => element.field === "compt4_nopax" );
                const freshArray = [...this.state.totalPax];
                freshArray[paxIndex] = {...freshArray[paxIndex], numPax:pax}
                this.setState({
                    totalPax: freshArray,
                    });
                this.calcTotaPax();

                const zfIndex = this.state.zfData.findIndex(element => element.field === "compt4_nopax" );
                let newArray = [...this.state.zfData];
                newArray[zfIndex] = {...newArray[zfIndex], weight, errMssge:message}
                this.setState({
                    zfData: newArray,
                    });
                this.calcZfWeight();  
                
                const zfiIndex = this.state.zfData.findIndex(element => element.field === "compt4_nopax" );
                let finalArray = [...this.state.zfData];
                finalArray[zfiIndex] = {...finalArray[zfiIndex], index}
                this.setState({
                    zfData: finalArray,
                    });
                this.calcZfIndex();

                localStorage.removeItem('compt4_nopax');
            }else{
                console.log(status);
                localStorage.removeItem('compt4_nopax');
            }
            
        })
    }





    handlePax5 = (e) =>{
        this.onChange(e);
        const pax = localStorage.getItem('compt5_nopax');
        console.log(pax)
        axios.post('/api/pax5', {
            pax
        }).then((pax5Data) => {
            const pax5 = pax5Data.data;
            const status = pax5Data.status;
            if( status === 200 ){
                console.log(pax5);
                this.setState(()=>{
                    return { pax5Data : pax5 }
                })
                const { index, weight, message, pax } = pax5;
                console.log(pax)
                const paxIndex = this.state.totalPax.findIndex(element => element.field === "compt5_nopax" );
                const freshArray = [...this.state.totalPax];
                freshArray[paxIndex] = {...freshArray[paxIndex], numPax:pax}
                this.setState({
                    totalPax: freshArray,
                    });
                this.calcTotaPax();

                const zfIndex = this.state.zfData.findIndex(element => element.field === "compt5_nopax" );
                let newArray = [...this.state.zfData];
                newArray[zfIndex] = {...newArray[zfIndex], weight, errMssge:message}
                this.setState({
                    zfData: newArray,
                    });
                this.calcZfWeight();

                const zfiIndex = this.state.zfData.findIndex(element => element.field === "compt5_nopax" );
                let finalArray = [...this.state.zfData];
                finalArray[zfiIndex] = {...finalArray[zfiIndex], index}
                this.setState({
                    zfData: finalArray,
                    });
                this.calcZfIndex();

                localStorage.removeItem('compt5_nopax');
            }else{
                console.log(status);
                localStorage.removeItem('compt5_nopax');
            }
            
        })
    }






    handlePax6 = (e) =>{
        this.onChange(e);
        const pax = localStorage.getItem('compt6_nopax');
        console.log(pax)
        axios.post('/api/pax6', {
            pax
        }).then((pax6Data) => {
            const pax6 = pax6Data.data;
            const status = pax6Data.status;
            if( status === 200 ){
                console.log(pax6);
                this.setState(()=>{
                    return { pax6Data : pax6 }
                })
                const { index, weight, message, pax } = pax6;
                console.log(pax)
                const paxIndex = this.state.totalPax.findIndex(element => element.field === "compt6_nopax" );
                const freshArray = [...this.state.totalPax];
                freshArray[paxIndex] = {...freshArray[paxIndex], numPax:pax}
                this.setState({
                    totalPax: freshArray,
                    });
                this.calcTotaPax();

                const zfIndex = this.state.zfData.findIndex(element => element.field === "compt6_nopax" );
                let newArray = [...this.state.zfData];
                newArray[zfIndex] = {...newArray[zfIndex], weight, errMssge:message}
                this.setState({
                    zfData: newArray,
                    });
                this.calcZfWeight();

                const zfiIndex = this.state.zfData.findIndex(element => element.field === "compt6_nopax" );
                let finalArray = [...this.state.zfData];
                finalArray[zfiIndex] = {...finalArray[zfiIndex], index}
                this.setState({
                    zfData: finalArray,
                    });
                this.calcZfIndex();

                localStorage.removeItem('compt6_nopax');
            }else{
                console.log(status);
                localStorage.removeItem('compt6_nopax');
            }
            
        })
    }






    handlePax7 = (e) =>{
        this.onChange(e);
        const pax = localStorage.getItem('compt7_nopax');
        console.log(pax);
        axios.post('/api/pax7', {
            pax
        }).then((pax7Data) => {
            const pax7 = pax7Data.data;
            const status = pax7Data.status;
            if( status === 200 ){
                console.log(pax7);
                this.setState(()=>{
                    return { pax7Data : pax7 }
                })
                const { index, weight, message, pax } = pax7;
                console.log(pax)
                const paxIndex = this.state.totalPax.findIndex(element => element.field === "compt7_nopax" );
                const freshArray = [...this.state.totalPax];
                freshArray[paxIndex] = {...freshArray[paxIndex], numPax:pax}
                this.setState({
                    totalPax: freshArray,
                    });
                this.calcTotaPax();

                const zfIndex = this.state.zfData.findIndex(element => element.field === "compt7_nopax" );
                let newArray = [...this.state.zfData];
                newArray[zfIndex] = {...newArray[zfIndex], weight, errMssge:message}
                this.setState({
                    zfData: newArray,
                    });
                this.calcZfWeight();      
                
                const zfiIndex = this.state.zfData.findIndex(element => element.field === "compt7_nopax" );
                let finalArray = [...this.state.zfData];
                finalArray[zfiIndex] = {...finalArray[zfiIndex], index}
                this.setState({
                    zfData: finalArray,
                    });
                this.calcZfIndex();

                localStorage.removeItem('compt7_nopax');
            }else{
                console.log(status);
                localStorage.removeItem('compt7_nopax');
            }
            
        })
    }






    handleBaggFwd = (e) =>{
        console.log('Ready to hadle baggage data');
        this.onChange(e);
        const weight = localStorage.getItem('bags_comptfwd_weight');
        console.log(weight);
        axios.post('/api/bagfwd', {
            weight
        }).then((baggfwdData) => {
            const bagfwd = baggfwdData.data;
            const status = baggfwdData.status;
            if( status === 200 ){
                console.log(bagfwd);
                const { index, weight, message } = bagfwd;
                this.setState(()=>{
                    return { baggfwdData : bagfwd }
                })
                const zfIndex = this.state.zfData.findIndex(element => element.field === "bags_comptfwd_weight" );
                let newArray = [...this.state.zfData];
                newArray[zfIndex] = {...newArray[zfIndex], weight, errMssge:message}
                this.setState({
                    zfData: newArray,
                    });
                this.calcZfWeight();    
                
                const zfiIndex = this.state.zfData.findIndex(element => element.field === "bags_comptfwd_weight" );
                let finalArray = [...this.state.zfData];
                finalArray[zfiIndex] = {...finalArray[zfiIndex], index}
                this.setState({
                    zfData: finalArray,
                    });
                this.calcZfIndex();

                localStorage.removeItem('bags_comptfwd_weight');
            }else{
                console.log(status);
                localStorage.removeItem('bags_comptfwd_weight');
            }            
        })
    }






    handleBaggAft1 = (e) =>{
        console.log('Ready to handle baggage data');
        this.onChange(e);
        const weight = localStorage.getItem('bags_comptaft1_weight');
        console.log(weight);
        axios.post('/api/bagaft1', {
            weight
        }).then((baggaft1Data) => {
            const bag1 = baggaft1Data.data;
            const status = baggaft1Data.status;
            if( status === 200 ){
                console.log(bag1);
                this.setState(()=>{
                    return { baggaft1Data : bag1 }
                })
                const { index, weight, message } = bag1;
                const zfIndex = this.state.zfData.findIndex(element => element.field === "bags_comptaft1_weight" );
                let newArray = [...this.state.zfData];
                newArray[zfIndex] = {...newArray[zfIndex], weight, errMssge:message}
                this.setState({
                    zfData: newArray,
                    });
                this.calcZfWeight();

                const zfiIndex = this.state.zfData.findIndex(element => element.field === "bags_comptaft1_weight" );
                let finalArray = [...this.state.zfData];
                finalArray[zfiIndex] = {...finalArray[zfiIndex], index}
                this.setState({
                    zfData: finalArray,
                    });
                this.calcZfIndex();

                localStorage.removeItem('bags_comptaft1_weight');
            }else{
                console.log(status);
                localStorage.removeItem('bags_comptaft1_weight');
            }
            
        })
    }






    handleBaggAft2 = (e) =>{
        console.log('Ready to handle baggage data');
        this.onChange(e);
        const weight = localStorage.getItem('bags_comptaft2_weight');
        console.log(weight);
        axios.post('/api/bagaft2', {
            weight
        }).then((baggaft2Data) => {
            const bag2 = baggaft2Data.data;
            const status = baggaft2Data.status;
            if( status === 200 ){
                console.log(bag2);
                this.setState(()=>{
                    return { baggaft2Data : bag2 }
                })
                const { index, weight, message } = bag2;
                const zfIndex = this.state.zfData.findIndex(element => element.field === "bags_comptaft2_weight" );
                let newArray = [...this.state.zfData];
                newArray[zfIndex] = {...newArray[zfIndex], weight, errMssge:message}
                this.setState({
                    zfData: newArray,
                    });
                this.calcZfWeight();  
                
                const zfiIndex = this.state.zfData.findIndex(element => element.field === "bags_comptaft2_weight" );
                let finalArray = [...this.state.zfData];
                finalArray[zfiIndex] = {...finalArray[zfiIndex], index}
                this.setState({
                    zfData: finalArray,
                    });
                this.calcZfIndex();
                localStorage.removeItem('bags_comptaft2_weight');
            }else{
                console.log(status);
                localStorage.removeItem('bags_comptaft2_weight');
            }
            
        })
    }





    handleFOB = (e) => {
        const fuelOB = localStorage.getItem('fob_weight');
        const fuelIndex = localStorage.getItem('fobIndex');
        const zeroFuelWeight = this.state.zeroFuelWeight.weight;
        const zeroFuelIndex = this.state.zeroFuelWeightIndex.index;
        console.log(`fuel weight= ${fuelOB}, fuel index= ${fuelIndex}, zero Fuel Weight = ${zeroFuelWeight}, zero Fuel weight Index = ${zeroFuelIndex}`)
        if( zeroFuelWeight === '' || !zeroFuelWeight  ){
            this.setState(()=>{
                return{ rampData:{
                    'index' : 0,
                    'weight' : 0,
                    'message' : "Zero fuel Data is not yet set."
                }}
            })
            console.log(this.state.rampData);

        }else if ( zeroFuelIndex === '' ){
            this.setState(()=>{
                return{ rampData:{
                    'index' : 0,
                    'weight' : 0,
                    'message' : "Zero fuel Data is not yet set."
                }}
            })



        }else if ( zeroFuelWeight <= 5318 ){
            this.setState(()=>{
                return{ rampData:{
                    'index' : 0,
                    'weight' : 0,
                    'succMssge' : "",
                    'errMssge' : "Check if pax and baggage data are correct"
                }}
            })
            console.log(this.state.rampData);

        }else{
            const initWeight = parseInt(zeroFuelWeight);
            const initIndex = parseInt(zeroFuelIndex);
            const fweight = parseInt(fuelOB);
            const findex = parseInt(fuelIndex);
            const rampWeight = fweight + initWeight;
            const rampIndex = findex + initIndex;
            console.log(`this is the ramp weight ${rampWeight}`);
            console.log(`this is the ramp index ${rampIndex}`);
            if( rampWeight > 29347 ){
                this.setState(()=>{
                    return{ rampData:{
                        'weight' : rampWeight,
                        'index' : rampIndex,
                        'succMssge': "",
                        'errMssge': "Ramp weight is Too High"
                    }}
                })
            }else{
                this.setState(()=>{
                    return{ rampData:{
                        'weight' : rampWeight,
                        'index' : rampIndex,
                        'succMssge' : 'Everything seems good',
                        'errMssge': ""
                    }}
                })
            }
        }
    }




    handleFuel = (e) =>{
        this.onChange(e);
        const weight = localStorage.getItem('fob_weight');
        console.log(weight);
        axios.post('/api/fuel', {
            weight
        }).then((fuelData) => {
            const fob = fuelData.data;
            console.log(fob);
            const { index } = fob;
            localStorage.setItem('fobIndex', index);
            this.setState(()=>{
                return { fobData : fob }
            })
            this.handleFOB(e);
            localStorage.removeItem('fob_weight');
        })
    }






    render() {
        return (
            <DataContext.Provider value={
                {
                    ...this.state,
                    onChange : this.onChange,
                    handleObserver : this.handleObserver,
                    handleWardrobe : this.handleWardrobe,
                    handlePax1 : this.handlePax1,
                    handlePax2 : this.handlePax2,
                    handlePax3 : this.handlePax3,
                    handlePax4 : this.handlePax4,
                    handlePax5 : this.handlePax5,
                    handlePax6 : this.handlePax6,
                    handlePax7 : this.handlePax7,
                    handleBaggAft2 : this.handleBaggAft2,
                    handleBaggAft1 : this.handleBaggAft1,
                    handleBaggFwd : this.handleBaggFwd,
                    handleFuel : this.handleFuel,
                    handleTaxiFuel : this.handleTaxiFuel,
                    handleFused : this.handleFused
                }
            }>
                {this.props.children}

            </DataContext.Provider>
        )
    }
}

const DataConsumer = DataContext.Consumer;

export { DataProvider, DataConsumer };