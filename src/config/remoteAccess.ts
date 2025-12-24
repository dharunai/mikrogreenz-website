/**
 * Remote Access Configuration
 * 
 * This file contains the configuration for the remote access gate feature.
 * The access code protects the website from unauthorized access during development
 * or when sharing with specific clients/stakeholders.
 * 
 * SECURITY NOTE: This is a client-side authentication mechanism intended for
 * development/preview environments. The access code will be visible in the
 * compiled JavaScript bundle. For production with sensitive content, consider
 * implementing server-side authentication or using platform-specific auth
 * (e.g., Vercel Password Protection, Netlify Identity).
 */

export const REMOTE_ACCESS_CONFIG = {
  /**
   * The access code required to view the website
   * Current code: 1F71-EFA5
   * 
   * Note: This code is embedded in the client bundle and can be discovered
   * by inspecting the source code. It provides basic access control for
   * sharing previews with specific stakeholders.
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
