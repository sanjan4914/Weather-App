

const cityName = document.getElementById("cityName")
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const RealTempVal = document.getElementById("RealTempVal")
const temp_status = document.getElementById("temp_status")
const dataHide = document.querySelector(".middle_layer")



const getInfo = async (event) => {
    event.preventDefault()
    // alert("hello")
    let cityVal = cityName.value;

    if (cityVal === "") {
        city_name.innerText = `Please enter a city name!!`
        dataHide.classList.add('data_hide')

    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d5194d5705b149468c6bd5096d76fadc`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`
            RealTempVal.innerText = arrData[0].main.temp;
            // temp_status.innerText=arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;
            console.log(tempMood)

            if (tempMood == "Clear") {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68;'></i> "
            }
            else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color: #f1f2f6;'></i> "
            }
            else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-sun-rain' style='color: #a4b0be;'></i> "
              
            } else {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color:  #eccc68;'></i> "

            }

            dataHide.classList.remove('data_hide')

        } catch {
            city_name.innerText = `Please Enter the valid City Name`;
            dataHide.classList.add('data_hide')

        }

    }
}

submitBtn.addEventListener('click', getInfo)


// tempInformation   top_layer that is date and day formating


//getting Day
const day=document.getElementById("day")

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const currentTime=new Date()
day.innerText=weekday[currentTime.getDay()]

// getting year
const today_date=document.getElementById("today_date")
const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","November","December"];

const monthName=month[currentTime.getMonth()]
today_date.innerText=currentTime.getDate()+ " " +(month[currentTime.getMonth()])



