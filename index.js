// Code your solution in this file!
const returnFirstTwoDrivers=(array)=>{
    return array.slice(0,2)
}
//["elem1", "elem2", "elem3", "elem4","elem5"]
const returnLastTwoDrivers=(array)=>{
    return array.slice(array.length-2)
}
let selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num){
let fareMultiplier=(fare)=>{
    return fare*num
}
return fareMultiplier
}

const fareDoubler=createFareMultiplier(2)
const fareTripler=createFareMultiplier(3)


function selectDifferentDrivers(arrayOfDrivers,functionPlaceholder){


let drivers=functionPlaceholder(arrayOfDrivers)
return drivers

}