import React from 'react'

const InfoBox = ({data}) => {
  return (
    <div className="max-w-sm mx-auto mt-10 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl shadow-2xl p-6 transform transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]">
      <h2 className="text-3xl font-bold mb-2">{data.city}</h2>
      <p className="text-lg italic mb-4 capitalize">{data.weather}</p>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-white/10 p-3 rounded-lg">
          <p className="font-semibold">Temp</p>
          <p className="text-xl">{data.temp}°C</p>
        </div>
        <div className="bg-white/10 p-3 rounded-lg">
          <p className="font-semibold">Feels Like</p>
          <p className="text-xl">{data.feelsLike}°C</p>
        </div>
        <div className="bg-white/10 p-3 rounded-lg">
          <p className="font-semibold">Min</p>
          <p className="text-xl">{data.tempMin}°C</p>
        </div>
        <div className="bg-white/10 p-3 rounded-lg">
          <p className="font-semibold">Max</p>
          <p className="text-xl">{data.tempMax}°C</p>
        </div>
        <div className="bg-white/10 p-3 rounded-lg col-span-2">
          <p className="font-semibold">Humidity</p>
          <p className="text-xl">{data.humidity}%</p>
        </div>
      </div>
    </div>
  );
}

export default InfoBox