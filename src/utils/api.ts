const OPEN_WEATHER_API_KEY = ''

export interface OpenWeatherData {
  name: string;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: {
    deg: number;
    speed: number;
  };
}


export async function fetchOpenWeatherData(city: string): Promise<any> {

    const res = await fetch(``)
    if(!res.ok){
        throw new Error('City not found')
    }

    const data = await res.json()

}