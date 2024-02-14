// helpers.ts

export const wrapper = (fn: Function) => {
  return async (param: string, req: any, res: any) => {
    try {
      return await fn(param, req, res)
    } catch (error) {
      // Handle errors appropriately
      console.error('Error in wrapper:', error)
      // You can choose to re-throw the error if needed
      throw error
    }
  }
}
