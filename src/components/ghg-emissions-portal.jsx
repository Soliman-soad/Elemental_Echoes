"use client";
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { Sun, User } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

const EmissionWatchScreen = ({ title, buttons, onButtonClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="text-center">
    <h1 className="text-3xl font-bold text-white mb-8">{title}</h1>
    <div className="space-y-4">
      {buttons.map((button, index) => (
        <motion.button
          key={index}
          className="w-full py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-full transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onButtonClick}>
          {button}
        </motion.button>
      ))}
    </div>
  </motion.div>
)

const GHGPortalScreen = ({ title, buttons, onButtonClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="text-center">
    <h1 className="text-3xl font-bold text-white mb-8">{title}</h1>
    <div className="space-y-4">
      <Select onValueChange={onButtonClick}>
        <SelectTrigger className="w-full bg-white/20 text-white border-none">
          <SelectValue placeholder="Select Region" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="north-america">North America</SelectItem>
          <SelectItem value="south-america">South America</SelectItem>
          <SelectItem value="europe">Europe</SelectItem>
          <SelectItem value="africa">Africa</SelectItem>
          <SelectItem value="asia">Asia</SelectItem>
          <SelectItem value="oceania">Oceania</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </motion.div>
)

const AccessDataScreen = ({ title, buttons, onButtonClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="text-center">
    <h1 className="text-3xl font-bold text-white mb-8">{title}</h1>
    <div className="space-y-4">
      {buttons.map((button, index) => (
        <motion.button
          key={index}
          className="w-full py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-full transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onButtonClick}>
          {button}
        </motion.button>
      ))}
    </div>
  </motion.div>
)

const SpecifyLocationScreen = ({ title, buttons, onButtonClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="text-center">
    <h1 className="text-3xl font-bold text-white mb-8">{title}</h1>
    <div className="space-y-4">
      {buttons.map((button, index) => (
        <motion.button
          key={index}
          className="w-full py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-full transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onButtonClick}>
          {button}
        </motion.button>
      ))}
    </div>
    <div className="mt-4 bg-white/10 p-2 rounded-lg">
      <ComposableMap projection="geoMercator" className="w-full h-48">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#D6D6DA"
                stroke="#FFFFFF"
                strokeWidth={0.5} />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  </motion.div>
)

const GHGCalculatorScreen = ({ title, buttons, onButtonClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="text-center">
    <h1 className="text-3xl font-bold text-white mb-8">{title}</h1>
    <div className="space-y-4">
      {buttons.map((button, index) => (
        <motion.button
          key={index}
          className="w-full py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-full transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onButtonClick}>
          {button}
        </motion.button>
      ))}
    </div>
  </motion.div>
)

const screens = [
  { id: 'emission', title: 'EMISSION WATCH', buttons: ['SIGN IN', 'LOG IN'], component: EmissionWatchScreen },
  { id: 'ghg', title: 'GHG PORTAL', buttons: ['SELECT REGION'], component: GHGPortalScreen },
  { id: 'access', title: 'ACCESS DATA', buttons: ['Download SHP', 'Show Statistics'], component: AccessDataScreen },
  { id: 'location', title: 'Specify Location', buttons: ['Choose from map'], component: SpecifyLocationScreen },
  { id: 'calculator', title: 'GHG CALCULATOR', buttons: ['SIGN IN', 'LOG IN'], component: GHGCalculatorScreen },
]

export function GhgEmissionsPortal() {
  const [currentScreen, setCurrentScreen] = useState(0)

  const nextScreen = () => {
    setCurrentScreen((prevScreen) => (prevScreen + 1) % screens.length)
  }

  const CurrentScreenComponent = screens[currentScreen].component

  return (
    (<div
      className="min-h-screen bg-gradient-to-br from-blue-600 to-orange-400 flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <div className="relative p-6">
          <Sun className="absolute top-6 left-6 text-yellow-300" size={32} />
          <User className="absolute top-6 right-6 text-white" size={24} />
          <motion.div
            className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
            <ComposableMap projection="geoMercator" className="w-24 h-24">
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#D6D6DA"
                      stroke="#FFFFFF"
                      strokeWidth={0.5} />
                  ))
                }
              </Geographies>
            </ComposableMap>
          </motion.div>
          <AnimatePresence mode="wait">
            <CurrentScreenComponent
              key={screens[currentScreen].id}
              title={screens[currentScreen].title}
              buttons={screens[currentScreen].buttons}
              onButtonClick={nextScreen} />
          </AnimatePresence>
        </div>
      </motion.div>
    </div>)
  );
}