/**
 * Remote Access Configuration
 * 
 * This file contains the configuration for the remote access gate feature.
 * The access code protects the website from unauthorized access during development
 * or when sharing with specific clients/stakeholders.
 */

export const REMOTE_ACCESS_CONFIG = {
  /**
   * The access code required to view the website
   * Current code: 1F71-EFA5
   */
  ACCESS_CODE: "1F71-EFA5",
  
  /**
   * Enable or disable the remote access gate
   * Set to false to allow unrestricted access
   */
  ENABLED: true,
  
  /**
   * LocalStorage key for storing authentication state
   */
  STORAGE_KEY: "mikrogreenz_remote_access",
  
  /**
   * Session duration in milliseconds (default: 24 hours)
   * Set to 0 for unlimited (until logout or browser clear)
   */
  SESSION_DURATION: 0,
} as const;

export default REMOTE_ACCESS_CONFIG;
