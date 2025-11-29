/**
 * Cache Statistics Component (Optional - for development)
 */

export const CacheStats = () => {
  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null
  }
  
  // Return null for now - can be implemented later if needed
  return null
}

export default CacheStats

