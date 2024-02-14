/**
 *        @file enum_service.ts
 *     @summary EnumService Class
 * @description Defines a service for handling enum-related operations
 *   @functions - getEnumInfo()
 */

import {
  CarEssentialCriteria,
  CarEssentialCriteriaDisplayNames,
  PrefferedCarBrand,
  PrefferedCarBrandDisplayNames,
  PrefferedSeats,
  PrefferedSeatsDisplayNames,
  PrefferedVehicle,
  PrefferedVehicleDisplayNames,
  PrefferedRidePower,
  PrefferedRidePowerDisplayNames,
} from '../enums'
import { __values } from 'tslib'

export class EnumService {
  constructor() {
    // If needed, you can initialize any properties or configurations here
  }

  public static async getEnumInfo(enumClassName: string) {
    switch (enumClassName) {
      case 'CarEssentialCriteria':
        const carEssentialEnumValues = Object.values(CarEssentialCriteria).filter(
          (value) => typeof value === 'number',
        ) as CarEssentialCriteria[]
        // Type assertion for CarEssentialCriteriaDisplayNames
        const carEssentialDisplayNames: Record<CarEssentialCriteria, string> = CarEssentialCriteriaDisplayNames
        return carEssentialEnumValues.map((value) => ({ value, displayName: carEssentialDisplayNames[value] || '' }))

      case 'PrefferedCarBrand':
        const prefferedBrandEnumValues = Object.values(PrefferedCarBrand).filter(
          (value) => typeof value === 'number',
        ) as PrefferedCarBrand[]
        // Type assertion for PrefferedCarBrandDisplayNames
        const prefferedCarBrandDisplayNames: Record<PrefferedCarBrand, string> = PrefferedCarBrandDisplayNames
        return prefferedBrandEnumValues.map((value) => ({
          value,
          displayName: prefferedCarBrandDisplayNames[value] || '',
        }))

      case 'PrefferedSeats':
        const prefferedSeatsEnumValues = Object.values(PrefferedSeats).filter(
          (value) => typeof value === 'number',
        ) as PrefferedSeats[]
        // Type assertion for PrefferedSeatsDisplayNames
        const prefferedSeatsDisplayNames: Record<PrefferedSeats, string> = PrefferedSeatsDisplayNames
        return prefferedSeatsEnumValues.map((value) => ({
          value,
          displayName: prefferedSeatsDisplayNames[value] || '',
        }))

      case 'PrefferedVehicle':
        const prefferedVehicleEnumValues = Object.values(PrefferedVehicle).filter(
          (value) => typeof value === 'number',
        ) as PrefferedVehicle[]
        const prefferedVehicleDisplayNames: Record<PrefferedVehicle, string> = PrefferedVehicleDisplayNames
        return prefferedVehicleEnumValues.map((value) => ({
          value,
          displayName: prefferedVehicleDisplayNames[value] || '',
        }))
      case 'PrefferedRidePower':
        const prefferedRidePowerEnumValues = Object.values(PrefferedRidePower).filter(
          (value) => typeof value === 'number',
        ) as PrefferedRidePower[]
        const prefferedRidePowerDisplayNames: Record<PrefferedRidePower, string> = PrefferedRidePowerDisplayNames
        return prefferedRidePowerEnumValues.map((value) => ({
          value,
          displayName: prefferedRidePowerDisplayNames[value] || '',
        }))

      default:
        console.error('Invalid enum class name')
        return null
    }
  }
}

export default EnumService
