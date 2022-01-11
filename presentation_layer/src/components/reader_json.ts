class ReaderJSON{
    get_img (time:string, period:string){
        let obj:string|null = localStorage.getItem('weather')
        let img:string = ""
        if (obj != null){
            img = JSON.parse(obj)[period][time].img
        }
        if (!img) return ""
        return img
    }
    
    get_temp (time:string, period:string){
        let obj:string|null = localStorage.getItem('weather')
        let air_t:string = ""
        if (obj != null){
            air_t = JSON.parse(obj)[period][time].air_temp
        }
        if (!air_t) return "-"
        return air_t
    }
    
    get_data (time:string){
        let obj:string|null = localStorage.getItem('weather')
        let data:string = ""
        if (obj != null){
            data = JSON.parse(obj).weather_week[time].data
        }
        return data
    }
    
    get_wind_speed(time:string, period:string){
        let obj:string|null = localStorage.getItem('weather')
        let w_s:string = ""
        if (obj != null){
            w_s = JSON.parse(obj)[period][time].speed_wind
        }
        if (!w_s) return "-"
        return w_s
    }

    get_humidity(time:string, period:string){
        let obj:string|null = localStorage.getItem('weather')
        let rh:string = ""
        if (obj != null){
            rh = JSON.parse(obj)[period][time].humidity
        }
        if (!rh) return "-"
        return rh
    }

    get_prob(time:string, period:string){
        let obj:string|null = localStorage.getItem('weather')
        let prob:string = ""
        if (obj != null){
            prob = JSON.parse(obj)[period][time].prob
        }
        if (!prob || prob === "") return "-"
        return prob
    }
}

export default ReaderJSON;