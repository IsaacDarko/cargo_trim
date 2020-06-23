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
        filledSheetData:[
            {
                field : "owe_weight",
                weight : 17980,
                index : 90.5
            },
            {
                field : "observer_weight",
                weight : 0,
                index : 0
            },
            {
                field : "wardrobe_fwd_weight",
                weight : 0,
                index : 0
            },
            {
                field : "compt1_nopax",
                weight : 0,
                index : 0
            },
            {
                field : "compt2_nopax",
                weight : 0,
                index : 0
            },
            {
                field : "compt3_nopax",
                weight : 0,
                index : 0
            },
            {
                field : "compt4_nopax",
                weight : 0,
                index : 0
            },
            {
                field : "compt5_nopax",
                weight : 0,
                index : 0
            },
            {
                field : "compt6_nopax",
                weight : 0,
                index : 0
            },
            {
                field : "compt7_nopax",
                weight : 0,
                index : 0
            },
            {
                field : "bags_comptfwd_weight",
                weight : 0,
                index : 0
            },
            {
                field : "bags_comptaft1_weight",
                weight : 0,
                index : 0
            },
            {
                field : "bags_comptaft2_weight",
                weight : 0,
                index : 0
            },
            {
                field : "zerofuel",
                weight : 0,
                index : 0
            },
            {
                field : "fuelonboard",
                weight : 0,
                index : 0
            },
            {
                field : "ramp",
                weight : 0,
                index : 0
            },
            {
                field : "taxi",
                weight : 0,
                index : 0
            },
            {
                field : "takeoff",
                weight : 0,
                index : 0
            },
            {
                field : "estfuelused",
                weight : 0,
                index : 0
            },
            {
                field : "landing",
                weight : 0,
                index : 0
            }
        ],
        estimatedFuelUsedData : {},
        landingData:{},       
        allIndexList:[],
        allWeightsList:[],
        totalIndex:{},
        graphData:{}        
              
    }



    componentWillMount() {
        this.setUpGraph();
    }




    setUpGraph = () =>{
        const pointX1 = this.state.landingData.index;
        const pointY1 = this.state.landingData.weight;

        const pointX2 = this.state.takeOffData.index;
        const pointY2 = this.state.takeOffData.weight;

        console.log(`the landingIndex= ${pointX1}, the landingWeight= ${pointY1}, the takeoffIndex= ${pointX2}, the takeoffWeight= ${pointY2}`)

        this.setState({
            graphData: {
                data:{
                    datasets:[
                        {                            
                            label: 'MAC(%)',
                            data: [ 
                                {
                                    x: 77,
                                    y: 16000 
                                },
                                {
                                    x:  80, 
                                    y: 16000
                                },
                                {
                                    x: 83,
                                    y: 16000
                                }, 
                                {
                                    x: 86, 
                                    y: 16000
                                }, 
                                {
                                    x: 89,
                                    y: 16000
                                }, 
                                {
                                    x: 92,
                                    y: 16000
                                }, 
                                {
                                    x: 95, 
                                    y: 16000
                                }, 
                                {
                                    x: 98,
                                    y: 16000
                                }, 
                                {
                                    x: 101,
                                    y: 16000
                                }, 
                                {
                                    x: 104,
                                    y: 16000
                                },
                                { 
                                    x: 107,
                                    y: 16000
                                },
                                {
                                    x: 110,
                                    y: 16000
                                }, 
                                {
                                    x:  113,
                                    y: 16000
                                },
                                {
                                    x: pointX1, 
                                    y: pointY1 
                                },
                                {
                                    x: pointX2,
                                    y: pointY2
                                }

                            ],
                            fill: false,                                                        
                            type: 'line',
                            lineTension: 0,
                            strokeColor: "rgba(151,187,205,0)",
                            pointColor: "rgba(0,0,0,1)"                        
                        },
                        {
                            label: 'WEIGHT',
                            data: [ 
                                {
                                    x: pointX1, 
                                    y: pointY1 
                                },
                                {
                                    x: pointX2,
                                    y: pointY2
                                } 
                             ],
                            fill: true,
                            lineTension: 0.1,
                            fillColor: "rgba(151,187,205,0)",
                            pointColor: "rgba(0,0,0,1)"                      
                        },                       
                        {                            
                            label: 'INDEX',
                            data: [  
                                
                            ],
                            fill: true,
                            lineTension: 0.1,
                            fillColor: "rgba(151,187,205,0)",
                            pointColor: "rgba(0,0,0,1)"                     
                        }                        
                    ]
    
                },
    
                options: {
                    title: {
                        display: true,
                        text:'Aircraft Center Gravity Graph',
                        fontSize: 27
                    },

                    scales: {
                        yAxes: [{
                            stacked: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Weight (kg)'
                              },
                            ticks: {
                                beginAtZero:false,
                                min: 16000,
                                stepSize: 1000 ,
                                max: 30000    
                            }
                          }],
                          xAxes: [{
                            type: 'linear',
                            position: 'top',
                            scaleLabel: {
                                display: true,
                                labelString: 'Index'
                              },
                            ticks: {
                                beginAtZero:false,
                                min: 65,
                                stepSize: 5 ,
                                max: 125    
                            },
                            
                        }]
                       }
                }
            } 
            
        })

    }




    plotTakeoffPoint = () =>{
        this.setUpGraph();
    }




    plotLandingPoint = () =>{
        this.setUpGraph();
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





    calcTotalIndex = () =>{
        const { index : tOIndex } = this.state.takeOffData;
        const { index : efIndex } = this.state.estimatedFuelUsedData;

        const totalIndex = tOIndex - efIndex;
        this.setState({ totalIndex :{
            'index' : totalIndex
        }
    })
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
                    "message": 'ZeroFuelWeight is Too High'
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
        const zfwIndex = parseFloat(zeroFuelIndex).toFixed(1);
        this.setState(()=>{
            return{ zeroFuelWeightIndex :{
                "index" : zfwIndex ,
                "message": 'Everything looks OK'
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
            const ramp = this.state.rampData;
            const { weight, index } = ramp
            if( weight === undefined || index === undefined ){
                this.setState(()=>{
                    return { takeOffData :{
                        'weight' : 0,
                        'index' : 0,
                        'message' : "Ramp Weight undefined"
                    } }
                })
            }else{

                const fuel = fuelData.data;
                const { weight, index } = fuel;
                const rampW = this.state.rampData.weight;
                console.log(rampW);
                const filledIndex = this.state.filledSheetData.findIndex(element => element.field === "taxi" );
                let graphArray = [...this.state.filledSheetData];
                graphArray[filledIndex] = {...graphArray[filledIndex], weight, index}
                this.setState({
                    filledSheetData: graphArray,
                    });
                console.log(this.state.filledSheetData);

                
                if( !rampW || rampW !== '' || rampW === 0 ){
                    this.setState(()=>{
                        return { taxiFuelData:{
                            "weight" : tFW,
                            "index" : index
                        } }
                    })
                    console.log(this.state.taxiFuelData);
                    const rampData = this.state.rampData;
                    const { weight, index : rindex } = rampData;
                    const rweight = parseInt(weight);
                    const takeOffWeight = rweight - tFW;
                    const takeOffIndex = rindex - index;
                    const tkoffIndex = takeOffIndex.toFixed(1);
                    console.log(takeOffIndex);

                    if( takeOffWeight > 29257 ){
                        this.setState(()=>{
                            return{ takeOffData: {
                                'weight' : takeOffWeight,
                                'index' : tkoffIndex,
                                'message' : "TakeOff Weight Too High"
                            } }
                        })
                        console.log(this.state.takeOffData);        
                        localStorage.removeItem('tf_weight');

                    }else{
                        this.setState(()=>{
                            return{ takeOffData: {
                                "weight" : takeOffWeight,
                                "index" : tkoffIndex
                            } }
                        })
                        console.log(this.state.takeOffData);        
                        localStorage.removeItem('tf_weight');
                    }                
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

            }
            
        })    
        
    }






    handleFused = (e) =>{
        this.onChange(e);
        const weight = localStorage.getItem('estfuelused_weight');
        axios.post('/api/fuel', {
            weight
        }).then((usedFuelData) => {
            const takeOff = this.state.takeOffData;
            console.log(takeOff);
            const { weight:tW, index:tI } = takeOff;
            console.log(`${tW} and ${tI}`)
            if( tW === undefined || tI === undefined || tW === 0 || tI === 0 ){
                this.setState({ landingData:{
                    'weight' : 0,
                    'index' : 0,
                    'message': "TakeOff weight: undefined"
                }
            })

            }else{
                console.log(usedFuelData);
                const ufData = usedFuelData.data;
                const { weight, index } = ufData;
                console.log(`${index} and ${weight}`);
                this.setState({ estimatedFuelUsedData:{
                        weight,
                        index
                    }
                })
                console.log(this.state);
                const takeOff = this.state.takeOffData;
                const { 'weight' : tOWeight, 'index': tOIndex } = takeOff;
                console.log(index);
                const toffWeight = parseInt(tOWeight);
                const toffIndex = parseFloat(tOIndex);
                const landingWeight = toffWeight - weight;
                const landingIndex = toffIndex - index;
                const landIndex = landingIndex.toFixed(1);
                if( landingWeight <= 28099 ){
                    this.setState(()=>{
                        return{ landingData:{
                            "weight" : landingWeight,
                            "index" : landIndex
                        } }
                    })
                    localStorage.removeItem('estfuelused_weight');
                    this.setUpGraph();
                }else{
                    this.setState(()=>{
                        return{ landingData:{
                            'weight' : landingWeight,
                            'index' : landIndex,
                            'message': "Landing Weight Too High"
                            
                        } }
                    })
                    localStorage.removeItem('estfuelused_weight');
                    this.setUpGraph();
                }             

            }
           
        })
        
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

                const filledIndex = this.state.filledSheetData.findIndex(element => element.field === "observer_weight" );
                let graphArray = [...this.state.filledSheetData];
                graphArray[filledIndex] = {...graphArray[filledIndex], weight, index}
                this.setState({
                    filledSheetData: graphArray,
                    });
                console.log(this.state.filledSheetData);

                localStorage.removeItem('observer_weight');
                }
            this.setUpGraph()
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

            const filledIndex = this.state.filledSheetData.findIndex(element => element.field === "wardrobe_fwd_weight" );
                let graphArray = [...this.state.filledSheetData];
                graphArray[filledIndex] = {...graphArray[filledIndex], weight, index}
                this.setState({
                    filledSheetData: graphArray,
                    });
                console.log(this.state.filledSheetData);

            localStorage.removeItem('wardrobe_fwd_weight');
        })
    }





//In this case this handles the weight of cargo for the first compartment
    handlePax1 = (e) =>{
        this.onChange(e);
        const weight = localStorage.getItem('compt1_nopax');
        axios.post('/api/compartment1', {
            weight
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

                const filledIndex = this.state.filledSheetData.findIndex(element => element.field === "compt1_nopax" );
                let graphArray = [...this.state.filledSheetData];
                graphArray[filledIndex] = {...graphArray[filledIndex], weight, index}
                this.setState({
                    filledSheetData: graphArray,
                    });
                console.log(this.state.filledSheetData);
                localStorage.removeItem('compt1_nopax');
            }else{
                console.log(status);
                localStorage.removeItem('compt1_nopax');
            }
        })
    }




//In this case this handles the weight of cargo for the second compartment
    handlePax2 = (e) =>{
        this.onChange(e);
        const weight = localStorage.getItem('compt2_nopax');
        console.log(weight);
        axios.post('/api/compartment2', {
            weight
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

                const filledIndex = this.state.filledSheetData.findIndex(element => element.field === "compt2_nopax" );
                let graphArray = [...this.state.filledSheetData];
                graphArray[filledIndex] = {...graphArray[filledIndex], weight, index}
                this.setState({
                    filledSheetData: graphArray,
                    });
                console.log(this.state.filledSheetData);

                localStorage.removeItem('compt2_nopax');
            }else{
                console.log(status);
                localStorage.removeItem('compt2_nopax');
            }                          
        })
    }




//In this case this handles the weight of cargo for the third compartment
    handlePax3 = (e) =>{
        this.onChange(e);
        const weight = localStorage.getItem('compt3_nopax');
        console.log(weight);
        axios.post('/api/compartment3', {
            weight
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

                const filledIndex = this.state.filledSheetData.findIndex(element => element.field === "compt3_nopax" );
                let graphArray = [...this.state.filledSheetData];
                graphArray[filledIndex] = {...graphArray[filledIndex], weight, index}
                this.setState({
                    filledSheetData: graphArray,
                    });
                console.log(this.state.filledSheetData);

                localStorage.removeItem('compt3_nopax');
            }else{
                console.log(status);
                localStorage.removeItem('compt3_nopax');
            }
            

            
        })
    }





//In this case this handles the weight of cargo for the fourth compartment
    handlePax4 = (e) =>{
        this.onChange(e);
        const weight = localStorage.getItem('compt4_nopax');
        console.log(weight);
        axios.post('/api/compartment4', {
            weight
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

                const filledIndex = this.state.filledSheetData.findIndex(element => element.field === "compt4_nopax" );
                let graphArray = [...this.state.filledSheetData];
                graphArray[filledIndex] = {...graphArray[filledIndex], weight, index}
                this.setState({
                    filledSheetData: graphArray,
                    });
                console.log(this.state.filledSheetData);

                localStorage.removeItem('compt4_nopax');
            }else{
                console.log(status);
                localStorage.removeItem('compt4_nopax');
            }
            
        })
    }





    //In this case this handles the weight of cargo for the fifth compartment
    handlePax5 = (e) =>{
        this.onChange(e);
        const weight = localStorage.getItem('compt5_nopax');
        console.log(weight)
        axios.post('/api/compartment5', {
            weight
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

                const filledIndex = this.state.filledSheetData.findIndex(element => element.field === "compt5_nopax" );
                let graphArray = [...this.state.filledSheetData];
                graphArray[filledIndex] = {...graphArray[filledIndex], weight, index}
                this.setState({
                    filledSheetData: graphArray,
                    });
                console.log(this.state.filledSheetData);

                localStorage.removeItem('compt5_nopax');
            }else{
                console.log(status);
                localStorage.removeItem('compt5_nopax');
            }
            
        })
    }





//In this case this handles the weight of cargo for the sixth compartment
    handlePax6 = (e) =>{
        this.onChange(e);
        const weight = localStorage.getItem('compt6_nopax');
        console.log(weight)
        axios.post('/api/compartment6', {
            weight
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

                const filledIndex = this.state.filledSheetData.findIndex(element => element.field === "compt6_nopax" );
                let graphArray = [...this.state.filledSheetData];
                graphArray[filledIndex] = {...graphArray[filledIndex], weight, index}
                this.setState({
                    filledSheetData: graphArray,
                    });
                console.log(this.state.filledSheetData);

                localStorage.removeItem('compt6_nopax');
            }else{
                console.log(status);
                localStorage.removeItem('compt6_nopax');
            }
            
        })
    }







//In this case this handles the weight of cargo for the seventh compartment
    handlePax7 = (e) =>{
        this.onChange(e);
        const weight = localStorage.getItem('compt7_nopax');
        console.log(weight);
        axios.post('/api/compartment7', {
            weight
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

                const filledIndex = this.state.filledSheetData.findIndex(element => element.field === "compt7_nopax" );
                let graphArray = [...this.state.filledSheetData];
                graphArray[filledIndex] = {...graphArray[filledIndex], weight, index}
                this.setState({
                    filledSheetData: graphArray,
                    });
                console.log(this.state.filledSheetData);

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

                const filledIndex = this.state.filledSheetData.findIndex(element => element.field === "bags_comptfwd_weight" );
                let graphArray = [...this.state.filledSheetData];
                graphArray[filledIndex] = {...graphArray[filledIndex], weight, index}
                this.setState({
                    filledSheetData: graphArray,
                    });
                console.log(this.state.filledSheetData);

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

                const filledIndex = this.state.filledSheetData.findIndex(element => element.field === "bags_comptaft1_weight" );
                let graphArray = [...this.state.filledSheetData];
                graphArray[filledIndex] = {...graphArray[filledIndex], weight, index}
                this.setState({
                    filledSheetData: graphArray,
                    });
                console.log(this.state.filledSheetData);

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

                const filledIndex = this.state.filledSheetData.findIndex(element => element.field === "bags_comptaft2_weight" );
                let graphArray = [...this.state.filledSheetData];
                graphArray[filledIndex] = {...graphArray[filledIndex], weight, index}
                this.setState({
                    filledSheetData: graphArray,
                    });
                console.log(this.state.filledSheetData);
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
            const initWeight = parseFloat(zeroFuelWeight);
            const initIndex = parseFloat(zeroFuelIndex);
            const fweight = parseFloat(fuelOB);
            const findex = parseFloat(fuelIndex);
            const rampWeight = fweight + initWeight;
            const rampIndex = parseFloat(findex.toFixed(2)) + parseFloat(initIndex.toFixed(2));
            const rIndex = parseInt(rampIndex)
            console.log(`this is the ramp weight ${rampWeight}`);
            console.log(`this is the ramp index ${rIndex}`);
            if( rampWeight > 29347 ){
                this.setState(()=>{
                    return{ rampData:{
                        'weight' : rampWeight,
                        'index' : rIndex,
                        'succMssge': "",
                        'errMssge': "Ramp weight is Too High"
                    }}
                })
            }else{
                this.setState(()=>{
                    return{ rampData:{
                        'weight' : rampWeight,
                        'index' : rIndex,
                        'succMssge' : 'Everything seems good',
                        'errMssge': ""
                    }}
                })

                const filledIndex = this.state.filledSheetData.findIndex(element => element.field === "ramp" );
                let graphArray = [...this.state.filledSheetData];
                graphArray[filledIndex] = {...graphArray[filledIndex], 'weight': rampWeight, 'index': rIndex}
                this.setState({
                    filledSheetData: graphArray,
                    });
                console.log(this.state.filledSheetData);
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
            const { weight, index } = fob;
            localStorage.setItem('fobIndex', index);
            this.setState(()=>{
                return { fobData : fob }
            })
            this.handleFOB(e);

            const filledIndex = this.state.filledSheetData.findIndex(element => element.field === "fuelonboard" );
            let graphArray = [...this.state.filledSheetData];
            graphArray[filledIndex] = {...graphArray[filledIndex], weight, index}
            this.setState({
                filledSheetData: graphArray,
                });
            console.log(this.state.filledSheetData);

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