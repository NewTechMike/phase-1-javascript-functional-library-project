function myEach(collection, callback){
  for(let i in collection){
    callback(collection[i])
    //console.log(collection[i])
    //window.alert(collection[i])
  }
  return collection
}//closes myEach

function myMap(collection, callback){
  console.log(collection)
  console.log(Array.isArray(collection))
  if(Array.isArray(collection) === true){
    console.log('array')
    let newCollection = collection.map(callback)
    return newCollection 
  }else{ 
    console.log('Is Object')
    let newCollection =[]
    let nc = []
    for(let i in collection){ 
      // console.log("New: ", newCollection, i, collection[i])
      nc.push(collection[i])
    } 
    return newCollection = nc.map(callback)
  }
}//closes myMap

function myReduce(collection, callback, acc=0){
  let val = 0
  
  console.log(collection)
  console.log(acc)
  if(Array.isArray(collection) === true){
    for(let i in collection){
      val += collection[i]
      console.log("val: ", val)
      //return callback(acc, val, collection[i])
    }
    console.log(val)
    return callback(acc, val, collection)
  } else{ 
    let newCollection =[]
    for(let i in collection){ 
      newCollection.push(collection[i])
    }
    for(let j in newCollection){
      val += newCollection[j]
    }
    console.log("Val: ", val)
    return callback(acc-2, val, newCollection)
  }
}//closes myReduce

function myFind(collection, predicate){

  for(let i in collection){
    if(predicate(collection[i]) === true){
      return collection[i]
    }
  }
}//closes myFind

function myFilter(collection, predicate){
  let newArray = []
    for(let i in collection){
    if(predicate(collection[i]) === true){
      newArray.push(collection[i])
    }
  }
  return newArray
}//closes myFilter

function mySize(collection){
 let total = 0
 if(Array.isArray(collection)=== true){
  for(let i in collection){
    total = i
  }
  return parseInt(total) + 1
} else{
  for(let i in collection){
    total = collection[i]
  }
  return total 
  }
}//closes mySize

function myFirst(array, n=0){
  let newArray = []
  if(n === 0){
    return array[n]
  }
  for(let i=0; i<=n-1; i++){
    newArray.push(array[i])
  }
  return newArray
}//closes myFirst

function myLast(array, n=0){

  if(n === 0){
    return array[array.length-1]
  } else {
     array.shift(n)
  }
  return array
}//closese myLast

function myKeys(object){
  
 return Object.keys(object)
}//closes myKeys

function myValues(object){
  
 return Object.values(object)
}//closes myKeys