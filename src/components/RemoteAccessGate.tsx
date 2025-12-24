import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Unlock } from "lucide-react";
import { REMOTE_ACCESS_CONFIG } from "@/config/remoteAccess";

interface RemoteAccessGateProps {
  children: React.ReactNode;
}

export const RemoteAccessGate = ({ children }: RemoteAccessGateProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If remote access is disabled, allow access immediately
    if (!REMOTE_ACCESS_CONFIG.ENABLED) {
      setIsAuthenticated(true);
      setIsLoading(false);
      return;
    }

    // Check if user has already authenticated
    const storedAuth = localStorage.getItem(REMOTE_ACCESS_CONFIG.STORAGE_KEY);
    if (storedAuth === REMOTE_ACCESS_CONFIG.ACCESS_CODE) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Normalize the input (remove spaces, convert to uppercase)
    const normalizedInput = accessCode.replace(/\s/g, "").toUpperCase();
    const normalizedCode = REMOTE_ACCESS_CONFIG.ACCESS_CODE.replace(/\s/g, "").toUpperCase();

    if (normalizedInput === normalizedCode) {
      localStorage.setItem(REMOTE_ACCESS_CONFIG.STORAGE_KEY, REMOTE_ACCESS_CONFIG.ACCESS_CODE);
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid access code. Please try again.");
      setAccessCode("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(REMOTE_ACCESS_CONFIG.STORAGE_KEY);
    setIsAuthenticated(false);
    setAccessCode("");
  };

  // Show loading state briefly
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-green-600 border-r-transparent"></div>
          <p className="mt-4 text-gray-700 dark:text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  // Show access code prompt if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 p-4">
        <Card className="w-full max-w-md shadow-2xl">
          <CardHeader className="text-center space-y-2">
            <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Remote Access Required
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Enter your access code to continue to MikroGreenz
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label 
                  htmlFor="access-code" 
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Access Code
                </label>
                <Input
                  id="access-code"
                  type="text"
                  placeholder="Enter access code (e.g., 1F71-EFA5)"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  className="text-center text-lg tracking-wider font-mono uppercase"
                  autoComplete="off"
                  autoFocus
                  maxLength={20}
                />
                {error && (
                  <p className="text-sm text-red-600 dark:text-red-400 text-center">
                    {error}
                  </p>
                )}
              </div>
              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                disabled={!accessCode.trim()}
              >
                <Unlock className="w-4 h-4 mr-2" />
                Access Site
              </Button>
            </form>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-center text-gray-500 dark:text-gray-500">
                This site requires remote access authentication.
                <br />
                Contact the administrator if you need access.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Authenticated - show the actual content with logout option
  return (
    <div className="relative">
      {/* Floating logout button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={handleLogout}
          variant="outline"
          size="sm"
          className="shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800"
          title="Logout from remote access"
        >
          <Lock className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
      {children}
    </div>
  );
};

export default RemoteAccessGate;
