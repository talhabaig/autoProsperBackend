import { 
  CarEssentialCriteria, 
  PrefferedCarBrand, 
  PrefferedSeats, 
  PrefferedVehicle,
  PrefferedRidePower
} from "./enums";

export const CarEssentialCriteriaDisplayNames: Record<CarEssentialCriteria, string> = {
    [CarEssentialCriteria.GoodGasMileage]: "Good Gas Mileage",
    [CarEssentialCriteria.InteriorCargoSpace]: "Interior Cargo Space",
    [CarEssentialCriteria.PerformanceAndHandling]: "Performance and Handling",
    [CarEssentialCriteria.FeaturesAndAccessories]: "Features & Accessories",
    [CarEssentialCriteria.InteriorStyle]: "Interior Style",
    [CarEssentialCriteria.PassengerSpace]: "Passenger Space",
  };

export const PrefferedCarBrandDisplayNames: Record<PrefferedCarBrand, string> = {
  [PrefferedCarBrand.Audi]: "Audi",
  [PrefferedCarBrand.BMW]: "BMW",
  [PrefferedCarBrand.Honda]: "Honda",
  [PrefferedCarBrand.Hyundai]: "Hyundai",
  [PrefferedCarBrand.Mazda]: "Mazda",
  [PrefferedCarBrand.Mercedes]: "Mercedes",
  [PrefferedCarBrand.Nissan]: "Nissan",
  [PrefferedCarBrand.Renault]: "Renault",
  [PrefferedCarBrand.Toyota]: "Toyota",
  [PrefferedCarBrand.Volkswagen]: "Volkswagen",
};

export const PrefferedSeatsDisplayNames: Record<PrefferedSeats, string> = {
  [PrefferedSeats.TwoSeats]: "2 Seats",
  [PrefferedSeats.ThreeToFive]: "3-5 Seats",
  [PrefferedSeats.SixToEight]: "6-8 Seats",
  [PrefferedSeats.EightPlus]: "8+ Seats"
};

export const PrefferedVehicleDisplayNames: Record<PrefferedVehicle, string> = {
  [PrefferedVehicle.SUV]: "SUV",
  [PrefferedVehicle.Truck]: "Truck",
  [PrefferedVehicle.Sedan]: "Sedan",
  [PrefferedVehicle.Hatchback]: "Hatchback",
  [PrefferedVehicle.Coupe]: "Coupe",
  [PrefferedVehicle.Wagon]: "Wagon",
  [PrefferedVehicle.Minivan]: "Minivan",
  [PrefferedVehicle.Convertible]: "Convertible"
};

export const PrefferedRidePowerDisplayNames: Record<PrefferedRidePower, string> = {
  [PrefferedRidePower.GasDiesel]: "Gas/Diesel",
  [PrefferedRidePower.Hybrid]: "Hybrid",
  [PrefferedRidePower.PlugInHybrid]: "Plug-in Hybrid",
  [PrefferedRidePower.Electric]: "Electric"
};