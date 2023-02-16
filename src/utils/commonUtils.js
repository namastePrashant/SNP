import moment from 'moment';

export const isEmpty = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

export const secondsToMinutes = (time) => {
  let second = Math.floor(time % 60);
  if (parseInt(second) < 10) second = '0' + second;
  return Math.floor(time / 60) + ':' + second;
}

export const isAdLocationFound = (ads, location) => {
  if (!isEmpty(ads)) {
    let ad = ads.find(image => image.key === location);
    let adFound = ad ? true : false;
    return adFound;
  }
}

export const extractAdvertisement = (data, location) => {
  if (!isEmpty(data)) {
    let ad = data.find(image => image.key === location)
    let src = ad ? ad.image.url : ad;
    return src;
  }
}

export const getTotalTracksTime = (time) => {

  let formattedTime = "";
  let hrs = Math.floor(time / 3600);
  let mins = Math.floor((time % 3600) / 60);
  // let secs = Math.floor(time % 60);

  if (hrs > 0) {
    formattedTime += hrs + " hrs ";
  }

  formattedTime += (mins < 10 ? "0" : "") + mins + " mins ";
  // formattedTime+=(secs<10?"0":"")+secs+ "secs";    

  // console.log('formattedTime hrs', hrs);
  // console.log('formattedTime hrs', (time/3600));
  // console.log('formattedTime', formattedTime);
  return formattedTime;
}



export const returnLimitedWords = (string, num) => {
  if (string.length > num) { string = string.substring(0, num) + '...' };
  return string;
}

/**
 * @param number  eg "1000 21356 etc"
 * @returns devanagaric formated number
 */
export const NepaliNS = (number) => {
  const string = number?.toString()
  if (string?.length > 3) {
    let hundredPlace = string.substring(string.length - 3)
    let remaining = string.slice(0, -3)
    remaining = remaining.replace(/\B(?=(\d{2})+(?!\d))/g, ",")
    return remaining + ',' + hundredPlace
  }
  return number
}



/**
 * sets form data
 * 
 * @returns form data
 * 
 * @param object eg {name:"suraj"}
 */

export function SetFormData(data,array=[]) {
  const formData = new FormData()
  if (data) {
    Object.keys(data).forEach(function (key) {
      if(array.indexOf(key)===-1){
        formData.append(key, data[key])
      }else{
        if(data[key]){
          formData.append(key, data[key])
        }
      }
    })
  }
  return formData
}

/**
 * @tutorial message according to time stamp
 * 
 */

export function getMessageByTimeStamp() {
  let today = new Date();
  let currentHour = today.getHours()


  if (currentHour >= 6 && currentHour <= 12) {
    return "Good Morning "
  } else if (currentHour >= 12 && currentHour <= 17) {
    return "Good Afternoon "
  } else if (currentHour >= 17 && currentHour <= 19) {
    return "Good Evening "
  } else {
    return "Welcome "
  }

}

// get first name
export function getUserFirstName(fullname) {
  return fullname.split(" ")[0]
}


// get date from month number
export function getMonth(month) {
  return moment(month, 'MM').format('MMM')
}

export function getYearMonth(month) {
  return moment(month, 'YYYY-MM').format('YYYY MMM')
}


// earning formatter
export function thousand(money) {
  return parseInt(money) / 1000
}


/**
 * @params array [{id:1,name:bla bla ...]
 * @returns array [1,2,...]
 * @tutorial sent arry get back array of id
 */
export const getIdsFromArray = (array, name = 'id') => {
  let id = []
  array.forEach(item => {
    id.push(item[name])
  })
  return id
}


export const disableFutureTimeDateSelect = (currentTimeDate) => {
  return currentTimeDate && currentTimeDate > moment().endOf('day');
}





/**
 * arrayUnique
 * @params array eg [1,2,1]
 * @returns array with unque elements [1,2]
 */
export const arrayUnique = (array) => {
  function uniquefilter(value, index, self) {
    return self.indexOf(value) === index
  }
  let filteredArray = array.filter(uniquefilter)
  return filteredArray
}


export const inArrayFilter = (array1, array2) => {
  array1.forEach(item => {
    if (array2.indexOf(item) !== -1) {
      array1.pop(item)
    }
  })
  return array1
}


/**
 * calculate percent 
 * @return percent negative or positive
 * @params number eg(10,20)
 */

export const calculatePercentage = (previous, current) => {
  let improvement = false

  console.log("previous, current", previous, current);
  if (previous <= current) improvement = true

  if (!previous === 0) {
    if (previous <= current) {
      let percentage = Math.abs(((parseInt(current) - parseInt(previous)) / parseInt(previous)) * 100).toFixed(2)
      return { improvement: improvement, percent: percentage }
    } else if (previous > current) {
      let percentage = Math.abs(((parseInt(previous) - parseInt(current)) / parseInt(previous)) * 100).toFixed(2)
      return { improvement: improvement, percent: percentage }
    }

  } else if (previous === 0) {
    if (current > 100) {
      return { improvement: improvement, percent: 100 }
    } else {      
      return { improvement: improvement, percent: current }
    }
  }
  return { improvement: improvement, percent: 0 }
}


// check role function
export const isArtist = () => {
  if (localStorage.getItem('role') === 'artist') return true
  return false
}



// capitalizes the first letter of the string
export const firstCap = (string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);;
}


export const updateItemOfArray = (array,object) =>{
  if(array.length){
    array.forEach((item,i)=>{
      if(item.id === object.id){
        array[i] = object;
        return array;
      }
    })
  }
  return array;
}

export const removeItemFromArry = (array,id)=>{
  const filter =  array.filter(item=>item.id !== id);
  return {
    songs:filter
  }
}

export const removeItemFromArray = (array,id)=>{
  const filter =  array.filter(item=>item.id !== id);
  return filter
}